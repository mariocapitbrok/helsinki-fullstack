import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text="" />
      <Button handleClick={() => setToValue(0)} text="" />
      <Button handleClick={() => setToValue(value + 1)} text="" />
    </div>
  )
}

export default App
