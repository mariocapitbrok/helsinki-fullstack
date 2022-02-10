import React from 'react'

const Note = ({ note }) => {
  return (
    <li>
      {note.content}
      <button onClick={toogleImportance}>{label}</button>
    </li>
  )
}

export default Note
