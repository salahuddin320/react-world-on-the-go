import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries}) => {


    const [visited, setVisited] = useState(false);

    // console.log(handleVisitedCountries);

    const handleClick = () => {
            // setVisited(true);
            // if(visited){
            //     setVisited(false);
            // } else {
            //     setVisited(true);
            // }

            // setVisited(visited ? false : true); 

            setVisited(!visited);
            handleVisitedCountries(country);
        }
    
    return (
        // <div className={`country ${visited ? 'country-visited':'country-not-visited'}`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h6>Capital: {country.capital.capital}, Population: {country.population.population}, Region: {country.region.region}</h6>
            <p>Area: {country.area.area}{country.area.area > 300000 ? ' large country' : ' small country'}</p>
            <button onClick={handleClick}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;