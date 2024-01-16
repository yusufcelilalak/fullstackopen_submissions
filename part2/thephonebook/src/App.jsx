import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons'
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(()=>{

    personsService
      .getAllPersons()
      .then((response)=>{
        if(response)
        {
          setPersons(response);
        }
      });

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

    const existedPerson = persons.find((person)=>person.name === newName);

    if(existedPerson)
    {
      if(confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const updatedData = {...existedPerson, number: newNumber}

        personsService
          .updatePerson(existedPerson.id, updatedData)
          .then((response)=>{
            setPersons(persons.map(person => person.id === response.id ? {...person, number: newNumber} : person ));
            setNewName('');
            setNewNumber('');
          })
      }
    }
    else
    {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
  
      personsService
        .addPerson(newPerson)
        .then((response)=>{
          if(response){
            setPersons(persons.concat(response));
            setNewName('');
            setNewNumber('');
          }
        });
    }
  }

  const deletePersonHandler = (id) => {
    personsService
      .deletePerson(id)
      .then((response)=>{
        if(response)
        {
          setPersons(persons.filter(person => person.id !== response.id));
        }
      })
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
        filteredPersonList.length > 0 && <Persons deletePersonHandler={deletePersonHandler} persons={filteredPersonList}/>
      }
    </div>
  )
}

export default App
