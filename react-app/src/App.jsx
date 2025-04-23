function GreetByName(props) {
  const { name = 'Guest' } = props

  return (
    <div className="App">
      <h1>Hello {name}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <GreetByName name={"Yosmel"}/>
      <p>This is a functional component</p>
      <ul>
        {
          [1, 2, 3].map(num => <li>{num}</li>)
        }
      </ul>
    </div>
  )
}

export default App
