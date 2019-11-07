import React, {useEffect, useState} from 'react';
import Country from './Country';
import Countries from './Countries'
const DisplayCountry = ({initialCountries}) => {
    const [countries,
        setCountries] = useState([]);

    useEffect(() => {
        setCountries(initialCountries)
    }, [initialCountries])

    const length = countries.length;
    const tooManyMatches = length > 10;
    const singleMatch = length === 1;

    const handleClick = (e) => { setCountries([countries.find(country =>
    country.name === e.target.id)]) }

    return (
        <div>
            {
                tooManyMatches
                ? (
                    <p>Too Many Matches, specify another filter</p>
                )
                : singleMatch
                    ? (<Country country={countries[0]}/>)
                    : (<Countries countries={countries} handleClick={handleClick}/>)
            }
        </div>
    )
};

export default DisplayCountry;
