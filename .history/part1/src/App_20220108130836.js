import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(2)

  setTimeout(() => setCounter(counter + 1), 1000)

  console.log('rendering...', counter)
  return <div>{counter}</div>
}

export default App
