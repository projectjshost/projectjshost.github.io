function setTheme(theme) {
    if (theme == "dark") {
        localStorage.theme = "dark";
        dialog("set dark theme")
    } else {
        localStorage.theme = "light";
        dialog("set light theme")
    }
}
