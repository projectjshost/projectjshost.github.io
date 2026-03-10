const themeManager = {
	init: () => {
		const $currentView = $("#currentView");
		$currentView.empty();

		const defaultThemes = Object.entries(themes).map(([id, data]) => ({
			id,
			isCustom: false,
			name: data.name,
			background: data.background,
			accent: data.accent
		}));

		const customThemes = Object.keys(localStorage)
			.filter(key => key.startsWith("customTheme_"))
			.map(id => {
				const localData = JSON.parse(localStorage.getItem(id) || "{}");
				return {
					id,
					isCustom: true,
					name: sanitizeText(atob(id.slice(12))),
					background: localData.background,
					accent: localData.accent
				};
			});

		const allThemes = [...defaultThemes, ...customThemes];

		const $themeElements = allThemes.map(theme => {
			const isActive = theme.id === localStorage.theme;

			const $item = $(`
				<div class="listItem themeItem ${isActive ? 'active' : ''}">
					<div class="theme">
						<div class="preview" style="background: ${theme.background}"></div>
						<div class="preview" style="background: ${theme.accent}"></div>
						${theme.name}
					</div>
					<button class="applyButton"><span class="icon">check</span>Apply</button>
				</div>
			`);

			if (isActive) {
				if (theme.isCustom) {
					$item.append(`<button class="deleteButton main"><span class="icon">close</span>Remove</button>`);
				}
				$item.append(`<button class="editButton main"><span class="icon">edit</span>Edit</button>`);
			}

			$item.find('.applyButton').on("mousedown", () => {
				themeEngine.setTheme(theme.id);
				themeManager.init();
			});

			if (isActive) {
				$item.find('.editButton').on("click", () => {
					openApp('themeEditor');
				});

				if (theme.isCustom) {
					$item.find('.deleteButton').on("click", () => {
						localStorage.removeItem(theme.id);
						themeEngine.setTheme();
						themeManager.init();
					});
				}
			}

			return $item;
		});

		$currentView.append($themeElements);
	}
};

themeManager.init();
