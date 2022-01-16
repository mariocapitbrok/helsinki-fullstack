import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }, [])
  console.log(countries[0])

  const handleCountryChange = (e) => {
    setNewCountry(e.target.value)
  }

  return (
    <>
      <div>
        find countries:
        <input onChange={handleCountryChange} value={newCountry} />
      </div>
    </>
  )
}

export default App
