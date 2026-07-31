/**
 * Fetches the latest commit date for a GitHub repository and formats it as `YYYY-MM-DD HH:mm`.
 *
 * @param {string} owner - The GitHub repository owner or organization name.
 * @param {string} repo - The GitHub repository name.
 * @returns {Promise<string>} A promise that resolves to the formatted commit date string, 
 *                            or a status/error message string.
 */
export async function getLatestCommitDate(owner, repo) {
	const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			return `GitHub API Error: ${response.statusText}`;
		}

		const commits = await response.json();

		if (commits.length === 0) {
			return 'No commits found.';
		}

		const date = new Date(commits[0].commit.committer.date);

		/**
		 * Pads a number with a leading zero if it's less than 10.
		 * @param {number} num - The number to pad.
		 * @returns {string} The padded two-digit string.
		 */
		const pad = (num) => String(num).padStart(2, '0');

		const year = date.getFullYear();
		const month = pad(date.getMonth() + 1);
		const day = pad(date.getDate());
		const hours = pad(date.getHours());
		const minutes = pad(date.getMinutes());

		return `${year}-${month}-${day} ${hours}:${minutes}`;
	} catch (error) {
		console.error('Failed to fetch commit date:', error);
		return 'Failed to fetch commit date:' + error;
	}
}

/**
 * Gets the version string based on the current environment's hostname (`window.location.hostname`).
 *
 * - Returns the latest GitHub commit date if hosted on **GitHub Pages** (`*.github.io`).
 * - Returns `"dev"` if hosted on a **local environment** (`localhost`, `127.0.0.1`, `0.0.0.0`).
 * - Returns `"unknown, <hostname>"` for **other environments**.
 *
 * @returns {Promise<string>} A promise that resolves to the version identifier string.
 */
export const getVersionString = async () => {
	if (location.hostname.endsWith(".github.io")) {
		return await getLatestCommitDate(location.hostname.split(".")[0], location.hostname);
	} else if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "0.0.0.0") {
		return "dev";
	} else {
		return `unknown, ${location.hostname}`;
	}
}