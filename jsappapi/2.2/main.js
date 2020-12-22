// Project JS App Api
// Ver 2.2
// @2020 Alex.W

//      Project JS App Stuff

// Initialize App
$(document).ready(function(){
    $('head').append('<link rel="stylesheet" href="https://projectjshost.github.io/jsappapi/2.2/styles.css">');
    $("body").append("<div id='loadingscreen'><div id='loadingtext'></div></div>");
    document.getElementById('loadingtext').innerHTML = appname;
    document.title = appname;
    setTimeout(
        function() 
        {$("#loadingscreen").fadeOut(1000);}, 1000);
    document.getElementById('header').innerHTML = appname;
  });


// Anti Cloudwise COOL
if (document.getElementById("lock-template")) {
    document.getElementById("lock-template").remove();
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

