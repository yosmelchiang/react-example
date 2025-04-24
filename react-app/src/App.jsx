import { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [myArr, setMyArr] = useState([1, 2, 3, 4, 5]);
  const [isEmptyArr, setisEmptyArr] = useState(false) // Storing the state of our array to check wether its empty or not

  const removeFirstNum = () => {
    const newArr = [...myArr];
    newArr.splice(0, 1);
    setMyArr(newArr);
  } 

  useEffect(() => {
    if(myArr.length === 0) { // This will only trigger if myArr.length is 0, meaning its empty
      setisEmptyArr(true)
    }
  }, [myArr]) // We want useEffect to run only when changes to myArr has been made, that way we can check its length everytime its modified

  return (
    <div>
      <h1>{isEmptyArr ? 'Array is empty':'Array is not empty'}</h1> {/* Shows a text representing the true / falsy value of isEmptyArr */}
      <h1>{myArr}</h1>
      <button onClick={removeFirstNum}>Remove first num state</button>
    </div>
  )
}

export default App