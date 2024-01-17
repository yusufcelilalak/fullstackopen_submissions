import { useEffect, useState } from 'react'
import countryService from './services/countryService';
import CountryInfo from './components/CountryInfo';

function App() {
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState('');
  const [showCountry, setShowCountry] = useState(null);

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

  const filteredCountries = countries.filter(countryItem => countryItem.name.common.toLowerCase().includes(filterCountry.toLowerCase()));
  const firstCountry = filteredCountries.length === 1 ? filteredCountries[0] : '';

  const changeCountryNameHandler = (e) => {
    setShowCountry(null);
    setFilterCountry(e.target.value);
  }

  const showCountryHandler = (country) => {
    setShowCountry(country);
  }

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
              <div>
                {
                  filteredCountries.map((country)=>{
                    return <div key={country.cca2+country.cca3}>{country.name.common} <button onClick={()=>{showCountryHandler(country)}}>show</button></div>
                  })
                }
                {
                  showCountry && <CountryInfo country={showCountry}/>
                }
               
              </div>
              :
              <CountryInfo country={firstCountry}/>
      }
    </>
  )
}

export default App
