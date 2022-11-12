const themeManager = {
	init: () => {
		// All default themes
		const defaultThemes = [
				{
					"name": "mint-light",
					"friendlyName": "Mint Light",
					"background": "hsl(120, 5%, 95%)",
					"accent": "hsl(150, 40%, 40%)"
				},
				{
					"name": "mint-dark",
					"friendlyName": "Mint Dark",
					"background": "hsl(120, 5%, 5%)",
					"accent": "hsl(150, 75%, 60%)"
				},
				{
					"name": "catppuccin",
					"friendlyName": "Catppuccin",
					"background": "hsl(254, 25%, 10%)",
					"accent": "hsl(24, 88%, 78%)"
				},
				{
					"name": "rose-pine",
					"friendlyName": "Rosé Pine",
					"background": "#1f1d2e",
					"accent": "#ebbcba"
				},
				{
					"name": "gruvbox",
					"friendlyName": "Gruvbox",
					"background": "#1d2021",
					"accent": "#fabd2f"
				},
				{
					"name": "nord",
					"friendlyName": "Nord",
					"background": "#2e3440",
					"accent": "#a3be8c"
				},
				{
					"name": "mirai",
					"friendlyName": "Mirai",
					"background": "#181c25",
					"accent": "#bce0eb"
				},
				{
					"name": "strawberry-cheesecake",
					"friendlyName": "Strawberry Cheesecake",
					"background": "hsl(0, 0%, 100%)",
					"accent": "hsl(0, 80%, 44%)"
				}
			]
			const getThemes = () => {
				const themeItem = (item) => {
					return item.substring(0, 12) == "customTheme_"
				}
				let fullLocalStorage = Object.keys(localStorage);
				return(fullLocalStorage.filter(themeItem))
			}
			const customThemes = getThemes();
			const renderThemeList = (themes, type, i1) => {
				for (var i = i1; i < themes.length+i1; i++) {
					const getThemeObject = () => {
						if(type=="custom") {
							return {
								"name": themes[i-i1],
								"friendlyName": sanitizeText(atob(themes[i-i1].slice(12))),
								"background": JSON.parse(localStorage.getItem(themes[i-i1])).background,
								"accent": JSON.parse(localStorage.getItem(themes[i-i1])).accent
							}
						} else {
							return themes[i];
						}
					}
					const theme = getThemeObject();
					$("#currentView").append(`<div class="listItem themeItem"><div class="theme"><div class="preview" style="background: ${theme.background}"></div><div class="preview" style="background: ${theme.accent}"></div>${theme.friendlyName}</div><button class="applyButton"><span class="icon">check</span>Apply</button></div>`);
					if(theme.name==localStorage.theme) {
						$(`.listItem:nth-of-type(${i+1})`).addClass('active');
						if(localStorage.theme.slice(0,12)=="customTheme_") {
							$(`.listItem:nth-of-type(${i+1})`).append(`<button class="deleteButton main"><span class="icon">close</span>Remove</button>`);
						}
						$(`.listItem:nth-of-type(${i+1})`).append(`<button class="editButton main"><span class="icon">edit</span>Edit</button>`);
						
					}
					$(`.listItem:nth-of-type(${i+1})>.applyButton`).on("mousedown", () => {
						themeEngine.setTheme(theme.name);
						location.reload()
					});
					$(`.listItem:nth-of-type(${i+1})>.editButton`).on("click", () => {
						openApp('themeEditor')
					})
					$(`.listItem:nth-of-type(${i+1})>.deleteButton`).on("click", () => {
						localStorage.removeItem(theme.name);
						themeEngine.setTheme();
						location.reload()
					})
				}
				return i
			}
			renderThemeList(customThemes, "custom", renderThemeList(defaultThemes, "default", 0));
	}
}
$(document).ready(() =>{
	themeManager.init()
})

