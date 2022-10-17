
const DataSingleCountry = ({ countriesToShow, weatherData }) => {

    let country = countriesToShow[0]
    let languages = []

    if (country.languages) {
        languages = Object.values(country.languages) 
    } else {
        languages = ['No languages listed']
    }

    return (
        <div>
            <h2> {country.name} </h2>
            <p> Capital: {country.capital}</p>
            <p> Area: {country.area}</p>
            <br/>
            <h3> Languages spoken in {country.name} </h3>
            <ul>
                { languages.map(
                    language => <p key = {language} >{language}</p>
                    )
                }
            </ul>
            <br/>
            <h3> The flag of {country.name} </h3>
            <img src={country.flag} alt="flag country" width="300px"/> 
            <br/>
            <h3> The weather in {country.name} </h3>
            <p> Temperature: {weatherData.main.temp} Celcius </p>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                 alt="weather icon" 
                 width="100px"/> 
            <p> Wind: {weatherData.wind.speed} m/s </p>
        </div>
    )
}

export default DataSingleCountry

