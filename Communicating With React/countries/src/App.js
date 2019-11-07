import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountry'

const App = () => {

    const [countries,
        setCountries] = useState([]);

    const [search,
        setSearch] = useState('');

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    // const filterCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

        const filterCountries = 
    [...countries].filter(country =>
            country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
       ); 

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
    return (
        <div>
            <h2>Countries</h2>
            <Filter onChange={handleSearch} inputValue={search}/>

            {filterCountries.length > 0 && <DisplayCountries initialCountries={filterCountries}/>}
        </div>
    )
}

export default App;
