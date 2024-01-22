import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons'
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const [notification, setNotification] = useState(null);

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
            if(response)
            {
              setPersons(persons.map(person => person.id === response.id ? {...person, number: newNumber} : person ));
              setNewName('');
              setNewNumber('');
            }
            else
            {
              setNotification(
                {
                  message: `Information of ${existedPerson.name} has already been removed from server`,
                  type: 'error'
                }
              );

              setTimeout(()=>{
                setNotification(null);
              },5000);
            }
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
            setNotification(
              {
                message: `Added ${response.name}`,
                type: 'success'
              }
            );
            setNewName('');
            setNewNumber('');

            setTimeout(()=>{
              setNotification(null);
            },3000);
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
          setPersons(persons.filter(person => person.id !== id));
        }
      })
  }

  const filteredPersonList =  persons && persons.length > 0 ? 
    persons.filter((person) => {
      return filterName.length > 0 ? person.name.toLowerCase().startsWith(filterName.toLowerCase()) : true
    })
    :
    []
  

  return (
    <div>
      <h2>Phonebook</h2>
      {
        notification && <Notification message={notification.message} type={notification.type}/>
      }
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
