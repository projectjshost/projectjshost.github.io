//Set Variables
var plays = 0;
var level = 0;
var Engine = 0;
var searches = [
  //Weird Searches
  "Test Search 1",
  "Test Search 2",
  "Test Search 3",
  "Test Search 4",
  "Test Search 5",
  "Test Search 6",
  //Gross Searches
  "Test Search 7",
  "Test Search 8",
  "Test Search 9",
  "Test Search 10",
  "Test Search 11",
  "Test Search 12",
  // Illegal Searches
  "Test Search 13",
  "Test Search 14",
  "Test Search 15",
  "Test Search 16",
  "Test Search 17",
  "Test Search 18"
];



// Roulette Game
function roulette() {
  plays = plays + 1;
  document.getElementById('2').innerHTML = 'Times Played: '+ plays;

  // Search Engines
  switch(Engine) {
    case 0:
      window.open("https://www.google.com/search?&q=" + searches[getRandom(level, level+6)])
      break;
    case 1:
      window.open("https://duckduckgo.com/?q=" + searches[getRandom(level, level+6)])
      break;
    case 2:
      window.open("https://www.bing.com/search?q=" + searches[getRandom(level, level+6)])
      break;
    case 3:
      console.log(searches[getRandom(level, level+6)])
      break;
    default:
      // code block
  }
  

}

// Set the level
function setlevel(l) {
  level = l;

  switch(level) {
    case 0:
      document.getElementById('3').innerHTML = 'Search Weirdness Level: Weird';
      break;
    case 6:
      document.getElementById('3').innerHTML = 'Search Weirdness Level: Gross';
      break;
    case 12:
      document.getElementById('3').innerHTML = 'Search Weirdness Level: Illegal';
      break;
    default:
      // code block
  }

}
// Set the search engine
function setSE(se) {
  Engine = se;

  switch(Engine) {
    case 0:
      document.getElementById('4').innerHTML = 'Search Engine: Google';
      break;
    case 1:
      document.getElementById('4').innerHTML = 'Search Engine: DuckDuckGo';
      break;
    case 2:
      document.getElementById('4').innerHTML = 'Search Engine: Bing';
      break;
    case 3:
      document.getElementById('4').innerHTML = 'Search Engine: Console Output (Debug)';
      break;
    default:
      // code block
  }

}