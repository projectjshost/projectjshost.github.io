// Project JS Extensions
// @2020 Alex.W

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

