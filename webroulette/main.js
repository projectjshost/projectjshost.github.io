var plays = 0;
function roulette() {
  plays = plays + 1;
  var roullete = Math.floor((Math.random() * 6) + 1);
if (roullete == 1) {
        while (true) {
            document.title = Math.floor(Math.random() * (99999999999999999 - 11111111111111111) + 11111111111111111);
        }
}
else {
   document.getElementById('1').innerHTML = 'Status: Je hebt geluk!';
   document.getElementById('2').innerHTML = 'Keer gespeeld: '+ plays;
}
}
