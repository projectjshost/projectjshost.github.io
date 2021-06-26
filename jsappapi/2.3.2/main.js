// Project JS App API
// Ver 2.3.2
// @2021 TechnoByte

//      Project JS App Stuff


const projectJS = {
    version: "2.3.2",
    type: "Release",
    build: 210626,
    theme: localStorage.theme,
    interface: localStorage.interface,
    launcher: "/" + localStorage.launcher + "/"
};

if (projectJS.type == "Release") {
    projectJS.versionFull = "Project JS Apps Version " + projectJS.version;
} else {
    projectJS.versionFull = "Project JS Apps " + projectJS.version + " " + projectJS.type + ", build " + projectJS.build;
}

// Prevents the launcher from breaking
if (!localStorage.launcher) {
    localStorage.launcher = "appcenter";
    location.reload()
}

// Toggle fullscreen
function toggleFullScreen() {
    if (!isFullScreen()) {
        document.getElementsByTagName("HTML")[0].requestFullscreen();
        return true
    } else {
        document.exitFullscreen();
        return false
    }
}

// Check if fullscreen is enabled
function isFullScreen() {
    if (!window.screenTop && !window.screenY) {
        return true
    } else {
        return false
    }
}

// Resize app to a resolution
function resizeApp(x, y) {
    if (isFullScreen()) {
        return false
    } else {
        window.resizeTo(x, y);
        return true
    }
}

// Tab Stealth
function setStealth(title, icon) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = icon;
    document.getElementsByTagName('head')[0].appendChild(link);
    document.title = title;
}

// Loadtheme Function
function loadTheme(theme) {
    switch (theme) {
        case "light":
            $("#customTheme").remove();
            $("#JStheme").remove();
            $('head').append('<link rel="stylesheet" id="JStheme" href="/jsappapi/2.3.2/themes/light.css">');
            break;
        case "dark":
            $("#customTheme").remove();
            $("#JStheme").remove();
            $('head').append('<link rel="stylesheet" id="JStheme" href="/jsappapi/2.3.2/themes/dark.css">');
            break;
        case "custom":
            $("#customTheme").remove();
            $("#JStheme").remove();
            $('head').append("<style id='customTheme'>" + localStorage.customThemeCSS + "</style>");
            break;
    }

}

// Firstrun (sets localstorage)
function firstRun() {
    localStorage.lastUsedVersion = "2.3.2";
    localStorage.theme = "dark";
    localStorage.interface = "material";
    localStorage.hideTab = "false";
    localStorage.customThemeCSS = "";
    localStorage.launcher = "appcenter";
    localStorage.loadingScreen = "true";
    location.reload()
}

// Fix launcher spelling mistake
if (localStorage.getItem("laucher") !== null) {
    localStorage.launcher = localStorage.laucher;
    localStorage.removeItem("laucher");
}

// Initialize App
$(document).ready(function () {
    if (!localStorage.theme || localStorage.lastUsedVersion !== "2.3.2") {
        if (!localStorage.lastUsedVersion) {
            firstRun();
        } else {
            openApp('upgrader');
        }
    }
    switchInterface(projectJS.interface);
    if (typeof appname == 'undefined') {
        appname = "Project JS App"
    }
    document.title = appname;
    if (localStorage.loadingScreen == "true") {
        $("body").append("<div id='loadingscreen'><div id='loadingtext'></div><div id='jslogo'>Project JS</div></div>");
        document.getElementById('loadingtext').innerHTML = appname;

        setTimeout(
            function () {
                $("#loadingscreen").fadeOut(400);
            }
            , 400);
    }
    if (document.getElementById("header")) {
        document.getElementById("header").innerHTML = appname;
        $("body").append("<div class='headerButtons'><button class='headerButton icon' onclick='dialog(projectJS.versionFull)'>info</button><button class='headerButton icon' id='launcherButton' onclick='location.replace(projectJS.launcher)'>home</button></div>");
    }
    if (localStorage.theme == "custom") {
        $('head').append("<style id='customTheme'>" + localStorage.customThemeCSS + "</style>");
    } else {
        loadTheme(projectJS.theme)
    }
    if (localStorage.hideTab == "true") {
        setStealth("​", "/icons/blank.png");
    }
    if (location.pathname == projectJS.launcher) {
        $("#launcherButton").remove();
    }
});

// Anti Cloudwise COOL Lock
setTimeout(
    function () {
        if (document.getElementById("lock-template")) {
            $("#lock-template").remove();
        }

    }, 1000);


// Dialog Box
function dialog(message) {
    $("body").append(`<div id="overlay" onclick="closeDialog()"></div>`);
    $("body").append(`<style id="scrollDisable">body{overflow-y:hidden;};</style>`);
    $("body").append(`<div id='dialog'>${message}<button onclick='closeDialog()'>Ok</button></div>`);
}
function closeDialog() {
    if (document.getElementById("dialog")) {
        $("#overlay").remove();
        $("#scrollDisable").remove();
        $("#dialog").remove();
    }
}

// Opens an App
function openApp(appName) {
    location.pathname = "/" + appName + "/";
}

// Sets a theme
function setTheme(theme) {
    loadTheme(theme);
    localStorage.theme = theme;
    projectJS.theme = theme;
}

// Sets an interface
function setInterface(name) {
    localStorage.interface = name;
    projectJS.interface = name;
    switchInterface(name);
}

// Changes the name of the app
function setAppName(name) {
    $("#header").text(name);
    if (localStorage.hideTab!=="true") {
        document.title=name
    }
}

// Downloads a string as a file
function downloadAsFile(fileName, content) {
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:application/octet-stream;base64,' + btoa(content);
    hiddenElement.target = '_blank';
    hiddenElement.download = fileName;
    hiddenElement.click();
}

// Switches the interface
function switchInterface(name) {
    switch (name) {
        case "classic":
            $("#JSinterface").remove();
            $("#JSaccent").remove();
            $('head').append('<link rel="stylesheet" id="JSinterface" href="/jsappapi/2.3.2/interfaces/classic.css">');
            $('head').append('<style id="JSaccent">:root{--accent:#666;--accent2:#666}</style>');
            break;
        case "modern":
            $("#JSinterface").remove();
            $("#JSaccent").remove();
            $('head').append('<link rel="stylesheet" id="JSinterface" href="/jsappapi/2.3.2/interfaces/modern.css">');
            if (typeof accentColor == 'undefined') {
                accentColor = "#5aa9e6";
            }
            $('head').append('<style id="JSaccent">:root{--accent:' + accentColor + ';--accent2:' + changeHue(accentColor, 30) + '}</style>');
            break;
        case "material":
            $("#JSinterface").remove();
            $("#JSaccent").remove();
            $('head').append('<link rel="stylesheet" id="JSinterface" href="/jsappapi/2.3.2/interfaces/material.css">');
            if (typeof accentColor == 'undefined') {
                accentColor = "#76A7E0";
            }
            $('head').append('<style id="JSaccent">:root{--accent:' + accentColor + ';--accent2:' + changeBrightness(accentColor, 70) + ';--hover:' + changeBrightness(accentColor, 70) + ';--accent3:' + changeBrightness(accentColor, 87) + '}</style>');
            break;
    }
}

//      Extra Functionality

// Random Number Generator
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Color Functions
function changeBrightness(r, t) { 3 == (r = r.replace(/^\s*#|\s*$/g, "")).length && (r = r.replace(/(.)/g, "$1$1")); var n = parseInt(r.substr(0, 2), 16), s = parseInt(r.substr(2, 2), 16), r = parseInt(r.substr(4, 2), 16); return "#" + (0 | 256 + n + (256 - n) * t / 100).toString(16).substr(1) + (0 | 256 + s + (256 - s) * t / 100).toString(16).substr(1) + (0 | 256 + r + (256 - r) * t / 100).toString(16).substr(1) } function changeHue(r, t) { r = rgbToHSL(r); return r.h += t, 360 < r.h ? r.h -= 360 : r.h < 0 && (r.h += 360), hslToRGB(r) } function rgbToHSL(r) { 3 == (r = r.replace(/^\s*#|\s*$/g, "")).length && (r = r.replace(/(.)/g, "$1$1")); var t = parseInt(r.substr(0, 2), 16) / 255, n = parseInt(r.substr(2, 2), 16) / 255, s = parseInt(r.substr(4, 2), 16) / 255, e = Math.max(t, n, s), a = Math.min(t, n, s), r = e - a, a = (e + a) / 2; return { h: 0 == r ? 0 : e == t ? (n - s) / r % 6 * 60 : e == n ? 60 * ((s - t) / r + 2) : 60 * ((t - n) / r + 4), s: 0 == r ? 0 : r / (1 - Math.abs(2 * a - 1)), l: a } } function hslToRGB(r) { var t = r.h, n = r.s, s = r.l, r = (1 - Math.abs(2 * s - 1)) * n, n = r * (1 - Math.abs(t / 60 % 2 - 1)), s = s - r / 2, n = t < 60 ? (e = r, a = n, 0) : t < 120 ? (e = n, a = r, 0) : t < 180 ? (e = 0, a = r, n) : t < 240 ? (e = 0, a = n, r) : t < 300 ? (e = n, a = 0, r) : (e = r, a = 0, n), e = normalize_rgb_value(e, s), a = normalize_rgb_value(a, s); return rgbToHex(e, a, n = normalize_rgb_value(n, s)) } function normalize_rgb_value(r, t) { return (r = Math.floor(255 * (r + t))) < 0 && (r = 0), r } function rgbToHex(r, t, n) { return "#" + ((1 << 24) + (r << 16) + (t << 8) + n).toString(16).slice(1) };