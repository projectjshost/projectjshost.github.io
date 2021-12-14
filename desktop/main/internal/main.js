// Project JSDesktop

// Declare variables
var focusedWindow = 0;
var windows = 0;


// Open Fullscreen
function fullscreen() {
    var elem = document.getElementsByTagName("HTML")[0];
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } 
  }

// Anti CloudWise Cool
setInterval(
    function() 
    {
        if (document.getElementById("lock-template")) {
            document.getElementById("lock-template").remove();
        }
        
    }, 1000);

// Time Widget
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d_d = today.getDate();
    var d_m = today.getMonth();
    var d_y = today.getFullYear();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    d_d = checkTime(d_d);
    d_m = checkTime(d_m+1);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
        document.getElementById("date").innerText = moment(today).format("dddd DD MMMM yyyy");
    }, 200);
}

// Info Widget
document.getElementById("JSDesktopPlatform").innerText = "Platform: " + window.parent.projectJS.versionFull;
document.getElementById("JSDesktopROOT").innerText = "Root Directory: " + JSDesktopROOT;
document.getElementById("systemVersion").innerText = "Version: " + systemVersion;

// App Drawer
var appDrawer = 0;
document.getElementById("appDrawer").style.display = "none";

function openAppDrawer() {
    if(appDrawer==0) {
        document.getElementById("appDrawer").style.display = "block";
        appDrawer = 1;
    } else {
        document.getElementById("appDrawer").style.display = "none";
        appDrawer = 0;
    }
}
