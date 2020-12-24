function setTheme(theme) {
    if (theme == "dark") {
        localStorage.theme = "dark";
        if (document.getElementById("lightTheme")) {
            $("#lightTheme").remove();
        }
        dialog("Theme veranderd naar: Donker");
    } else {
        localStorage.theme = "light";
        loadTheme("light");
        dialog("Thema veranderd naar: Licht")
    }
}
