import axios from 'axios';

const baseUrl ='https://studies.cs.helsinki.fi/restcountries/api'

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


export default {
    getCountries
}