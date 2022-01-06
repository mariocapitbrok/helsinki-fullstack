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
  const name = 'Peter'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="George" age={26 + 10} />
      <Footer />
    </>
  )
}

export default App
