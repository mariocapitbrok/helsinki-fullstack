import React from 'react'

const Total = ({ course }) => {
  const sumPartsExercises = (parts) => {
    let totalExercises = parts.reduce(
      (subtotal, part) => subtotal + part.exercises,
      0
    )
    return totalExercises
  }

  return (
    <p>
      <b>total of {sumPartsExercises(course.parts)} exercises</b>
    </p>
  )
}

export default Total
