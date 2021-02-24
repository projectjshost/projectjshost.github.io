// Project JS App API
// Ver 2.2
// @2020 TechnoByte

//      Project JS App Stuff

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
            if (!document.getElementById("lightTheme")) {
            $('head').append('<link rel="stylesheet" id="lightTheme" href="https://projectjshost.github.io/jsappapi/2.2/light.css">');
            }
            break;
        case "dark":
            $('head').append('<link rel="stylesheet" href="https://projectjshost.github.io/jsappapi/2.2/dark.css">');
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
    localStorage.hideTab = "false";
}

// Initialize App
$(document).ready(function(){
    $('head').append('<link rel="stylesheet" href="https://projectjshost.github.io/jsappapi/2.2/dark.css">');
    // $('head').append('<link rel="stylesheet" href="./dark.css">');
    $("body").append("<div id='loadingscreen'><div id='loadingtext'></div><div id='jslogo'>Project JS</div></div>");
    document.getElementById('loadingtext').innerHTML = appname;
    document.title = appname;
   setTimeout(
        function() 
        {$("#loadingscreen").fadeOut(1000);}, 1200);
    document.getElementById('header').innerHTML = appname;
    if (!localStorage.theme) {
        firstRun();
    }
    if (localStorage.theme == "light") {
        loadTheme("light");
    }
    if (localStorage.theme == "custom") {
        $('head').append("<style id='customTheme'>" + localStorage.customThemeCSS + "</style>");
    }
    if (localStorage.hideTab == "true") {
        setStealth("​", "https://projectjshost.github.io/icons/blank.png");
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