function installTheme(css) {
    localStorage.theme = "custom";
    localStorage.customThemeCSS = css;
    if (document.getElementById("customTheme")) {
        document.getElementById("customTheme").remove();
    }
    $('head').append("<style id='customTheme'>" + localStorage.customThemeCSS + "</style>");
}
function resetTheme(css) {
    localStorage.theme = "dark";
    localStorage.removeItem("customThemeCSS");
    if (document.getElementById("customTheme")) {
        document.getElementById("customTheme").remove();
    }
}