import { useEffect, useState } from "react";
import countryService from '../services/countryService';

const CountryInfo = ({country}) => {

    const [capitalWeather, setCapitalWeather] = useState(null);

    useEffect(()=>{
        countryService
            .getWeather(country.capital[0])
            .then((response)=>{
                if(response){
                    setCapitalWeather(response);
                }
                else{
                    setCapitalWeather(null);
                }
            })
    },[country]);

    return(    
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <h4>languages:</h4>
            <ul>
            {
                Object.keys(country.languages).map((langCode)=>{
                    return <li key={langCode}>{country.languages[langCode]}</li>
                })
            }
            </ul>
            <div className='flag'>
                <img src={country.flags.png} alt={country.flags.alt}/>
            </div>
            {
                capitalWeather && 
                    <div>
                        <h3>Weather in {country.capital[0]}</h3>
                        <div>temperature {capitalWeather.main.temp} Celcius</div>
                        <div>
                            <img src={`https://openweathermap.org/img/wn/${capitalWeather.weather[0].icon}@2x.png`} alt={"Weather in "+country.capital[0]}/>
                        </div>
                        <div>wind {capitalWeather.wind.speed} m/s</div>
                    </div>
            }
        </div>
    );
}

export default CountryInfo;