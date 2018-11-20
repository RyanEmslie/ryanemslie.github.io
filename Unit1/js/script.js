// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);
$( "#loadQuote" ).click(function() {
  printQuote();
});


const randomNumArray = [];
const quotes = [];

const quote1 = {quote: 'Education is preeminently a matter of quality, not amount',
		source: 'Henry Ford', citation: 'Ford News, p.2', year: '1/1/1922', tag: 'Education'};
const quote2 = {quote: 'Any man can learn anything he will, but no man can teach except to those who want to learn.',
		source: 'Henry Ford', citation: 'Ford News, p.2', year: '1924', tag: 'Education'};
const quote3 = {quote: 'Coding is a creative trade skill.  No college degree required.',
		source: 'Ryan Carson', citation: 'Twitter', year: '3/28/2017', tag: 'Trade Skill'};
const quote4 = {quote: 'Don\'t let anyone tell you that a college degree and student debt are the only path to success.',
		source: 'Ryan Carson', citation: 'Twitter', year: '7/18/2017', 	tag: 'College'};
const quote5 = {quote: 'I\'m not going to \'fix\' broken colleges, I\'m trying to build something brand new that is affordable, effective and accessible.', source: 'Ryan Carson', citation: 'Twitter', year: '7/7/2017', tag: 'College'};

quotes.push(quote1, quote2, quote3, quote4, quote5);


function printQuote() {
    
    let newNum = (Math.ceil( Math.random() * ( quotes.length - 1 )));
    
    console.log('New random ' + newNum);
    
    let newQuote = $('div#quote-box')[0].innerHTML = '<p class="quote">' + quotes[newNum].quote + '</p><p class="source">' + quotes[newNum].source + '<span class="citation">' + quotes[newNum].citation + '</span><span class="year">' + quotes[newNum].year + '</span></p>';
    
};


//funcRandomNumArray();