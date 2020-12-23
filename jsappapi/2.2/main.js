// Project JS App API
// Ver 2.2
// @2020 Alex.W

//      Project JS App Stuff

// Initialize App
$(document).ready(function(){
    //$('head').append('<link rel="stylesheet" href="https://projectjshost.github.io/jsappapi/2.2/styles.css">');
    $('head').append('<link rel="stylesheet" href="./dark.css">');
    $("body").append("<div id='loadingscreen'><div id='loadingtext'></div><div id='jslogo'>Project JS</div></div>");
    document.getElementById('loadingtext').innerHTML = appname;
    document.title = appname;
   setTimeout(
        function() 
        {$("#loadingscreen").fadeOut(1000);}, 1200);
    document.getElementById('header').innerHTML = appname;
    if (localStorage.theme = "light") {
        $('head').append('<link rel="stylesheet" href="./light.css">');
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
function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

// Sets the CSS "color" property of an object
function color(id, color) {
    document.getElementById(id).style.color = color;
}

// Sets the CSS "background" property of an object
function background(id, background) {
    document.getElementById(id).style.background = background;
}