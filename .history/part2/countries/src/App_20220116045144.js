import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ countries, newFilter }) => {
  const countriesToShow = countries.filter(
    (country) =>
      country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
  )

  const lenght = countriesToShow.lenght

  if (lenght <= 10)
    return (
      <>
        {countriesToShow.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </>
    )

  if (lenght > 10) return <div>Too many matches, specify another filter</div>
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