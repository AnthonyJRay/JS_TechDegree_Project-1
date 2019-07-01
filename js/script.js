
/*** 
  Create a quotes array containing objects.
  Each of these objects contain the key and value pairs required for our specfic type of data.
  quote - property stores the quote string
  source - stores the name of the person who said the quote
  citation - holds where the quote was originated
  year - holds the year in which the quote was spoke/written
***/

const quotes = [
  { quote: 'A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment',
    source: 'Robert C. "Uncle Bob" Martin',
    citation: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    year: '2008'
  },

  { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning',
    source: 'Rick Cook',
    citation: 'The Wizardry Compiled',
    year: '1989'
  },

  { quote: 'We are looking at a society increasingly dependent on machines, yet decreasingly capable of making or even using them effectively',
    source: 'Douglas Rushkoff',
    citation: 'Program or Be Programmed: Ten Commands for a Digital Age',
    year: '2010'
  },

  { quote: 'You should name a variable with the same care with which you name a first-born child',
    source: 'Robert C. "Uncle Bob" Martin',
    citation: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    year: '2008'
  },

  { quote: 'Progress is possible only if we train ourselves to think about programs without of them as pieces of executable code',
    source: 'Edsger W. Dijkstra',
    citation: 'Unknown',
    year: 'Unknown'
}
]


/***
  create getRandomQuote() function.
  This function randomly grabs a quote using Math.random() method and the quotes arrays length
  We are setting an empty array called usedQuotes to store the currently random selected quote.
  If the usedQuotes array does not === the selected randomQuote, then we use the push() method to push
  the randomQuote to the usedQuotes array, else, call getRandomQuote() function.
***/

function getRandomQuote () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  let usedQuotes = []
  console.log(usedQuotes)
if(usedQuotes.includes(randomQuote) === false) {
  usedQuotes.push(randomQuote);
  return randomQuote;
} else {
  getRandomQuote();
}
};



/***
  The printQuote() function calls the getRandomQuote function and stores it's value in the variable "getQuote"
  Then creating html strings using concatination and dot notation to grab specific values needed per string.
  Lastly we grab the 'quote-box' and set it's innerHTML to the htmlString variable that holds our html, and string data.
***/

function printQuote () {
  const getQuote = getRandomQuote();
  let htmlString = '<p class="quote">' + getQuote.quote + '</p>' + 
                   '<p class="source">' + getQuote.source + '</p>' +
                   '<span class="citation">' + getQuote.citation + '</span>' +
                   '<span class="year">' + getQuote.year + '</span>';
                   
  document.getElementById('quote-box').innerHTML = htmlString;
}




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.