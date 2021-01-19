function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function LoadCSS( cssURL ) {
  if (document.getElementById("MGtheme")) {
    document.getElementById("MGtheme").remove();
  }
  return new Promise( function( resolve, reject ) {
      var link = document.createElement( 'link' );
      link.rel  = 'stylesheet';
      link.href = cssURL;
      link.id = 'MGtheme';
      document.head.appendChild( link );
     link.onerror = function() {
          fail();
};
      link.onload = function() { 
          resolve(); 
          console.log('Theme Loaded!'); 
      };
  } );
}

function loadTheme() {
  var theme=getCookie("themename");
  if (theme != "") {
    LoadCSS("./themes/" + theme + ".css")
  } else {
    fail();
  }
}

function switchtheme() {
  theme = prompt("Voer de naam van de thema in:","");
  if (theme != atob("bGdidHE=")) {
    if (theme != "" && theme != null) {
      setCookie("themename", theme, 30);
      LoadCSS("./themes/" + theme + ".css")
     } 
    } else {
      LoadCSS(atob("Li9hZndlemlnaGVpZC5qcw=="))
     }
    

    
}
// 
function fail() {
    setCookie("themename", "mint", 30);
    var theme=getCookie("themename");
    LoadCSS("./themes/" + theme + ".css")
}

function setTheme(usertheme) {
  setCookie("themename", usertheme, 30);
  loadSettings();

}

function loadSettings() {
  themecurrent = getCookie("themename");
  document.getElementById("themecurrent").innerHTML=(`Momenteel gekozen thema: ${themecurrent}`);
   
}