import React, { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [rigth, setRight] = useState(0)

  return (
    <div>
      {left}
      <button>left</button>
      <button>right</button>
    </div>
  )
}

export default App
