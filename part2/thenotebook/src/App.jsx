import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const nameHandler = (e) => {
    setNewName(e.target.value);
  }

  const numberHandler = (e) => {
    setNewNumber(e.target.value);
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
        number: newNumber
      }
  
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={nameHandler}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={numberHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons && persons.map((person, index) => {
          return <div key={index}>{person.name} {person.number}</div>
        })
      }
    </div>
  )
}

export default App
