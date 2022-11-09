const quoteContainer = document.getElementById(`quote-container`)
const quoteText = document.getElementById(`quote`)
const authorText = document.getElementById(`author`)
const twitterBtn = document.getElementById(`twitter`)
const newQuoteBtn = document.getElementById(`new-quote`)



// Getting quotes from API
let apiQuotes = [];

// Show New Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
};

async function getQuotes() {
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catching error
    
    }
}



// On Load
getQuotes();




