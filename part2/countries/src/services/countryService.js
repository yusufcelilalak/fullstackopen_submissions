import axios from 'axios';

const baseUrl ='https://studies.cs.helsinki.fi/restcountries/api';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = import.meta.env.VITE_WEATHER_KEY;

const getCountries = () => {
    return axios
        .get(baseUrl+'/all')
        .then((response)=>{
            if(response.status.toString().startsWith('2'))
            {
                return response.data;
            }
            else
            {
                return false;
            }
        })
        .catch((error)=>{
            console.log(error);
            return false;
        })
}

const getWeather = (country) => {
    return axios
        .get(weatherApiUrl+`?q=${country}&appid=${api_key}&units=metric`)
        .then((response)=>{
            if(response.status.toString().startsWith('2'))
            {
                return response.data;
            }
            else
            {
                return false;
            }
        })
        .catch((error)=>{
            console.log(error);
            return false;
        })
}


export default {
    getCountries,
    getWeather
}