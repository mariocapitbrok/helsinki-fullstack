import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Capitals = ({ capitals }) =>
  capitals.map((capital) => <div key={capital}>capital {capital}</div>)

const Languages = ({ languages }) => (
  <ul>
    {languages.map((language) => (
      <li key={language}>{language}</li>
    ))}
  </ul>
)

const Country = ({ name, capitals, population, languages, flags }) => (
  <div>
    <h1>{name}</h1>
    <Capitals capitals={capitals} />
    <div>population {population}</div>
    <h2>languages</h2>
    <Languages languages={languages} />
    <img src={flags.svg} alt="flag" width={150} />
  </div>
)

const Filter = ({ countries, newFilter }) => {
  const countriesToShow = countries.filter(
    (country) =>
      country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
  )

  const length = countriesToShow.length

  if (length === 1) {
    const name = countriesToShow[0].name.common
    const capitals = countriesToShow[0].capital
    const population = countriesToShow[0].population
    const languages = Object.values(countriesToShow[0].languages)
    const flags = countriesToShow[0].flags
    return (
      <Country
        name={name}
        capitals={capitals}
        population={population}
        languages={languages}
        flags={flags}
      />
    )
  }

  if (length <= 10)
    return (
      <>
        {countriesToShow.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </>
    )

  return <></>
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('sw')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }, [])

  const handleCountryChange = (e) => {
    setNewFilter(e.target.value)
  }

  return (
    <>
      <div>
        find countries:
        <input onChange={handleCountryChange} value={newFilter} />
        <Filter countries={countries} newFilter={newFilter} />
      </div>
    </>
  )
}

export default App
