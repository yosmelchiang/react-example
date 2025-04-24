import './Liste.css'
// Creates a <li> element for the string that is passed to this component
function ListeElement({element = ""}) {
  return <li>{element}</li>
} 

// Processes an array of strings and returns an unordered list with multiple list items for each array string
function Liste({elementer = []}) {
  return (
    <ul>
      {
        elementer.map((e, i) => <ListeElement key={i} element={e}/>) // Iterates through the array and generates a <li> item
      }
    </ul>
  )
}

export default Liste