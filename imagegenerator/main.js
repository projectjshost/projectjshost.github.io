import CryptoJS from "https://esm.sh/crypto-js"

const encryptionKey = atob("JHJBeHRYbFlAUiFsQFJ4aWVWSE9iYUEkN0MxZGtGQEgwWUxSeDBPRmxoJmcyJmRPSTNCVXRRc0ZNRWNrd3dWaQ==");

const generateImage = async (token, prompt, seed) => {
	try {
		const response = await fetch("https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell", {
			"headers": {
				"Accept": "image/jpeg",
				"Authorization": `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			"body": JSON.stringify({
				"inputs": prompt,
				"seed": seed,
				"target_size": {
					"width": 1024,
					"height": 1024
				}
			}),
			"method": "POST",
			"mode": "cors"
		});

		if (!response.ok) {
			const responseMessage = await response.json();
			throw new Error(responseMessage.error);
		}

		const contentType = response.headers.get("content-type");
		if (contentType && contentType.includes("image/jpeg")) {
			const blob = await response.blob();
			return blob;
		} else {
			throw new Error("Unexpected content type. Expected image/jpeg.");
		}
	} catch (error) {
		console.log(error)
		dialog(error.toString())
	}
}

document.getElementById('imageForm').addEventListener('submit', async function (event) {
	event.preventDefault();

	// Disable the generate button
	const generateButton = document.getElementById('generateButton');
	generateButton.disabled = true;

	// Create a placeholder with a circular progress bar
	const placeholder = document.createElement('div');
	placeholder.classList.add('progress-container');

	const progressCircle = document.createElement('div');
	progressCircle.classList.add('progress-circle');


	placeholder.appendChild(progressCircle);
	document.getElementById('imageContainer').appendChild(placeholder);

	// Start the progress bar animation
	let progress = 0;
	const interval = setInterval(() => {
		progress += 0.16667; // 100% over 60 seconds
		progressCircle.style.background = `conic-gradient(var(--accent-color) ${progress}%, var(--button-color) ${progress}%)`;
		if (progress >= 100) {
			clearInterval(interval);
		}
	}, 100);

	const token = atob(CryptoJS.AES.decrypt("U2FsdGVkX1+T9jEY6yn/bzREu3ECRrp49T+S9VRu9Cr5VV3Tk1mwR6W1tdVurEg/fzMao/JplpHaDVwYuFyOewN/CRAZFmpzZVFqzpB9b2U=", encryptionKey).toString(CryptoJS.enc.Utf8));

	const prompt = document.getElementById('prompt').value;
	const seed = Math.floor(Math.random() * 1000000);

	try {
		const imageBlob = await generateImage(token, prompt, seed);
		const imageUrl = URL.createObjectURL(imageBlob);

		const imageElement = document.createElement('img');
		imageElement.src = imageUrl;
		imageElement.classList.add('generatedImage');

		// Remove the placeholder and add the generated image
		document.getElementById('imageContainer').removeChild(placeholder);
		document.getElementById('imageContainer').appendChild(imageElement);
	} catch (error) {
		console.error('Error generating image:', error);
		// Remove the placeholder in case of error
		document.getElementById('imageContainer').removeChild(placeholder);
	} finally {
		// Re-enable the generate button
		generateButton.disabled = false;
		clearInterval(interval); // Stop the progress bar
	}
});