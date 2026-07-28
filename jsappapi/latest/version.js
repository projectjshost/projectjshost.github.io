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

export const getVersionString = async () => {
	if (location.hostname.endsWith(".github.io")) {
		return await getLatestCommitDate(location.hostname.split(".")[0], location.hostname);
	} else if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "0.0.0.0") {
		return "dev";
	} else {
		return `unknown, ${location.hostname}`;
	}
}
