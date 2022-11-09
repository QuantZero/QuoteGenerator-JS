const quoteContainer = document.getElementById(`quote-container`)
const quoteText = document.getElementById(`quote`)
const authorText = document.getElementById(`author`)
const twitterBtn = document.getElementById(`twitter`)
const newQuoteBtn = document.getElementById(`new-quote`)
const loader = document.getElementById(`loader`)



// Getting quotes from API
let apiQuotes = [];


// Show Loading
function loading() {
    loader.hidden = false; 
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true
}
// Show New Quote
function newQuote() {
    loading()
    // Pick a random quote from the apiQUotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if author field is blank and replace with `Unknown`
    if (!quote.author) {
        authorText.textContent = `Unknown`;
    } else {
        authorText.textContent = quote.author;

    }
    
    // Checking quote length to tdetermine style
    if (quote.text.length >80) {
        quoteText.classList.add(`long-quote`)
    } else {
        quoteText.classList.remove(`long-quote`)
    }

// Set quote, hide loader
    quoteText.textContent = quote.text;
    complete();

};

// Get Quotes
async function getQuotes() {
    loading ();
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catching error
    
    }
}


// Tweet Quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, `_blank`); //Opens twitter page on a new tab

}

// Event Listeners
newQuoteBtn.addEventListener(`click`, newQuote);
twitterBtn.addEventListener(`click`, tweetQuote);

// On Load
getQuotes();




