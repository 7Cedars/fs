import React from 'react'

const CountryItem = ({ country, handleSelect }) => {

    return (
        <li>
          {country.name} 
          <button onClick={handleSelect}>show</button>
        </li>
      )
}

export default CountryItem