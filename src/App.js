import './App.css';
import { useEffect, useState } from "react"
import QuoteBox from './QuoteBox.js';
import randomColor from "randomcolor";

function App() {
  const [quote, setQuote] = useState({ text: "asdf", author: "modin" })
  const [backgroundcolor, setBackgroundcolor] = useState("white")

  const handleNewQuote = () => {
    setBackgroundcolor(randomColor());

    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => setQuote(data[Math.round(Math.random()*data.length-1)]))
  }

  useEffect(() => {
    handleNewQuote()

  }, [])

  return (
    <div className="App" style={{backgroundColor: backgroundcolor}}>
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
      <p className='Modin'>By Modin</p>
    </div>
  );


};

export default App;
