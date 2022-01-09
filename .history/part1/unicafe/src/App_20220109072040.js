import React, { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const List = ({ title, value }) => (
  <li>
    {title} {value}
  </li>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    const newTotal = newGood + neutral + bad

    setGood(newGood)
    setTotal(newTotal)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    const newTotal = good + newNeutral + bad

    setNeutral(newNeutral)
    setTotal(newTotal)
  }

  const handleBad = () => {
    const newBad = bad + 1
    const newTotal = good + neutral + newBad

    setBad(newBad)
    setTotal(newTotal)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <ul>
        <List title="good" value={good} />
        <List title="neutral" value={neutral} />
        <List title="bad" value={bad} />
        all {total}
        average {average}
        percentage {}
      </ul>
    </div>
  )
}

export default App
