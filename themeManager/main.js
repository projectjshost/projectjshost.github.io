const themeManager = {
	init: () => {
		$("#currentView").empty();
		const getThemes = () => {
			const themeItem = (item) => {
				return item.substring(0, 12) == "customTheme_"
			}
			let fullLocalStorage = Object.keys(localStorage);
			return (fullLocalStorage.filter(themeItem))
		}
		const customThemes = getThemes();
		const renderThemeList = (themes, type, i1) => {
			for (var i = i1; i < themes.length + i1; i++) {
				let themeID;
				const getThemeObject = () => {
					if (type == "custom") {
						themeID = themes[i - i1];
						return {
							"name": themes[i - i1],
							"name": sanitizeText(atob(themes[i - i1].slice(12))),
							"background": JSON.parse(localStorage.getItem(themes[i - i1])).background,
							"accent": JSON.parse(localStorage.getItem(themes[i - i1])).accent
						}
					} else {
						themeID = themes[i][0];
						return themes[i][1];
					}
				}
				const theme = getThemeObject();
				$("#currentView").append(`<div class="listItem themeItem"><div class="theme"><div class="preview" style="background: ${theme.background}"></div><div class="preview" style="background: ${theme.accent}"></div>${theme.name}</div><button class="applyButton"><span class="icon">check</span>Apply</button></div>`);
				if (themeID == localStorage.theme) {
					$(`.listItem:nth-of-type(${i + 1})`).addClass('active');
					if (localStorage.theme.slice(0, 12) == "customTheme_") {
						$(`.listItem:nth-of-type(${i + 1})`).append(`<button class="deleteButton main"><span class="icon">close</span>Remove</button>`);
					}
					$(`.listItem:nth-of-type(${i + 1})`).append(`<button class="editButton main"><span class="icon">edit</span>Edit</button>`);
				}
				$(`.listItem:nth-of-type(${i + 1})>.applyButton`).on("mousedown", () => {
					themeEngine.setTheme(themeID);
					themeManager.init();
				});
				$(`.listItem:nth-of-type(${i + 1})>.editButton`).on("click", () => {
					openApp('themeEditor');
				})
				$(`.listItem:nth-of-type(${i + 1})>.deleteButton`).on("click", () => {
					localStorage.removeItem(themeID);
					themeEngine.setTheme();
					themeManager.init();
				})
			}
			return i
		}
		renderThemeList(customThemes, "custom", renderThemeList(Object.entries(themes), "default", 0));
	}
}
themeManager.init();
