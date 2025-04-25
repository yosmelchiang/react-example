import './Liste.css';
import ok from '../assets/ok.png';

// Creates a <li> element for the string that is passed to this component
function ListeElement({ onClickHandler, element = '' }) {
  // Receives a function (with an index remembered via closure) that removes an item when called.

  return (
    <div className="listItem">
      {element}
      <img src={ok} onClick={() => onClickHandler()} />
    </div>
  );
}

// Processes an array of strings and returns an unordered list with multiple list items for each array string
function Liste({ handleElementClick, elementer = [] }) {
  return (
    <>
      {elementer.map((e, i) => (
        <ListeElement // Iterates through the array and generates a <li> item
          key={i} // We have to give this component a key, its for react stuff
          element={e} // Passing each item of our listElements array to generate a <li> item out of it
          // Callback + Closure in action
          // Callback: We are passing an anonymous function as a callback to the ListeElement component. This function will be called later when a user clicks a list item.
          // Closure: The callback function remembers variables from its outer scope, in this example its i which is the index
          onClickHandler={() => {
            handleElementClick(i);
          }}
        />
      ))}
    </>
  );
}

// Closure
/**
 * In JavaScript, a closure is a function that "remembers" its lexical environment,
 * meaning it has access to the variables that were in scope when the function was created,
 * even after that scope has finished executing.
 */

export default Liste;
