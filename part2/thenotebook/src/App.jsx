import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const nameHandler = (e) => {
    setNewName(e.target.value);
  }

  const addNumber = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson));
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={nameHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons && persons.map((person, index) => {
          return <div key={index}>{person.name}</div>
        })
      }
    </div>
  )
}

export default App
