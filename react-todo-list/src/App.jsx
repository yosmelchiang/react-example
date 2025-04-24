import Liste from './components/Liste.jsx'

function App() {
  const innhold = ["ting", "andre ting", "oppvask", "mate katten"] // Dummy array with todo list items
  return (
    <div>
      <Liste elementer={innhold}/>
    </div>
  )
}

export default App
