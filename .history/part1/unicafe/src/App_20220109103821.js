import React, { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const List = ({ title, value }) => (
  <li>
    {title} {value}
  </li>
)

const Statistics = ({ good, neutral, bad, total, average, percentage }) => {
  if (total === 0)
    return (
      <>
        <h1>statistics</h1>
        <h3>No feedback given</h3>
      </>
    )

  return (
    <>
      <h1>statistics</h1>
      <ul>
        <List title="good" value={good} />
        <List title="neutral" value={neutral} />
        <List title="bad" value={bad} />
        <List tittle="all" value={total} />
        <List tittle="average" value={average} />
        <List tittle="positive" value={percentage} />
      </ul>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    const newTotal = newGood + neutral + bad
    const newAverage = (newGood - bad) / newTotal
    const newPercentage = ((newGood / newTotal) * 100).toFixed(14)

    setGood(newGood)
    setTotal(newTotal)
    setAverage(newAverage)
    setPercentage(newPercentage)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    const newTotal = good + newNeutral + bad
    const newAverage = (good - bad) / newTotal
    const newPercentage = ((good / newTotal) * 100).toFixed(14)

    setNeutral(newNeutral)
    setTotal(newTotal)
    setAverage(newAverage)
    setPercentage(newPercentage)
  }

  const handleBad = () => {
    const newBad = bad + 1
    const newTotal = good + neutral + newBad
    const newAverage = (good - newBad) / newTotal
    const newPercentage = ((good / newTotal) * 100).toFixed(14)

    setBad(newBad)
    setTotal(newTotal)
    setAverage(newAverage)
    setPercentage(newPercentage)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        percentage={percentage}
      />
    </div>
  )
}

export default App
