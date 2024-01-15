import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then((response)=>{
        if(response.status === 200){
          setPersons(response.data);
        }
      })
  },[]);

  const nameHandler = (e) => {
    setNewName(e.target.value);
  }

  const numberHandler = (e) => {
    setNewNumber(e.target.value);
  }

  const filterHandler = (e) => {
    setFilterName(e.target.value);
  }

  const addNumber = (e) => {
    e.preventDefault();

    const isPersonExist = persons.find((person)=>person.name === newName);

    if(isPersonExist)
    {
      alert(`${newName} is already added to phonebook`);
    }
    else
    {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
  
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then((response)=>{
          setPersons(persons.concat(response.data));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const filteredPersonList =  persons ? 
    persons.filter((person) => {
      return filterName.length > 0 ? person.name.toLowerCase().startsWith(filterName.toLowerCase()) : true
    })
    :
    []
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} filterHandler={filterHandler}/>
      <h2>add a new</h2>
      <PersonForm addNumber={addNumber} newName={newName} nameHandler={nameHandler} newNumber={newNumber} numberHandler={numberHandler}/>
      <h2>Numbers</h2>
      {
        filteredPersonList.length > 0 && <Persons persons={filteredPersonList}/>
      }
    </div>
  )
}

export default App
