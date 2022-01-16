import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('sw')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }, [])

  const handleCountryChange = (e) => {
    setNewCountry(e.target.value)
  }

  return (
    <>
      <div>
        find countries:
        <input onChange={handleCountryChange} value={newCountry} />
        {countries.map((country) => (
          <div>{country.name.common}</div>
        ))}
      </div>
    </>
  )
}

export default App
