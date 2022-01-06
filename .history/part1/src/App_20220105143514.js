import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age={26 + 10} />
      <Hello name="Daisy" age={age} />
      <Hello name="Mario" age="44" />
      <Hello name={name} age="16" />
    </div>
  )
}

export default App
