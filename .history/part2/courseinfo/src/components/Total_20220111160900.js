import React from 'react'

const Total = ({ course }) => {
  const sumPartsExercises = (parts) => {
    let totalExercises = parts.reduce(
      (subtotal, part) => subtotal + part.exercises,
      0
    )
    return totalExercises
  }

  return <h4>total of {sumPartsExercises(course.parts)} exercises</h4>
}

export default Total
