import React, { useState, useEffect } from 'react'

const App = () => {
  const [countries, setCountries] = useState
  const [newCountry, setNewCountry] = useState

  return (
    <>
      <div>
        find countries:{' '}
        <input onChange={handleCountryChange} value={newCountry} />
      </div>
    </>
  )
}

export default App
