import Liste from './components/Liste.jsx'
import { useState } from 'react'

function App() {
  
  const [listElements, setList] = useState(["ting", "andre ting", "oppvask", "mate katten"])
  
  function onElementClick(index) {
    const modifiedArr = [...listElements] // Create a shallow copy of the original array
    modifiedArr.splice(index, 1) // Remove 1 item starting from index position
    setList(modifiedArr) // Update the listElements array
  }

  return (
    <div>
      <Liste elementer={listElements} handleElementClickAtIndex={onElementClick}/>
    </div>
  )
}

export default App
