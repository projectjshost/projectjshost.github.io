//Set Variables
var plays = 0;
var level = 0;
var Engine = 1;
// Searches
var searches = [
  //Weird Searches
  "Proof the earth is flat",
  "Are birds real?",
  "Why does everyone hate me?",
  "Can a watermelon seed grow in your stomach?",
  "Does the sun exist?",
  "How to hack google",
  //Weirder Searches
  "Mario rule 34",
  "Fastest way to die",
  "Nyan cat hentai",
  "كيف تصبح إرهابيا",
  "How to buy poop online",
  "Can you eat yourself?",
  // Illegal Searches
  "How to join isis",
  "Buy gun",
  "How to become a illegal hacker?",
  "Best place to hide a body",
  "Where to buy drugs?",
  "How to make a virus?"
];



// Roulette Game
function roulette() {
  plays = plays + 1;
  document.getElementById('2').innerHTML = 'Times Played: '+ plays;

  // Search Engines
  switch(Engine) {
    case 0:
      // Google
      window.open("https://www.google.com/search?&q=" + searches[getRandom(level, level+6)])
      break;
    case 1:
      // DuckDuckGo
      window.open("https://duckduckgo.com/?q=" + searches[getRandom(level, level+6)])
      break;
    case 2:
      // Bing
      window.open("https://www.bing.com/search?q=" + searches[getRandom(level, level+6)])
      break;
    case 3:
      // Debug
      console.log(searches[getRandom(level, level+6)])
      break;
    default:

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
      document.getElementById('3').innerHTML = 'Search Weirdness Level: Weirder';
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