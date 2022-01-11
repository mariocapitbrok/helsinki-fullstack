import React from 'react'

const Total = ({ course }) => {
  const sumPartsExercises = (parts) => {
    let totalExercises = parts.reduce(
      (subtotal, part) => subtotal + part.exercises,
      0
    )
    return totalExercises
  }

  return <h5>total of {sumPartsExercises(course.parts)} exercises</h5>
}

export default Total
