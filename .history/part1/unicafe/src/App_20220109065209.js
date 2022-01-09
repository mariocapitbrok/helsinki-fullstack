import React, { useState } from 'react'

const Display = ({ title, value }) => (
  <li>
    {title} {value}
  </li>
)

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <ul>
        <Display title="good" value={good} />
        <Display title="neutral" value={neutral} />
        <Display title="bad" value={bad} />
      </ul>
    </div>
  )
}

export default App
