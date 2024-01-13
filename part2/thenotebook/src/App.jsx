import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

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
        id: persons.length + 1
      }
  
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
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
