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
