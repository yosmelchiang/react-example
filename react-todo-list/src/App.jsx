import Liste from './components/Liste.jsx'

function App() {
  
  // Dummy array with todo list items
  const innhold = ["ting", "andre ting", "oppvask", "mate katten"]
  
  return (
    <div>
      <Liste elementer={innhold}/>
    </div>
  )
}

export default App
