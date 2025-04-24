import { useState } from "react";
import "./styles/App.css";

function App() {
  // We are going to use this an example
  const arr = [1, 2, 3, 4, 5];

  // useState is a function that returns two values, a state object which here we are naming for myArr, and a setter method/function which here we have named setMyArr
  // State object and the setter function are returned from useState in an array and therefore we are here destructuring them
  // useState takes one argument, which is an initial value, this can be initiated as whatever but usally its recommended to initiate it as the same type as we are working with,
  // here we are going to work with an array so we are going to initiate our state as an empty array
  // Example: const [age, setAge] = useState(28); Our initial value is 28, we can use setAge function to update it whenever we want
  const [myArr, setMyArr] = useState([1, 2, 3, 4, 5]);

  const removeFirstNumVar = () => {
    arr.splice(0, 1);
    console.log(arr); // Since nothing will be shown on React, we will console log the array instead
  } 

  const removeFirstNumState = () => {
    const newArr = [...myArr]; // Makecopy of the state array before modifying it
    newArr.splice(0, 1); // Remove the first number
    setMyArr(newArr); // Update the state array causing react to re-render the component
  } 

  return (
    <div>
      <h1>{arr}</h1>
      <h1>{myArr}</h1>
      <button onClick={removeFirstNumVar}>Remove first num var</button>
      <button onClick={removeFirstNumState}>Remove first num state</button>
    </div>
  )
}

export default App
