import Person from "./Person";

const Persons = ({persons, deletePersonHandler}) => {

    return(
        <div>
            {
               persons.map((person)=>{
                return <Person deletePersonHandler={deletePersonHandler} key={person.id} person={person}/>
               }) 
            }
        </div>
    )
}

export default Persons;