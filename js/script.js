/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

const quotes = [
  { quote: 'A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment.',
    source: 'Robert C. "Uncle Bob" Martin',
    citation: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    year: '2008'
  },

  { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
    source: 'Rick Cook',
    citation: 'The Wizardry Compiled',
    year: '1989'
  },

  { quote: 'We are looking at a society increasingly dependent on machines, yet decreasingly capable of making or even using them effectively.',
    source: 'Douglas Rushkoff',
    citation: 'Program or Be Programmed: Ten Commands for a Digital Age.',
    year: '2010'
  },

  { quote: 'You should name a variable with the same care with which you name a first-born child',
    source: 'Robert C. "Uncle Bob" Martin',
    citation: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    year: '2008'
  },

  { quote: 'Progress is possible only if we train ourselves to think about programs without of them as pieces of executable code.',
    source: 'Edsger W. Dijkstra,
    citation: 'Unknown',
    year: 'Unknown'
}
]


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.