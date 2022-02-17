import React from 'react'

const Person = ({ name, number }) => (
  <>
    <p>
      {name} {number}
    </p>
    <button>delete</button>
  </>
)

export default Person
