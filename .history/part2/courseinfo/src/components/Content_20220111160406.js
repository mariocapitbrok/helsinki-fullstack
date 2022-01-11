import React from 'react'
import Part from './Part'

const Content = ({ course }) => {
  const [part1, part2, part3] = course.parts
  return (
    <>
      {course.parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

export default Content
