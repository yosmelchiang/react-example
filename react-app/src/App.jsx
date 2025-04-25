import { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [input, setInput] = useState('')

  const updateInput = event => {
    setInput(event.target.value);
  }

  return (
    <div>
      {
        input ? <h1>Hi there {input}</h1> : <h1></h1>
      }
      <label htmlFor="name">Name</label>
      <input id="name" onChange={updateInput}></input>
      <button onClick={() => alert(`Welcome to my website ${input}`)}>Click me</button>
    </div>
  )
}

export default App