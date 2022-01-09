import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  console.log('rendering...', counter)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => console.log('clicked')}>plus</button>
    </div>
  )
}

export default App