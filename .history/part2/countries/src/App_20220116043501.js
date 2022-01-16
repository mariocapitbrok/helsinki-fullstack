import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  const countriesToShow = countries.filter(
    (country) =>
      country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
  )

  return (
    <>
      <div>
        find countries:
        <input onChange={handleCountryChange} value={newFilter} />
        {countriesToShow.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </div>
    </>
  )
}

export default App
