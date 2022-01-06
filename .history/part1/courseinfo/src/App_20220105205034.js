import React from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  const { part, exercises } = props
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  )
}
const Total = (props) => {
  const sumPartsExercises = (parts) => {
    let totalExercises = parts.reduce(
      (subtotal, part) => subtotal + part.exercises,
      0
    )
    return totalExercises
  }

  return <p>Number of exercises {sumPartsExercises(props.parts)}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ]
}

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
