import React from 'react'

const Person = ({ key, name, number, handleDelete }) => (
  <>
    <div>
      {name} {number} {` `}
      <button onClick={handleDelete(key)}>delete</button>
    </div>
  </>
)

export default Person
