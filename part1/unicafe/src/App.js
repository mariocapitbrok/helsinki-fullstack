import React, { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ title, value }) => (
  <tr>
    <td>{title}</td>
    <td>{title === 'positive' ? value + ' %' : value}</td>
  </tr>
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
      <table>
        <tbody>
          <StatisticLine title="good" value={good} />
          <StatisticLine title="neutral" value={neutral} />
          <StatisticLine title="bad" value={bad} />
          <StatisticLine title="all" value={total} />
          <StatisticLine title="average" value={average} />
          <StatisticLine title="positive" value={percentage} />
        </tbody>
      </table>
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
    const newAverage = ((newGood - bad) / newTotal).toFixed(1)
    const newPercentage = ((newGood / newTotal) * 100).toFixed(1)

    setGood(newGood)
    setTotal(newTotal)
    setAverage(newAverage)
    setPercentage(newPercentage)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    const newTotal = good + newNeutral + bad
    const newAverage = ((good - bad) / newTotal).toFixed(1)
    const newPercentage = ((good / newTotal) * 100).toFixed(1)

    setNeutral(newNeutral)
    setTotal(newTotal)
    setAverage(newAverage)
    setPercentage(newPercentage)
  }

  const handleBad = () => {
    const newBad = bad + 1
    const newTotal = good + neutral + newBad
    const newAverage = ((good - newBad) / newTotal).toFixed(1)
    const newPercentage = ((good / newTotal) * 100).toFixed(1)

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
