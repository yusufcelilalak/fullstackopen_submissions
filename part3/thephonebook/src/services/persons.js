import axios from 'axios';

const baseUrl = '/api/persons';

const getAllPersons = () => {
    return axios
        .get(baseUrl)
        .then((response) => {
            if(response.status === 200)
                return response.data;
            else
                return false;
        })
        .catch((error)=>{
            console.log(error);
            return false;
        });
}

const addPerson = (person) => {
    return axios
        .post(baseUrl, person)
        .then((response) => {
            if(response.status === 200)
                return response.data;
            else
                return false;
        })
        .catch((error)=>{
            console.log(error);
            return false;
        });
}

const deletePerson = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
        .then((response) => {
            if(response.status === 204)
                return true;
            else
                return false;
        })
        .catch((error)=>{
            console.log(error);
            return false;
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
            return false;
        });
}


export default {
    getAllPersons,
    addPerson,
    deletePerson,
    updatePerson
}