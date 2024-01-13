import { useState } from 'react'

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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filterName} onChange={filterHandler}/>
      </div>

      <h2>add a new</h2>
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
        persons && persons.filter((person) => {
          return filterName.length > 0 ? person.name.toLowerCase().startsWith(filterName.toLowerCase()) : true
        }).map((person)=>{
          return <div key={person.id}>{person.name} {person.number}</div>
        })
      }
    </div>
  )
}

export default App
