/**
 * Extracts the primary hue (0-360) and determines if the image is dark.
 * 
 * @param {string} imageUrl - The URL of the image.
 * @returns {Promise<{ hue: number, isDark: boolean }>} - A promise that resolves to an object
 *   containing the primary hue (0-359) and a boolean indicating if the image is dark.
 */
export async function getImageColor(imageUrl) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = 'Anonymous';

		img.onload = () => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d', { willReadFrequently: true });

			const maxSize = 150;
			let width = img.width;
			let height = img.height;
			if (width > maxSize || height > maxSize) {
				const ratio = Math.min(maxSize / width, maxSize / height);
				width = Math.floor(width * ratio);
				height = Math.floor(height * ratio);
			}

			canvas.width = width;
			canvas.height = height;
			ctx.drawImage(img, 0, 0, width, height);

			const imgData = ctx.getImageData(0, 0, width, height).data;

			// Array to count occurrences of each hue (0-359)
			const hueCounts = new Array(360).fill(0);
			let validPixels = 0;
			let totalLuminance = 0;
			let opaquePixels = 0;

			for (let i = 0; i < imgData.length; i += 4) {
				const r = imgData[i];
				const g = imgData[i + 1];
				const b = imgData[i + 2];
				const a = imgData[i + 3];

				// Skip highly transparent pixels
				if (a < 128) continue;

				// Calculate perceived brightness/luminance (0 to 255)
				const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
				totalLuminance += luminance;
				opaquePixels++;

				// Skip grayscale/white/black pixels (low saturation).
				// If the difference between the max and min RGB values is small, 
				// the pixel is gray/white/black and lacks a meaningful hue.
				const max = Math.max(r, g, b);
				const min = Math.min(r, g, b);
				const delta = max - min;
				if (delta < 15) continue;

				// Convert RGB to Hue (0-360)
				let hue = 0;
				if (max === r) {
					hue = ((g - b) / delta) % 6;
				} else if (max === g) {
					hue = (b - r) / delta + 2;
				} else {
					hue = (r - g) / delta + 4;
				}

				hue = Math.round(hue * 60);
				if (hue < 0) hue += 360;
				if (hue >= 360) hue = 0;

				hueCounts[hue]++;
				validPixels++;
			}

			// If the image is fully transparent
			if (opaquePixels === 0) {
				return resolve({ hue: 210, isDark: false });
			}

			// Calculate average luminance and check if it is below the midpoint (128)
			const avgLuminance = totalLuminance / opaquePixels;
			const isDark = avgLuminance < 128;

			// If there are no colorful pixels
			if (validPixels === 0) {
				return resolve({ hue: 210, isDark });
			}

			// Find the primary hue using a sliding window.
			// Hues are a circle (0 and 359 are next to each other). We use a window 
			// to group similar hues together so we don't split a dominant color.
			let maxWeight = 0;
			let primaryHue = 0;
			const windowSize = 5; // +/- 5 degrees

			for (let i = 0; i < 360; i++) {
				let weight = 0;
				for (let j = -windowSize; j <= windowSize; j++) {
					// Wrap around the circle (e.g., -1 becomes 359)
					const index = (i + j + 360) % 360;
					weight += hueCounts[index];
				}

				if (weight > maxWeight) {
					maxWeight = weight;
					primaryHue = i;
				}
			}

			resolve({ hue: primaryHue, isDark });
		};

		img.onerror = () => reject(new Error('Failed to load image'));
		img.src = imageUrl;
	});
}