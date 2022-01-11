import React from 'react'

const Total = ({ course }) => {
  return (
    <h3>
      total of {course.parts.reduce((s, p) => s + p.exercises, 0)} exercises
    </h3>
  )
}

export default Total
