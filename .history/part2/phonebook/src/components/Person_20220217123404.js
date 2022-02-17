import React from 'react'

const Person = ({ key, name, number, handleDelete }) => (
  <>
    <div>
      {name} {number} {` `}
      <button onClick={andleDelete(key)}>delete</button>
    </div>
  </>
)

export default Person
