import React, { useState } from 'react'

const Person = ({ name }) => <p>{name}</p>

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
    }

    persons.findIndex((person) => person.name === newPerson.name) === -1
      ? setPersons([...persons, newPerson])
      : console.log(`${newPerson.name} is already added to phonebook`)
  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} name={person.name} />
      ))}
    </div>
  )
}

export default App
