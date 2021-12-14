// Alt+W; Close focused window
$(window).keydown(function(event) {
    if(event.altKey && event.keyCode == 87) { 
      closeWindow(focusedWindow);
      event.preventDefault(); 
    }
  });