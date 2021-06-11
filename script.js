// #1
// Online version form Api
let apiQuotes = [];

// Show new quote
function newQuote() {
	// Pick a random quote form api quotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	console.log(quote);
}

// Get Quotes form Api
async function getQuotes () {
	const apiUrl = 'https://type.fit/api/quotes';

	try  {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Catch Error here
	}
}

// On load
getQuotes();

// #2
// Local version
// function newQuote() {
// 	// Pick a random quote form api quotes array
// 	const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// 	console.log(quote);
// }

// newQuote();