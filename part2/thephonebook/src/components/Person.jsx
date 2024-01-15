const Person = ({person, deletePersonHandler}) => {

    const deletePerson = () => {
        if (window.confirm(`Delete ${person.name} ?`)) {
            deletePersonHandler(person.id);
        }
    }

    return(
        <>
            <div>
                {person.name} {person.number}
                {' '}
                <button onClick={deletePerson}>delete</button>
            </div>
        </>
    )
}

export default Person;