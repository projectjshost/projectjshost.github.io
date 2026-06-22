export default class BackdropRefraction {
	constructor(selector, options = {}) {
		this.options = {
			strength: 150,
			edgeSize: 150,
			falloff: 6.0,
			rgbFringing: 0.5,
			blurAmt: 3,
			...options
		};

		this.elements = document.querySelectorAll(selector);
		this.svgContainer = document.getElementById('refraction-svg-container') || this._createContainer();
		this.counter = 0;

		this.resizeObserver = new ResizeObserver(entries => {
			entries.forEach(entry => this._applyEffect(entry.target));
		});

		this.elements.forEach(el => {
			el.dataset.refractionId = `refract-filter-${++this.counter}`;
			this.resizeObserver.observe(el);
		});
	}

	update(newOptions = {}) {
		this.options = { ...this.options, ...newOptions };
		this.elements.forEach(el => this._applyEffect(el));
	}

	_createContainer() {
		const div = document.createElement('div');
		div.innerHTML = `<svg id="refraction-svg-container" style="position: absolute; width: 0; height: 0;" aria-hidden="true"></svg>`;
		document.body.appendChild(div);
		return div.firstChild;
	}

	_applyEffect(el) {
		const id = el.dataset.refractionId;
		const width = el.offsetWidth || 600;
		const height = el.offsetHeight || 400;

		if (width === 0 || height === 0) return;

		const mapURL = this._generateDisplacementMap(width, height, this.options.edgeSize, this.options.falloff);

		this._updateFilter(id, mapURL);

		el.style.backdropFilter = `url(#${id})`;
		el.style.webkitBackdropFilter = `url(#${id})`;
	}

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
			document.getElementById(`img-${id}`).setAttribute('href', mapURL);
			document.getElementById(`blur-${id}`).setAttribute('stdDeviation', blurAmt);
			document.getElementById(`disp-red-${id}`).setAttribute('scale', scaleR);
			document.getElementById(`disp-green-${id}`).setAttribute('scale', scaleG);
			document.getElementById(`disp-blue-${id}`).setAttribute('scale', scaleB);
		}
	}

	_sdRoundedRect(px, py, bx, by, r) {
		let qx = Math.abs(px) - bx + r;
		let qy = Math.abs(py) - by + r;
		return Math.min(Math.max(qx, qy), 0.0) + Math.sqrt(Math.pow(Math.max(qx, 0.0), 2) + Math.pow(Math.max(qy, 0.0), 2)) - r;
	}

	_generateDisplacementMap(w, h, edgeSize, normalPow) {
		const canvas = document.createElement('canvas');
		canvas.width = w;
		canvas.height = h;
		const ctx = canvas.getContext('2d');
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

				const dispX = normX * shaped;
				const dispY = normY * shaped;

				const i = (y * w + x) * 4;
				imgData.data[i] = Math.round((dispX * 0.5 + 0.5) * 255);
				imgData.data[i + 1] = Math.round((dispY * 0.5 + 0.5) * 255);
				imgData.data[i + 2] = 0;
				imgData.data[i + 3] = 255;
			}
		}

		ctx.putImageData(imgData, 0, 0);
		return canvas.toDataURL('image/png');
	}
}