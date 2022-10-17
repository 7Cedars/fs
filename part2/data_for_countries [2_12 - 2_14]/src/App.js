import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryItem from './components/CountryItem'
import DataSingleCountry from './components/DataSingleCountry'

function App() {

  // const [rawData, setRawData] = useState([])
  const [countries, setCountries] = useState([])
  const [rawData, setRawData] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    console.log('sending request restcountries')
    axios
      .get('https://restcountries.com/v3.1/all? ')
      .then(response => {        
        console.log('promise fulfilled')
        setRawData(response.data)
      })
    }, [])

  useEffect(() => {

    let _countries = rawData.map(
      (item, i) => (
        {id: i, 
        name: item.name.common,
        capital: item.capital, 
        languages: item.languages,
        area: item.area,
        flag: item.flags.svg, 
        capitalLatLng: item.capitalInfo.latlng
      }
      )
    )
    setCountries(_countries)
  }, [rawData])

  // console.log('rawData output API call:', rawData)

  const handleFilterChange = (event) => {
    let _filteredCountries = countries.filter(country => 
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setCountriesToShow(_filteredCountries)
  }

  const handleSelect = (id) => {

    console.log("id is:", id)

    let _selectedCountry = countries.filter(country => country.id === id)
    setCountriesToShow(_selectedCountry)

  }

  console.log('countriesToShow:', countriesToShow.length)

  // Here I call the weather API ONLY when one country is selected.  
  useEffect(() => {
    if (countriesToShow.length === 1) { 

      let country = countriesToShow[0]
    
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalLatLng[0]}&lon=${country.capitalLatLng[1]}&appid=${api_key}&units=metric`)
      .then(response => {        
        console.log('promise fulfilled')
        setWeatherData(response.data)
      })

      console.log("this is weather data", weatherData)
    }
    // if more than one country is shown, weatherData = null. 
    setWeatherData(null) 
    
  }, [countriesToShow])
 
  return (
    <div>
      <h1>Data for Countries</h1>
      <form >
            <div>
                Filter by name: <input onChange={handleFilterChange} />
            </div>
        </form>
      <h1>Result:</h1>

      {/* weatherData is only !null if one country is selected.  */}
      {/* See the useEffect above. */}
      { weatherData ? 
          <div>
            <DataSingleCountry 
              countriesToShow={ countriesToShow } 
              weatherData={ weatherData } /> 
          </div>
        :
        countriesToShow.length < 11 ?
          <div>
            <ul>
                {countriesToShow.map(
                    country => <CountryItem 
                                key={country.id} 
                                country={country} 
                                handleSelect = {() => handleSelect(country.id)} />
                    )
                }
            </ul>
          </div> 
        :
        <div>
          Too many countries selected! 
        </div>
      }
    </div>
  )
}

export default App;
