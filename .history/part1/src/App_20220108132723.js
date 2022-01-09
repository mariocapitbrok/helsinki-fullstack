import React, { useState } from 'react'


const Display = (props) => {
  return ( <div>{props.counter}</div> );
}
 
export default Display;

cpropsonst App = () => {
  c<div>{props.counter}</div>onst [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  console.log('rendering...', counter)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  )
}

export default App
