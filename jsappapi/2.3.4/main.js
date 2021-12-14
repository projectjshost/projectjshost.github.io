// Project JS App API
// Ver 2.3.4
// @2021 TechnoByte

//      Project JS App Stuff

var dialogID = 0;
var projectJS = {
    version: "2.3.4",
    type: "Release",
    build: 211214,
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

// Gets app Parameters
function getAppParams() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getAppParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getAppParams()[parameter];
        }
    return urlparameter;
}

const defaultWallpaperName = "just_a_tree_and_a_breeze.jpg";
const defaultWallpaper = `/lib/wallpapers/just_a_tree_and_a_breeze.jpg`;
var wallpaperCreated=false;

// Sets Wallpaper of App
function createWallpaper(source) {
    if(wallpaperCreated==false&&getAppParam("wallpaper", "true")=="true"&&getAppParam("platform", "default")=="default") {
        wallpaperCreated=true;
        $('head').append(`<style id="wallpaper">html{background-image:url("` + source + `")!important}body{background:transparent!important}</style>`)
    }
}
function deleteWallpaper() {
    if(getAppParam("wallpaper", "false")=="false") {
        wallpaperCreated=false;
        $("#wallpaper").remove()
    }
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

// Sets CSS variable appTile to elementcolor but 20% transparent
function getAppTileColor() {
    var elementcolor = getComputedStyle(document.documentElement).getPropertyValue('--elementcolor');
    document.documentElement.style.setProperty('--appTile', changeOpacity(elementcolor, 0.8));
    document.documentElement.style.setProperty('--area', changeOpacity(elementcolor, 0.5));
}

// Loadtheme Function
function loadTheme(theme) {
    switch (theme) {
        case "light":
            $("#customTheme").remove();
            $("#JStheme").remove();
            $('head').append(`<link onload="getAppTileColor()" rel="stylesheet" id="JStheme" href="/jsappapi/${projectJS.version}/themes/light.css">`);
            break;
        case "dark":
            $("#customTheme").remove();
            $("#JStheme").remove();
            $('head').append(`<link onload="getAppTileColor()" rel="stylesheet" id="JStheme" href="/jsappapi/${projectJS.version}/themes/dark.css">`);
            break;
        case "custom":
            $("#customTheme").remove();
            $("#JStheme").remove();
            $('head').append(`<style id='customTheme'>` + localStorage.customThemeCSS + `</style>`);
            getAppTileColor()
            break;
    }

}

// Firstrun (sets localstorage)
function firstRun() {
    localStorage.lastUsedVersion = projectJS.version;
    localStorage.theme = "dark";
    localStorage.interface = "material";
    localStorage.hideTab = "false";
    localStorage.customThemeCSS = "";
    localStorage.launcher = "appcenter";
    localStorage.loadingScreen = "true";
    localStorage.wallpaperName = defaultWallpaperName;
    localStorage.wallpaper = defaultWallpaper;
    localStorage.forceWallpaper = "false";
    location.reload()
}

// Displays information about the current app
function displayAppInfo() {
    if (typeof appInfo == 'undefined') {
        dialog(projectJS.versionFull, "info")
    } else {
        dialog(appInfo, "appInfo")
    }
}

// Initialize App
$(document).ready(function () {
    if (!localStorage.theme || localStorage.lastUsedVersion !== projectJS.version) {
        if (!localStorage.lastUsedVersion) {
            firstRun();
        } else {
            openApp('upgrader');
        }
    }
    if(getAppParam("interface", undefined)!==undefined) {
        switchInterface(getAppParam("interface"));
    } else {
        switchInterface(projectJS.interface);
    }
    
    if (typeof appname == 'undefined') {
        appname = "Project JS App"
    }
    document.title = appname;
    if (localStorage.loadingScreen == "true"&&getAppParam("splash", "true")=="true") {
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
        $("body").append("<div class='headerButtons'><button class='headerButton icon' onclick='displayAppInfo()'>info</button><button class='headerButton icon' id='launcherButton' onclick='openApp(localStorage.launcher)'>home</button></div>");
    }
    if(getAppParam("kiosk", "false")=="true"||getAppParam("platform", "default")=="JSdesktop") {
        $(".headerButtons").hide();
    }
    if(getAppParam("platform", "default")=="JSdesktop") {
        $("header").hide();
        document.getElementsByTagName("body")[0].style.paddingTop="0";
        document.getElementsByTagName("body")[0].style.marginTop="5px";
        document.getElementsByTagName("html")[0].style.background="transparent";
        document.getElementsByTagName("body")[0].style.background="transparent"
    }
    if(getAppParam("theme", undefined)!==undefined) {
        switchInterface();
        loadTheme(getAppParam("theme"))
    } else {
        loadTheme(projectJS.theme)
    }
        
    if (localStorage.hideTab == "true") {
        setStealth("​", "/icons/blank.png");
    }
    if (location.pathname == projectJS.launcher) {
        $("#launcherButton").remove();
    }
    if (localStorage.forceWallpaper=="true"&&localStorage.wallpaper) {
        createWallpaper(localStorage.wallpaper)
    }
    if(getAppParam("wallpaper", "false")=="true") {
        createWallpaper(localStorage.wallpaper)
    }
});

// Anti Cloudwise COOL Lock
setTimeout(
    function () {
        if (document.getElementById("lock-template")) {
            $("#lock-template").remove();
        }

    }, 1000);


// Opens a dialog box
function dialog(message,type,customTitle) {
    message = message.replaceAll("\n", "<br>");
    $("body").append(`<div class="dialogOverlay" id="overlay` + dialogID + `" onclick="closeDialog(` + dialogID + `)"></div>`);
    $("body").append(`<style class="scrollDisable" id="scrollDisable` + dialogID + `">body{overflow-y:hidden;};</style>`);
    switch (type) {
		case "appInfo":
            $("body").append(`<div class="dialog" id='dialog` + dialogID + `'><p2><span class="icon">info</span>About this app:</p2>${message}<button onclick='closeDialog(` + dialogID + `)'>Ok</button></div>`);
        break;
        case "info":
            $("body").append(`<div class="dialog" id='dialog` + dialogID + `'><p2><span class="icon">info</span>Info:</p2>${message}<button onclick='closeDialog(` + dialogID + `)'>Ok</button></div>`);
        break;
        case "warn":
            $("body").append(`<div class="dialog" id='dialog` + dialogID + `'><p2><span class="icon">warning</span>Warning:</p2>${message}<button onclick='closeDialog(` + dialogID + `)'>Close</button></div>`);
        break;
        case "error":
            $("body").append(`<div class="dialog" id='dialog` + dialogID + `'><p2><span class="icon">error</span>An error has occourred:</p2>${message}<button onclick='closeDialog(` + dialogID + `)'>Close</button></div>`);
        break;
        case "critical":
            $("body").append(`<div class="errorScreen" id='dialog` + dialogID + `'><p2><span class="icon">error</span>Something went wrong!</p2><p>${message}</p><p>Debug Information: version=${projectJS.build}${projectJS.type} appName=${appname} time=${Date.now()}</p></div>`);
        break;
        case "custom":
            $("body").append(`<div class="dialog" id='dialog` + dialogID + `'><p2><span class="icon">info</span>${customTitle}</p2><p>${message}</p><button onclick='closeDialog(` + dialogID + `)'>Ok</button></div>`);
        break;
        default:
            $("body").append(`<div class="dialog" id='dialog` + dialogID + `'>${message}<button onclick='closeDialog(` + dialogID + `)'>Ok</button></div>`);
        break;
        
    }
    dialogID++
}
// Close a dialog box with a specific id
function closeDialog(id) {
        $("#overlay" + id).remove();
        $("#scrollDisable" + id).remove();
        $("#dialog" + id).remove();
}

// Opens an App
function openApp(appName) {
    if(getAppParam("platform", "default")=="JSdesktop") {
        window.parent.openApp(appName);
    } else {
        location.pathname = "/" + appName + "/";
    }
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
            $('head').append(`<link rel="stylesheet" id="JSinterface" href="/jsappapi/${projectJS.version}/interfaces/classic.css">`);
            $('head').append('<style id="JSaccent">:root{--accent:#666;--accent2:#666}</style>');
            break;
        case "modern":
            $("#JSinterface").remove();
            $("#JSaccent").remove();
            $('head').append(`<link rel="stylesheet" id="JSinterface" href="/jsappapi/${projectJS.version}/interfaces/modern.css">`);
            if (typeof accentColor == 'undefined') {
                accentColor = "#5aa9e6";
            }
            $('head').append('<style id="JSaccent">:root{--accent:' + accentColor + ';--accent2:' + changeHue(accentColor, 30) + '}</style>');
            break;
        case "material":
            $("#JSinterface").remove();
            $("#JSaccent").remove();
            $('head').append(`<link rel="stylesheet" id="JSinterface" href="/jsappapi/${projectJS.version}/interfaces/material.css">`);
            if (typeof accentColor == 'undefined') {
                accentColor = "#76A7E0";
            }
            $('head').append(`<style id="JSaccent">:root{--accent:` + accentColor + `}</style>`);
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
const changeOpacity = (hex, alpha) => `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, 0)}`;
