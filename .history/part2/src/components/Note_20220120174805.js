import React from 'react'

const Note = ({ note }) => {
  const label = note.important ? 'make not important' : 'make important'
  return (
    <li>
      {note.content}
      <button onClick={toogleImportance}>{label}</button>
    </li>
  )
}

export default Note
