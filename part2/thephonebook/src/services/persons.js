import axios from 'axios';

const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
    return axios
        .get(baseUrl)
        .then((response) => {
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
            alert('An unexpected error occured!');
        });
}

const addPerson = (person) => {
    return axios
        .post(baseUrl, person)
        .then((response) => {
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
            alert('An unexpected error occured!');
        });
}

const deletePerson = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
            alert('An unexpected error occured!');
        });
}

export default {
    getAllPersons,
    addPerson,
    deletePerson
}