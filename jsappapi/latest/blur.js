/**
 * @typedef {Object} RefractionOptions
 * @property {number} [strength=150] Displacement strength/intensity of refraction.
 * @property {number} [edgeSize=150] Width of the edge region where refraction occurs (also radius for SDF).
 * @property {number} [falloff=6.0] Falloff exponent controlling the shape/curve of the refraction edge.
 * @property {number} [rgbFringing=0.5] Chromatic aberration multiplier (RGB splitting offset factor).
 * @property {number} [blurAmt=3] Amount of Gaussian blur applied to the final result (stdDeviation).
 * @property {number} [wobbleStrength=0] Intensity of procedural sine noise/wobble distortion.
 * @property {number} [wobbleScale=0.15] Scale/frequency of the procedural wobble pattern.
 */

/**
 * Class that applies dynamic, glass-like dynamic SVG displacement refraction 
 * to elements using standard `backdrop-filter`.
 */
export default class BackdropRefraction {
	/**
	 * Counter used to generate unique SVG filter IDs across instances.
	 * @type {number}
	 * @private
	 * @static
	 */
	static _globalCounter = 0;

	/**
	 * Creates an instance of `BackdropRefraction`.
	 * 
	 * @param {string} selector - CSS selector matching target DOM elements.
	 * @param {RefractionOptions} [options={}] - Configuration options for refraction.
	 */
	constructor(selector, options = {}) {
		/**
		 * Active options configuration.
		 * @type {Required<RefractionOptions>}
		 */
		this.options = {
			strength: 150,
			edgeSize: 150,
			falloff: 6.0,
			rgbFringing: 0.5,
			blurAmt: 3,
			wobbleStrength: 0, // disabled, but 0.025 looks nice
			wobbleScale: 0.15,
			...options
		};

		/**
		 * Target DOM elements managed by this instance.
		 * @type {NodeListOf<HTMLElement>}
		 */
		this.elements = document.querySelectorAll(selector);

		/**
		 * SVG DOM element containing dynamic filter markup.
		 * @type {Element}
		 */
		this.svgContainer = document.getElementById('refraction-svg-container') || this._createContainer();

		/**
		 * ResizeObserver monitoring changes to target elements to recompute displacement maps.
		 * @type {ResizeObserver}
		 */
		this.resizeObserver = new ResizeObserver(entries => {
			entries.forEach(entry => this._applyEffect(/** @type {HTMLElement} */ (entry.target)));
		});

		this.elements.forEach(el => {
			el.dataset.refractionId = `refract-filter-${++BackdropRefraction._globalCounter}`;
			this.resizeObserver.observe(el);
		});
	}

	/**
	 * Cleans up DOM modifications, detaches observers, and removes dynamic SVG filters.
	 * 
	 * @returns {void}
	 */
	destroy() {
		this.resizeObserver.disconnect();
		this.elements.forEach(el => {
			const id = el.dataset.refractionId;
			if (id) {
				const filter = document.getElementById(id);
				if (filter) filter.remove();
				delete el.dataset.refractionId;
			}
			el.style.backdropFilter = '';
			el.style.webkitBackdropFilter = '';
		});
	}

	/**
	 * Merges partial options into current configuration and re-applies effect.
	 * 
	 * @param {RefractionOptions} [newOptions={}] - Partial options to apply.
	 * @returns {void}
	 */
	update(newOptions = {}) {
		this.options = { ...this.options, ...newOptions };
		this.elements.forEach(el => this._applyEffect(el));
	}

	/**
	 * Creates and appends an invisible SVG container element to the body if missing.
	 * 
	 * @private
	 * @returns {Element} SVG container element.
	 */
	_createContainer() {
		const div = document.createElement('div');
		div.innerHTML = `<svg id="refraction-svg-container" style="position: absolute; width: 0; height: 0;" aria-hidden="true"></svg>`;
		document.body.appendChild(div);
		return /** @type {Element} */ (div.firstChild);
	}

	/**
	 * Computes displacement mapping and attaches `backdrop-filter` styles to an element.
	 * 
	 * @private
	 * @param {HTMLElement} el - Target DOM element.
	 * @returns {void}
	 */
	_applyEffect(el) {
		const id = el.dataset.refractionId;
		if (!id) return;

		const width = el.offsetWidth || 600;
		const height = el.offsetHeight || 400;

		if (width === 0 || height === 0) return;

		const mapURL = this._generateDisplacementMap(
			width,
			height,
			this.options.edgeSize,
			this.options.falloff,
			this.options.wobbleStrength,
			this.options.wobbleScale
		);

		this._updateFilter(id, mapURL);

		el.style.backdropFilter = `url(#${id})`;
		el.style.webkitBackdropFilter = `url(#${id})`;
	}

	/**
	 * Injects or updates the SVG filter definition containing RGBA dynamic displacement tags.
	 * 
	 * @private
	 * @param {string} id - Unique SVG filter ID.
	 * @param {string} mapURL - Data URL string of generated PNG displacement canvas map.
	 * @returns {void}
	 */
	_updateFilter(id, mapURL) {
		const { strength, rgbFringing, blurAmt } = this.options;

		const scaleR = strength * (1.0 + rgbFringing);
		const scaleG = strength;
		const scaleB = strength * (1.0 - rgbFringing);

		let filter = document.getElementById(id);

		if (!filter) {
			this.svgContainer.insertAdjacentHTML('beforeend', `
				<filter id="${id}" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB">
					<feImage id="img-${id}" href="${mapURL}" result="NORMAL_MAP" />
					
					<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="RED_CHANNEL"/>
					<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="GREEN_CHANNEL"/>
					<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="BLUE_CHANNEL"/>

					<feDisplacementMap id="disp-red-${id}" in="RED_CHANNEL" in2="NORMAL_MAP" scale="${scaleR}" xChannelSelector="R" yChannelSelector="G" result="DISP_R" />
					<feDisplacementMap id="disp-green-${id}" in="GREEN_CHANNEL" in2="NORMAL_MAP" scale="${scaleG}" xChannelSelector="R" yChannelSelector="G" result="DISP_G" />
					<feDisplacementMap id="disp-blue-${id}" in="BLUE_CHANNEL" in2="NORMAL_MAP" scale="${scaleB}" xChannelSelector="R" yChannelSelector="G" result="DISP_B" />

					<feBlend mode="screen" in="DISP_R" in2="DISP_G" result="RG_COMBINED" />
					<feBlend mode="screen" in="RG_COMBINED" in2="DISP_B" result="REFRACTED_SHARP" />
					
					<feGaussianBlur id="blur-${id}" in="REFRACTED_SHARP" stdDeviation="${blurAmt}" result="FINAL_RGB" />
				</filter>
			`);
		} else {
			document.getElementById(`img-${id}`)?.setAttribute('href', mapURL);
			document.getElementById(`blur-${id}`)?.setAttribute('stdDeviation', blurAmt.toString());
			document.getElementById(`disp-red-${id}`)?.setAttribute('scale', scaleR.toString());
			document.getElementById(`disp-green-${id}`)?.setAttribute('scale', scaleG.toString());
			document.getElementById(`disp-blue-${id}`)?.setAttribute('scale', scaleB.toString());
		}
	}

	/**
	 * Signed Distance Function (SDF) for a rounded rectangle.
	 * 
	 * @private
	 * @param {number} px - Point X coordinate relative to center.
	 * @param {number} py - Point Y coordinate relative to center.
	 * @param {number} bx - Half-width bound of rectangle.
	 * @param {number} by - Half-height bound of rectangle.
	 * @param {number} r - Corner radius.
	 * @returns {number} Distance to rectangle edge (negative inside, positive outside).
	 */
	_sdRoundedRect(px, py, bx, by, r) {
		let qx = Math.abs(px) - bx + r;
		let qy = Math.abs(py) - by + r;
		return Math.min(Math.max(qx, qy), 0.0) + Math.sqrt(Math.pow(Math.max(qx, 0.0), 2) + Math.pow(Math.max(qy, 0.0), 2)) - r;
	}

	/**
	 * Renders displacement normals onto an offscreen canvas and converts it into a Data URL PNG.
	 * 
	 * @private
	 * @param {number} w - Canvas pixel width.
	 * @param {number} h - Canvas pixel height.
	 * @param {number} edgeSize - Corner radius / edge refraction distance.
	 * @param {number} normalPow - Falloff power calculation exponent.
	 * @param {number} wobbleStr - Sine wobble noise magnitude.
	 * @param {number} wobbleScale - Sine wobble noise frequency.
	 * @returns {string} Image base64 data URL (`image/png`).
	 */
	_generateDisplacementMap(w, h, edgeSize, normalPow, wobbleStr, wobbleScale) {
		const canvas = document.createElement('canvas');
		canvas.width = w;
		canvas.height = h;
		const ctx = canvas.getContext('2d');
		if (!ctx) return '';
		
		const imgData = ctx.createImageData(w, h);

		const halfW = w / 2;
		const halfH = h / 2;

		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				const px = x - halfW;
				const py = y - halfH;

				const dist = this._sdRoundedRect(px, py, halfW, halfH, edgeSize);
				const edgeProximity = Math.max(0.0, Math.min(1.0, 1.0 + (dist / edgeSize)));
				const shaped = Math.sin(Math.pow(edgeProximity, normalPow) * (Math.PI / 2));

				const h_step = 1.0;
				const d1x = this._sdRoundedRect(px + h_step, py, halfW, halfH, edgeSize);
				const d2x = this._sdRoundedRect(px - h_step, py, halfW, halfH, edgeSize);
				const d1y = this._sdRoundedRect(px, py + h_step, halfW, halfH, edgeSize);
				const d2y = this._sdRoundedRect(px, py - h_step, halfW, halfH, edgeSize);

				const gradX = d1x - d2x;
				const gradY = d1y - d2y;
				const len = Math.sqrt(gradX * gradX + gradY * gradY);

				let normX = 0, normY = 0;
				if (len > 0) {
					normX = -gradX / len;
					normY = -gradY / len;
				}

				let finalDispX = normX * shaped;
				let finalDispY = normY * shaped;

				if (wobbleStr > 0) {
					const nx = Math.sin(x * wobbleScale + Math.cos(y * wobbleScale))
						+ Math.sin(x * wobbleScale * 1.3 + y * wobbleScale * 0.8);
					const ny = Math.cos(y * wobbleScale + Math.sin(x * wobbleScale))
						+ Math.cos(y * wobbleScale * 1.3 + x * wobbleScale * 0.8);

					finalDispX += nx * 0.5 * wobbleStr;
					finalDispY += ny * 0.5 * wobbleStr;
				}

				finalDispX = Math.max(-1.0, Math.min(1.0, finalDispX));
				finalDispY = Math.max(-1.0, Math.min(1.0, finalDispY));

				const i = (y * w + x) * 4;
				imgData.data[i] = Math.round((finalDispX * 0.5 + 0.5) * 255);
				imgData.data[i + 1] = Math.round((finalDispY * 0.5 + 0.5) * 255);
				imgData.data[i + 2] = 0;
				imgData.data[i + 3] = 255;
			}
		}

		ctx.putImageData(imgData, 0, 0);
		return canvas.toDataURL('image/png');
	}
}