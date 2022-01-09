import React, { useState } from 'react'

const Display = (props) => {
  return <div>{props.counter}</div>
}

const Button = (props) => {
  ;<button conClick={props.onClick}>{props.text}</button>
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
    </div>
  )
}

export default App
