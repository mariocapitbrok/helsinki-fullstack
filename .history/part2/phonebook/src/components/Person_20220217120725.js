import React from 'react'

const Person = ({ name, number }) => (
  <>
    <div>
      {name} {number}
    </div>
    <button>delete</button>
  </>
)

export default Person
