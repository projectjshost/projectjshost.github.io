function installTheme(css) {
    localStorage.theme = "custom";
    localStorage.customThemeCSS = css;
    if (document.getElementById("JStheme")) {
        document.getElementById("JStheme").remove();
    }
    if (document.getElementById("customTheme")) {
        document.getElementById("customTheme").remove();
    }
    $('head').append("<style id='customTheme'>" + localStorage.customThemeCSS + "</style>");
}
function resetTheme(css) {
    localStorage.theme = "dark";
    localStorage.customThemeCSS = "";
    if (document.getElementById("customTheme")) {
        document.getElementById("customTheme").remove();
    }
    if (document.getElementById("JStheme")) {
        document.getElementById("JStheme").remove();
    }
    loadTheme(localStorage.theme);
}