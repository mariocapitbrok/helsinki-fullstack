import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  console.log('rendering...', counter)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>plus</button>
    </div>
  )
}

export default App
