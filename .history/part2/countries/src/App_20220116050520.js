import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ countries, newFilter }) => {
  const countriesToShow = countries.filter(
    (country) =>
      country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
  )

  let length = countriesToShow.length
  //console.log(length)

  if (length === 1)
    return (
      <div>
        <h1>Uno</h1>
      </div>
    )

  if (length <= 10)
    return (
      <>
        {countriesToShow.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </>
    )

  return <div>Nada</div>
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
