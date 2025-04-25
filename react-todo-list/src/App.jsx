import Liste from './components/Liste.jsx'
import { useState, useEffect } from 'react'

function App() {
  
  const [listElements, setList] = useState(["ting", "andre ting", "oppvask", "mate katten"])

  const [motivationText, setMotivationText] = useState('')
  
  function removeItem(index) {
    const updatedList = [...listElements] // Create a shallow copy of the original array
    updatedList.splice(index, 1) // Remove 1 item starting from index position
    setList(updatedList) // Update the listElements array
  }

  useEffect(() => {
    let motivationText;

    const sentences = ['Anything interesting going on? 😎', 'Keep it going 👍', 'Got something fun to do? 🤡', 'Whats on your mind? 😊'];
    motivationText = sentences[Math.floor(Math.random() * sentences.length)];

    setMotivationText(motivationText)
  }, [listElements])

  return (
    <div className="listContainer">
      {
        listElements.length ? 
        <>
        <h1>{motivationText}</h1> 
        <Liste elementer={listElements} handleElementClick={removeItem}/>
        </>
        : 
        <h1>No more work for today 🎉</h1>
      }

    </div>
  )
}

export default App
