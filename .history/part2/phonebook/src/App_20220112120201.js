import React, { useState } from 'react'

const Person = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
)

const App = () => {
  const [newFilter, setNewFilter] = useState('a')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    persons.findIndex((person) => person.name === newPerson.name) === -1
      ? setPersons([...persons, newPerson])
      : alert(`${newPerson.name} is already added to phonebook`)

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input onChange={(e) => setNewFilter(e.target.value)} />
        {newFilter}
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          name:{' '}
          <input onChange={(e) => setNewName(e.target.value)} value={newName} />
        </div>
        <div>
          number:{' '}
          <input
            onChange={(e) => setNewNumber(e.target.value)}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </div>
  )
}

export default App
