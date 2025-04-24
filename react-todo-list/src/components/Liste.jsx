import './Liste.css'

// Creates a <li> element for the string that is passed to this component
function ListeElement({ onClickHandler, element = ""}) { // Receives a function (with an index remembered via closure) that removes an item when called.
  
  // Function that we will be calling when a li item is clicked on
  function handleClick() {
    onClickHandler();
  }
  
  return <li onClick={handleClick}>{element + '❌'}</li> 
} 

// Processes an array of strings and returns an unordered list with multiple list items for each array string
function Liste({ handleElementClickAtIndex, elementer = []}) {
  return (
    <ul>
      {
        elementer.map((e, i) => < ListeElement  // Iterates through the array and generates a <li> item
          key={i} // We have to give this component a key, its for react stuff
          element={e} // Passing each item of our listElements array to generate a <li> item out of it
          
          // Closure occurs here: We are creating an anonymous function that will call handleElementClickAtIndex() once invoked, 
          // and we are also passing the index value i to it, it will remember i even though we have closed this lexical environment
          onClickHandler={ function() { handleElementClickAtIndex(i)} }
        />) 
      }
    </ul>
  )
}

// Closure
/**
 * In JavaScript, a closure is a function that "remembers" its lexical environment, 
 * meaning it has access to the variables that were in scope when the function was created, 
 * even after that scope has finished executing.
 */

export default Liste