import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(0)}>good</button>
      <button onClick={() => setNeutral(0)}>neutral</button>
      <button onClick={() => setBad(0)}>bad</button>
      <h1>statistics</h1>
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
    </div>
  )
}

export default App
