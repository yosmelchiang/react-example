import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => console.error(err))
}

render() {
  console.log(this.state.data) // Logs the fetched data to the console
  return(
    <div>
      <pre>{JSON.stringify(this.state.data, null, 2)}</pre> {/* Shows the data as stringified JSON*/}
    </div>
  )
}
}

export default App;
