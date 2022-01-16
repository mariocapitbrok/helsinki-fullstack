import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')

  useEffect(() => {}, [])

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
