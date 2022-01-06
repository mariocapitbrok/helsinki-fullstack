import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app create by{' '}
      <a href="https://github.com/mariocapitbrok">Mario Capitbrok</a>
    </div>
  )
}

const App = () => {
  const t = [1, -1, 3]

  t.push(5)

  console.log(t.length) // 4 is printed
  console.log(t[1]) // -1 is printed

  t.forEach((value) => {
    console.log(value) // numbers 1, -1, 3, 5 are printed, each to own line
  })
}

export default App
