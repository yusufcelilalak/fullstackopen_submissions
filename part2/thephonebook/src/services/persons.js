import axios from 'axios';

const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
    return axios
        .get(baseUrl)
        .then((response) => {
            if(response.status.toString().startsWith('2'))
                return response.data;
            else
                return null;
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
            if(response.status.toString().startsWith('2'))
                return response.data;
            else
                return null;
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
            if(response.status.toString().startsWith('2'))
                return response.data;
            else
                return null;
        })
        .catch((error)=>{
            console.log(error);
            alert('An unexpected error occured!');
        });
}

const updatePerson = (id, updatedData) => {
    return axios
        .put(`${baseUrl}/${id}`,updatedData)
        .then((response) => {
            if(response.status.toString().startsWith('2'))
                return response.data;
            else
                return null;
        })
        .catch((error)=>{
            console.log(error);
            alert('An unexpected error occured!');
        });
}


export default {
    getAllPersons,
    addPerson,
    deletePerson,
    updatePerson
}