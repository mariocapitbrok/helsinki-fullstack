import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" />
      <Hello name="Daisy" />
      <Hello name="Mario" />
      <Hello name="Emiliano" />
    </div>
  )
}

export default App
