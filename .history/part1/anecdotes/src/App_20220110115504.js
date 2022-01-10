import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([
    { anecdoteId: 0, anecdoteVotes: 0 },
    { anecdoteId: 1, anecdoteVotes: 0 },
    { anecdoteId: 2, anecdoteVotes: 0 },
    { anecdoteId: 3, anecdoteVotes: 0 },
    { anecdoteId: 4, anecdoteVotes: 0 },
    { anecdoteId: 5, anecdoteVotes: 0 },
    { anecdoteId: 6, anecdoteVotes: 0 },
  ])

  const getRandomInt = (max, min) =>
    Math.floor(Math.random() * (max - min)) + min

  const handleSelect = () => {
    const newSelected = getRandomInt(6, 0)
    setSelected(newSelected)
  }

  const handleVote = () => {
    let newVotes = [...votes]
    //let newAnecdote = newVotes[selected]
    //newAnecdote.anecdoteVotes = newAnecdote.anecdoteVotes + 1
    newVotes[selected].anecdoteVotes = newVotes[selected].anecdoteVotes + 1
    console.log(newVotes)

    //setVotes(newVotes)
  }

  return (
    <div>
      {anecdotes[selected]}
      <br />
      has {votes[selected].anecdoteVotes} votes
      <br />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSelect}>next anecdote</button>
    </div>
  )
}

export default App
