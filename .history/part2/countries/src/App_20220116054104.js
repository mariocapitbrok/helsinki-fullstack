import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Languages = ({ languages }) => {
  console.log(languages)
  return languages.map((language) => <div key={language}>language</div>)
}

const Filter = ({ countries, newFilter }) => {
  const countriesToShow = countries.filter(
    (country) =>
      country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
  )

  const length = countriesToShow.length

  if (length === 1) {
    const languages = Object.values(countriesToShow[0].languages)
    return (
      <div>
        <h1>{countriesToShow[0].name.common}</h1>
        <Languages languages={languages} />
      </div>
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
