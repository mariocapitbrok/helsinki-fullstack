import React, { useState } from 'react'
import Filter from './components/Filter'

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

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  // Filter required by the exercise
  const personsToShowA = persons.filter(
    (person) => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
  )

  // Filter alternative
  const personsToShowB = persons.filter((person) =>
    person.name.toLowerCase().startsWith(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} />
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShowA.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </div>
  )
}

export default App
