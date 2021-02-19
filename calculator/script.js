  var input = document.getElementById("display");

//script to detect if enter button is clicked to evaluate the result

document.addEventListener("keyup", function(event) {
  
    // Number 13 is the "Enter" key on the keyboard
  
    if (event.keyCode == 13) {
    
      // Trigger the button element with a click
      
      document.getElementById("equal").click();
  }
});

// Function to calculate the result
function calculate(operation) {
  let result;
  try {
    result = eval(operation);  
  } catch (error) {}

  if ( result === 0 || isFinite(result) && Boolean(result) ) {
    document.getElementById('display').value = result;
    window.lastresult = result;
  } else {
    document.getElementById('display').value = 'Syntax ERROR';
  }

} 

function calcAns() {
  if (typeof lastresult !== 'undefined') {
    document.getElementById('display').value +=lastresult;
}
}
