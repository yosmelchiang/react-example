import Liste from './components/Liste.jsx'
import { useState, useEffect } from 'react'

function App() {
  
  const [listElements, setList] = useState(["ting", "andre ting", "oppvask", "mate katten"])

  const [motivationText, setMotivationText] = useState('')
  
  function onElementClick(index) {
    const modifiedArr = [...listElements] // Create a shallow copy of the original array
    modifiedArr.splice(index, 1) // Remove 1 item starting from index position
    setList(modifiedArr) // Update the listElements array
  }

  useEffect(() => {
    let motivationText;

    if(listElements.length === 0) {
      motivationText = 'No more work for today 🎉';
    } else {
      const sentences = ['Anything interesting going on? 😎', 'Keep it going 👍', 'Got something fun to do? 🤡', 'Whats on your mind? 😊'];
      motivationText = sentences[Math.floor(Math.random() * sentences.length)];
    }

    setMotivationText(motivationText)
  }, [listElements])

  return (
    <div className="listContainer">
      <h1>{motivationText}</h1>
      <Liste elementer={listElements} handleElementClickAtIndex={onElementClick}/>
    </div>
  )
}

export default App
