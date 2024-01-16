import { useEffect, useState } from 'react'
import countryService from './services/countryService';

function App() {
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState('');

  useEffect(()=>{
    countryService
      .getCountries()
      .then((response)=>{
        if(response){
          setCountries(response);
        }
        else{
          setCountries(null);
        }
      })
  },[]);

  const changeCountryNameHandler = (e) => {
    setFilterCountry(e.target.value);
  }

  const filteredCountries = countries.filter(countryItem => countryItem.name.common.toLowerCase().includes(filterCountry.toLowerCase()));
  const firstCountry = filteredCountries.length === 1 ? filteredCountries[0] : '';

  return (
    <>
      <div>
        find countries <input onChange={changeCountryNameHandler}/>
      </div>
      {
        !countries || filterCountry === '' ? 
          ''
          :
          filteredCountries.length > 10 ?
            <div>Too many matches, specify another filter</div>
            :
            filteredCountries.length !== 1 ?
              filteredCountries.map((country)=>{
                return <div key={country.cca2+country.cca3}>{country.name.common}</div>
              })
              :
              <div>
                <h2>{firstCountry.name.common}</h2>
                <div>capital {firstCountry.capital[0]}</div>
                <div>area {firstCountry.area}</div>
                <h4>languages:</h4>
                <ul>
                  {
                    Object.keys(firstCountry.languages).map((langCode)=>{
                      return <li key={langCode}>{firstCountry.languages[langCode]}</li>
                    })
                  }
                </ul>
                <div className='flag'>
                  <img src={firstCountry.flags.png} alt={firstCountry.flags.alt}/>
                </div>
              </div>
      }
    </>
  )
}

export default App
