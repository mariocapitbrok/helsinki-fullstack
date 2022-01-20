import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Capitals = ({ capitals }) => {
  if (capitals)
    return (
      <>
        {capitals.map((capital) => (
          <div key={capital}>capital {capital}</div>
        ))}
      </>
    )

  return <></>
}

const Languages = ({ languages }) => {
  if (languages)
    return (
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    )

  return <></>
}

const Weather = ({ countryName, weather }) => {
  return (
    <div>
      <h2>Weather in {countryName}</h2>
      <div>
        <b>temperature: </b>
        {weather.main.temp} Celcius
      </div>
      <div>
        <img src="http://openweathermap.org/img/wn/04n@2x.png" />
      </div>
      <div>
        <b>wind:</b>
        {} mph direction {}
      </div>
    </div>
  )
}

const CountryList = ({ countriesToShow, setNewFilter }) => {
  const handleClick = (country) => {
    setNewFilter(`[${country.name.common}]`)
  }

  return (
    <div>
      {countriesToShow.map((country) => (
        <div key={country.name.common}>
          {country.name.common}{' '}
          <button onClick={() => handleClick(country)}>show</button>
        </div>
      ))}
    </div>
  )
}

const Country = ({ name, capitals, population, languages, flags }) => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=mexico&appid=703c58344e949447afd8cba9d95889bf'
      )
      .then((response) => {
        setWeather([...weather, response.data])
      })
  }, [])
  // console.log(weather.length === 1 ? 'yes' : 'no', weather, weather.length)

  return (
    <div>
      <h1>{name}</h1>
      <Capitals capitals={capitals} />
      <div>population {population}</div>
      <h2>Spoken languages</h2>
      <Languages languages={languages} />
      <img src={flags.svg} alt="flag" width={150} />
      {weather.length === 1 ? (
        <Weather countryName={name} weather={weather} />
      ) : (
        'nada'
      )}
    </div>
  )
}

const Filter = ({ countries, newFilter, setNewFilter }) => {
  const exactSearch = () => {
    if (newFilter.startsWith('[') && newFilter.endsWith(']'))
      return newFilter.slice(1, newFilter.length - 1)

    if (newFilter.endsWith('.')) return newFilter.slice(0, newFilter.length - 1)
  }

  let countriesToShow = []

  if (exactSearch()) {
    countriesToShow = countries.filter(
      (country) =>
        country.name.common.toLowerCase() === exactSearch().toLowerCase()
    )
  } else {
    countriesToShow = countries.filter(
      (country) =>
        country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
    )
  }

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
      <CountryList
        countriesToShow={countriesToShow}
        setNewFilter={setNewFilter}
      />
    )

  if (length > 10)
    return (
      <>
        <div>Too many matches, specify another filter</div>
        <h1>Instructions</h1>
        <ul>
          <li>
            Type your country and add a dot to end your search. Example:
            "Sudan."
          </li>
          <li>Or use brackets to do an exact search. Example: [Sudan]</li>
        </ul>
      </>
    )

  return <></>
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

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
        <button onClick={() => setNewFilter('')}>reset</button>
        <Filter
          countries={countries}
          newFilter={newFilter}
          setNewFilter={setNewFilter}
        />
      </div>
    </>
  )
}

export default App
