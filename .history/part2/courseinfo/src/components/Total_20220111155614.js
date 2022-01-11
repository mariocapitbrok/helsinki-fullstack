import React from 'react'

const Total = ({ course }) => {
  const sumPartsExercises = (parts) => {
    let totalExercises = parts.reduce(
      (subtotal, part) => subtotal + part.exercises,
      0
    )
    return totalExercises
  }

  return <p>Number of exercises {sumPartsExercises(course.parts)}</p>
}

export default Total
