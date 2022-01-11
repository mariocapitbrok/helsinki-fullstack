import React from 'react'

const Total = ({ course }) => {
  const sumExercises = (parts) => {
    let total = parts.reduce((s, p) => s + p.exercises, 0)
    return total
  }

  return <h3>total of {sumExercises(course.parts)} exercises</h3>
}

export default Total
