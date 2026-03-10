let hiddenApps = JSON.parse(localStorage.getItem('hiddenApps') || '[]');
let favoriteApps = JSON.parse(localStorage.getItem('favoriteApps') || '[]');

function renderApps() {
	const container = document.getElementById('appOverview');
	const categories = {};

	const favs = apps.filter(app => favoriteApps.includes(app.target) && !hiddenApps.includes(app.target));
	if (favs.length > 0) {
		categories['Favorites'] = favs;
	}

	apps.forEach(app => {
		if (hiddenApps.includes(app.target)) return;
		if (favoriteApps.includes(app.target)) return;

		if (!categories[app.category]) {
			categories[app.category] = [];
		}
		categories[app.category].push(app);
	});

	const fragment = document.createDocumentFragment();

	for (const [categoryName, appsList] of Object.entries(categories)) {
		const title = document.createElement('p2');
		title.className = 'category-title';
		title.textContent = categoryName;
		fragment.appendChild(title);

		const currentArea = document.createElement('div');
		currentArea.className = 'area';

		appsList.forEach(app => {
			const iconHtml = app.isClock
				? `<canvas class="appIcon" id="clockCanvas" width="70" height="70"></canvas>`
				: `<div class="appIcon icon-${app.icon}"></div>`;

			const appAction = app.target.startsWith("https://")
				? `href="${app.target}"`
				: `onclick="openApp('${app.target}')"`;

			const wrapperTag = app.target.startsWith("https://") ? "a" : "div";

			const tileHtml = `
				<${wrapperTag} ${appAction} class="app-wrapper">
					<div class="appTile" data-target="${app.target}">
						${iconHtml}
						<p>${app.name}</p>
					</div>
				</${wrapperTag}>
			`;

			currentArea.insertAdjacentHTML('beforeend', tileHtml);
		});

		fragment.appendChild(currentArea);
	}

	container.innerHTML = '';
	container.appendChild(fragment);

	initClock();
}

let clockInterval;

function initClock() {
	if (clockInterval) clearInterval(clockInterval);

	const canvas = document.getElementById('clockCanvas');
	if (!canvas) return;

	const ctx = canvas.getContext('2d');

	// Set up high DPI canvas
	const dpr = window.devicePixelRatio || 1;
	const width = canvas.clientWidth || 70;
	const height = canvas.clientHeight || 70;

	canvas.width = width * dpr;
	canvas.height = height * dpr;
	ctx.scale(dpr, dpr);

	const centerX = width / 2;
	const centerY = height / 2;
	const radius = Math.min(centerX, centerY) - 2;

	const rootStyles = getComputedStyle(document.documentElement);

	function drawClock() {
		// Clear canvas before drawing next frame
		ctx.clearRect(0, 0, width, height);

		// Draw clock face
		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
		ctx.fillStyle = rootStyles.getPropertyValue('--element').trim() || "transparent";
		ctx.fill();

		const now = new Date();
		const hours = now.getHours() % 12;
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();

		// Draw hands
		drawHand(hours * 30 + minutes * 0.5, radius * 0.5, 2, '--foreground');
		drawHand(minutes * 6, radius * 0.7, 1.5, '--foreground');
		drawHand(seconds * 6, radius * 0.9, 1, '--foreground2');
	}

	function drawHand(angle, length, lineWidth, colorVar) {
		ctx.beginPath();
		ctx.moveTo(centerX, centerY);
		const radians = (angle - 90) * Math.PI / 180;
		ctx.lineTo(centerX + length * Math.cos(radians), centerY + length * Math.sin(radians));
		ctx.strokeStyle = rootStyles.getPropertyValue(colorVar).trim() || "#000";
		ctx.lineWidth = lineWidth;
		ctx.lineCap = 'round';
		ctx.stroke();
	}

	drawClock();
	clockInterval = setInterval(drawClock, 1000);
}

const contextMenu = document.createElement('div');
contextMenu.className = 'context-menu hidden';

contextMenu.innerHTML = `
	<div class="context-menu-item" id="favAppOption">
		<span class="icon material-icons" id="favAppIcon">star</span> <span id="favAppText">Favorite</span>
	</div>
	<div class="context-menu-item" id="hideAppOption">
		<span class="icon material-icons">visibility_off</span> Hide App
	</div>
`;
document.body.appendChild(contextMenu);

let contextTargetApp = null;

document.addEventListener('contextmenu', (e) => {
	const appTile = e.target.closest('.appTile');

	if (appTile) {
		e.preventDefault();

		const target = appTile.dataset.target;

		if (target) {
			contextTargetApp = target;

			const isFav = favoriteApps.includes(target);
			document.getElementById('favAppIcon').textContent = isFav ? 'heart_broken' : 'favorite';
			document.getElementById('favAppText').textContent = isFav ? 'Unfavorite' : 'Favorite';

			const hideOption = document.getElementById('hideAppOption');
			if (target === 'settings') {
				hideOption.style.display = 'none';
			} else {
				hideOption.style.display = 'flex';
			}
			contextMenu.classList.remove('hidden');

			const menuWidth = contextMenu.offsetWidth;
			const menuHeight = contextMenu.offsetHeight;

			let posX = e.pageX;
			let posY = e.pageY;

			if (posX + menuWidth > window.innerWidth) posX = window.innerWidth - menuWidth - 5;
			if (posY + menuHeight > window.innerHeight) posY = window.innerHeight - menuHeight - 5;

			contextMenu.style.left = `${posX}px`;
			contextMenu.style.top = `${posY}px`;
		}
	} else {
		contextMenu.classList.add('hidden');
	}
});

document.getElementById('favAppOption').addEventListener('mouseup', () => {
	if (contextTargetApp) {
		if (favoriteApps.includes(contextTargetApp)) {
			favoriteApps = favoriteApps.filter(app => app !== contextTargetApp);
		} else {
			favoriteApps.push(contextTargetApp);
		}

		localStorage.setItem('favoriteApps', JSON.stringify(favoriteApps));
		renderApps();
	}

	contextMenu.classList.add('hidden');
	contextTargetApp = null;
});

document.getElementById('hideAppOption').addEventListener('mouseup', () => {
	if (contextTargetApp && !hiddenApps.includes(contextTargetApp)) {
		hiddenApps.push(contextTargetApp);
		localStorage.setItem('hiddenApps', JSON.stringify(hiddenApps));
		renderApps();
	}

	contextMenu.classList.add('hidden');
	contextTargetApp = null;
});

document.addEventListener('click', (e) => {
	if (!contextMenu.contains(e.target)) {
		contextMenu.classList.add('hidden');
	}
});

renderApps();