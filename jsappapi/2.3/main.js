// Project JS App API
// Ver 2.3 Beta
// @2021 TechnoByte

//      Project JS App Stuff

var currentTheme = localStorage.theme;


// Tab Stealth
function setStealth(title, icon) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = icon;
        document.getElementsByTagName('head')[0].appendChild(link);
        document.title = title;
}

function loadTheme(theme) {
    switch(theme) {
        case "light":
            if (document.getElementById("JStheme")) {
                $("#JStheme").remove();
            }
            $('head').append('<link rel="stylesheet" id="JStheme" href="/jsappapi/2.3/light.css">');
            break;
        case "dark":
            if (document.getElementById("JStheme")) {
                $("#JStheme").remove();
            }
            $('head').append('<link rel="stylesheet" id="JStheme" href="/jsappapi/2.3/dark.css">');
            break;
        case "custom":
            if (document.getElementById("customTheme")) {
                document.getElementById("customTheme").remove();
            }
              $('head').append("<style id='customTheme'>" + localStorage.customThemeCSS + "</style>");
            break;
    }
}

function firstRun() {
    localStorage.theme = "dark";
    localStorage.customThemeCSS = "";
    localStorage.hideTab = false;
    localStorage.lastUsedVersion = 2.3;
    localStorage.classicInterface = false;
    dialog("Project JS Beta; For testing purposes only!")
}

// Initialize App
$(document).ready(function(){
    if (localStorage.classicInterface == "true") {
        classicInterface = true;
    } else {
        classicInterface = false;
    }
    if (typeof classicInterface !== 'undefined') {
        if (classicInterface == true) {
            $('head').append('<link rel="stylesheet" href="/jsappapi/2.3/classic.css">');
        } else {
            $('head').append('<link rel="stylesheet" href="/jsappapi/2.3/base.css">');
        }
    } else {
        $('head').append('<link rel="stylesheet" href="/jsappapi/2.3/base.css">');
    }
    $("body").append("<div id='loadingscreen'><div id='loadingtext'></div><div id='jslogo'>Project JS Beta</div></div>");
    if (typeof appname == 'undefined') {
        appname = "Project JS App"
    }
    if (typeof accentColor == 'undefined') {
        accentColor = "#00ccff";
    }
    $('head').append('<style>:root{--accent:' + accentColor + ';--accent2:' + changeHue(accentColor, 30) + '}</style>');
    document.getElementById('loadingtext').innerHTML = appname;
        document.title = appname;
   setTimeout(
        function(){
            $("#loadingscreen").fadeOut(1000);
        }
        , 1200);
    if (document.getElementById("header")) {
        document.getElementById("header").innerHTML = appname;
    }
    if (!localStorage.theme) {
        firstRun();
    }
    if (localStorage.theme == "dark") {
        loadTheme("dark");
    }
    if (localStorage.theme == "light") {
        loadTheme("light");
    }
    if (localStorage.theme == "custom") {
        $('head').append("<style id='customTheme'>" + localStorage.customThemeCSS + "</style>");
    }
    if (localStorage.hideTab == "true") {
        setStealth("​", "/icons/blank.png");
    }
  });

  

// Anti Cloudwise COOL
setTimeout(
    function() 
    {
        if (document.getElementById("lock-template")) {
            document.getElementById("lock-template").remove();
        }
        
    }, 1000);


// Dialog Box
function dialog(message) {
    $("body").append('<div id="overlay"></div>');
    $("body").append(`<div id='dialog'>${message}<button onclick='closeDialog()'>Ok</button></div>`);
}
function closeDialog() {
    if (document.getElementById("dialog")) {
        document.getElementById("dialog").remove();
        document.getElementById("overlay").remove();
    }
}

// Update theme
// setInterval(
//     function() {
//         if (!localStorage.theme === currentTheme) {
//             loadTheme(localStorage.theme);
//             currentTheme = localStorage.theme;
//         }
//     }
//     , 500);

//      Extra Functionality

// Random Number Generator
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// Sets the CSS "color" property of an object
function color(id, color) {
    document.getElementById(id).style.color = color;
}

// Sets the CSS "background" property of an object
function background(id, background) {
    document.getElementById(id).style.background = background;
}

// Change brightness of a hex color
function changeBrightness(hex, percent){
    hex = hex.replace(/^\s*#|\s*$/g, '');

    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

// Shift hue of color
function changeHue(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.h += degree;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }
    else if (hsl.h < 0) {
        hsl.h += 360;
    }
    return hslToRGB(hsl);
}

function rgbToHSL(rgb) {
    rgb = rgb.replace(/^\s*#|\s*$/g, '');

    
    if(rgb.length == 3){
        rgb = rgb.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(rgb.substr(0, 2), 16) / 255,
        g = parseInt(rgb.substr(2, 2), 16) / 255,
        b = parseInt(rgb.substr(4, 2), 16) / 255,
        cMax = Math.max(r, g, b),
        cMin = Math.min(r, g, b),
        delta = cMax - cMin,
        l = (cMax + cMin) / 2,
        h = 0,
        s = 0;

    if (delta == 0) {
        h = 0;
    }
    else if (cMax == r) {
        h = 60 * (((g - b) / delta) % 6);
    }
    else if (cMax == g) {
        h = 60 * (((b - r) / delta) + 2);
    }
    else {
        h = 60 * (((r - g) / delta) + 4);
    }

    if (delta == 0) {
        s = 0;
    }
    else {
        s = (delta/(1-Math.abs(2*l - 1)))
    }

    return {
        h: h,
        s: s,
        l: l
    }
}


function hslToRGB(hsl) {
    var h = hsl.h,
        s = hsl.s,
        l = hsl.l,
        c = (1 - Math.abs(2*l - 1)) * s,
        x = c * ( 1 - Math.abs((h / 60 ) % 2 - 1 )),
        m = l - c/ 2,
        r, g, b;

    if (h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }

    r = normalize_rgb_value(r, m);
    g = normalize_rgb_value(g, m);
    b = normalize_rgb_value(b, m);

    return rgbToHex(r,g,b);
}

function normalize_rgb_value(color, m) {
    color = Math.floor((color + m) * 255);
    if (color < 0) {
        color = 0;
    }
    return color;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}