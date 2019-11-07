import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Weather from './Weather'

const Country = ({country}) => {
    const {name, capital, population, languages, flag} = country

    const [weatherData,
        setWeatherData] = useState()

    useEffect(() => {

        let didCancel = false
        const API_KEY = 'fb816dd47dc9b2690d624813857a2719'

        axios
            .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`)
            .then(response => {
                if (!didCancel) {
                    console.log(response.data);
                    
                    setWeatherData(response.data)
                }
            })

        return () => {
            didCancel = true
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const languageList = languages.map(({name}) => <li key={name}>{name}</li>)

    return (
        <div>
            <h1>{name}</h1>
            Capital:
            <p>{capital}</p>
            Population:
            <p>{population}</p>
            Languages:<ul>
                {languageList}
            </ul>
            <img src={flag} alt={flag} width="200" height="200"/> 
            {weatherData && <Weather data={weatherData}/>}
        </div>
    );
};

export default Country;
