import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import List from './components/List';
import AddItem from './components/AddItem';

const App = () => {
        const [notes, setNotes] = useState([]);

    const [persons,
        setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-123456'
        }, {
            name: 'Ada Lovelace',
            number: '39-44-5323523'
        }, {
            name: 'Dan Abramov',
            number: '12-43-234345'
        }, {
            name: 'Mary Poppendieck',
            number: '39-23-6423122'
        }
    ]);
    const [newName,
        setNewName] = useState('');

    const [newNumber,
        setNewNumber] = useState('');   

    const [search,
        setSearch] = useState('');
        

    // const rows = () => persons.map(person => <Person key={person.name}
    // person={person}/>)

    useEffect( ()=>{
        console.log('effect');
        axios.get('http://localhost:3001/notes')
        .then(response => {
            console.log('promise fulfilled');
            setNotes(response.data)
            
        })
        
    },[])
    console.log('render', notes.length, 'notes');
    

    const addName = (e) => {
        //console.log("Button clicked", e.target);

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

        setPersons(persons.concat(personObject));
        setNewName('');
        setNewNumber('')
    }

    const filterPersons = () => {
        if (search === "") {
            return persons
        }
        return [...persons].filter(person => person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    }

    const handleNameChange = (e) => {
        //console.log(e.target.value);
        setNewName(e.target.value)

    }

    const handleNumberChange = (e) => {
        //console.log(e.target.value);
        setNewNumber(e.target.value);
    };

    const handleSearch = e => {
        //console.log(e.target.value);
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
