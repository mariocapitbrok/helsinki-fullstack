import React, { useState } from 'react'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((n) => (
          <li>{n.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
