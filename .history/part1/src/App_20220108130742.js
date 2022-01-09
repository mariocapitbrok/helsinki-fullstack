import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(2)

  setTimeout(() => setCounter(counter + 1), 1000)

  return <div>{counter}</div>
}

export default App
