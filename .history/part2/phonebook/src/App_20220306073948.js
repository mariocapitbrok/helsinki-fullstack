import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const Notification = ({ message }) => {
  if (message === null) return null

  return <div className="notificationñ ">{message}</div>
}

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState('A notification message...')

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

    if (persons.findIndex((person) => person.name === newPerson.name) === -1) {
      personService.create(newPerson).then((person) => {
        setPersons([...persons, person])
      })
    } else {
      const person = persons.find((person) => person.name === newPerson.name)
      const changedPerson = { ...person, number: newNumber }
      const id = person.id

      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, ` +
            `replace the old number with a new one?`
        )
      )
        personService
          .update(id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson
              )
            )
          })
          .catch((error) => {
            alert(
              `The ${changedPerson.name}'s number was already deleted from server`
            )
            setPersons(persons.filter((person) => person.id !== id))
          })
    }

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

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
        .then(setPersons(persons.filter((person) => person.id !== id)))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
