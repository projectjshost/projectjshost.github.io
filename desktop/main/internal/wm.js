// Project JSDesktop Window Manager
function focusWindow(a) {
    $("#window" + focusedWindow).css("z-index", "0");
    $("#window" + focusedWindow).removeClass("active");
    $("#window" + focusedWindow).addClass("inactive");
    focusedWindow = a;
    $("#window" + a).css("z-index", "39");
    $("#window" + focusedWindow).addClass("active");
    $("#window" + focusedWindow).removeClass("inactive");
}

function createWindow(title) {
    windows++;
    var currentwin = windows;
    $("BODY").append("<div id='window" + currentwin + "' class='window' ondragstart='focusWindow(" + currentwin + ")' onclick='focusWindow(" + currentwin + ")'><div class='windowTitle'><p>" + title + "</p><button class='close' onmousedown='closeWindow(" + currentwin + ")'>×</button></div></div>")
    $( "#window" + currentwin).draggable();
    $( "#window" + currentwin).resizable();
    focusWindow(currentwin);
    return currentwin;
}

function closeWindow(w) {
    $( "#window" + w).remove();
}