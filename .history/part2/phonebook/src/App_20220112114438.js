import React, { useState } from 'react'

const Person = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
)

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567',
    },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    persons.findIndex((person) => person.name === newPerson.name) === -1
      ? setPersons([...persons, newPerson])
      : alert(`${newPerson.name} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
