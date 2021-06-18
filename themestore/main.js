function installTheme(css) {
    localStorage.customThemeCSS = css;
    setTheme("custom")
}
function resetTheme() {
    setTheme("dark");
}