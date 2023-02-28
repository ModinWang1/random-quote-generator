

const QuoteBox = ({ quote, handleNewQuote }) => {
      
      return (
            <div id="quote-box">
                  <h1 id="text">"{quote.text}"</h1>
                  <h3 id="author">-{quote.author}</h3>
                  <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
                  <a id="tweet-quote" target="blank" href="twitter.com/intent/tweet">Tweet Quote</a>

            </div>
      )

}
export default QuoteBox;