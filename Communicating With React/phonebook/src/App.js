import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import List from './components/List';
import AddItem from './components/AddItem';
import personService from './services/index'

const App = () => {

    const [persons,
        setPersons] = useState([]);

    const [newName,
        setNewName] = useState('');

    const [newNumber,
        setNewNumber] = useState('');

    const [search,
        setSearch] = useState('');

    // const rows = () => persons.map(person => <Person key={person.name}
    // person={person}/>)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons);

            })

    }, [])

    // const hook = () => { } useEffect(hook,[])

    const addName = (e) => {

        e.preventDefault();

        const personObject = {
            name: newName,
            number: newNumber
        }

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} already exists`)
            return
        }

        if (persons.some(person => person.number === newNumber)) {
            alert(`${newNumber} already exists`);
            return;
        }

        personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson));
                setNewName('');
                setNewNumber('');
            })

    }

    const filterPersons = () => {
        if (search === "") {
            return persons
        }
        return [...persons].filter(person => person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    }

    const deleteItem = (id) => {

        const Person = persons.find(n => n.id === id)
        const changedPerson = {...persons}

        personService.deletePerson(id, changedPerson)
        .then(returnedPerson => setPersons(returnedPerson))

    }



    const handleNameChange = (e) => {
        setNewName(e.target.value)

    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value);
    };

    const handleSearch = e => {
        setSearch(e.target.value);
    };
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onChange={handleSearch} inputValue={search}/>

            <AddItem
                formSubmit={addName}
                onNameInputChange={handleNameChange}
                onNumberInputChange={handleNumberChange}
                newName={newName}
                newNumber={newNumber}/>

            <List list={filterPersons()}/>
        </div>
    );
};

export default App;
