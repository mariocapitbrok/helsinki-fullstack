import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService.getAll().then((allPersons) => {
      setPersons(allPersons)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    persons.findIndex((person) => person.name === newPerson.name) === -1
      ? personService.create(newPerson).then((person) => {
          setPersons([...persons, person])
        })
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

  const handleDelete = (id) => {
    //window.confirm(`Delete ${'person'} ?`)

    personService.remove(id).then((returnedPerson) => {
      setPersons(persons.filter((person) => person.id !== id))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} newFilter={newFilter} />
      <h2>add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        newFilter={newFilter}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
