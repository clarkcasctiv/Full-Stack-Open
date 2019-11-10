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

        if (persons.some(person => person.name === newName)) {

            if (window.confirm(`Confirm Replace ?`)) {
                const person = persons.find(person => person.name === newName);

                let newPerson = {
                    ...person,
                    number: newNumber
                }
                setNewName('');
                setNewNumber('');
                personService
                    .updatePerson(person.id, newPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(n => n.id !== person.id
                            ? person
                            : returnedPerson));
                    }).catch(error =>{
                        alert(`${person.id} was already deleted`);
                    })
                    

                setNewName('');
                setNewNumber('');
            } else {
                setNewName('');
                setNewNumber('');
                return
            }

        }

        // if (persons.some(person => person.number === newNumber)) {
        //     alert(`${newNumber} already exists`);
        //     return;
        // }

        const personObject = {
            name: newName,
            number: newNumber
        };

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

        const person = persons.find(n => n.id === id)

        if (!window.confirm(`Confirm Delete ${person.name} ?`)) {
            return;
        }

        personService
            .deletePerson(id)
            .then(() => setPersons(persons.filter(person => person.id !== id)))
            .catch(error => {
                alert(`${person.id} was already deleted`);
            })

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

            <List list={filterPersons()} deleteItem={deleteItem}/>
        </div>
    );
};

export default App;
