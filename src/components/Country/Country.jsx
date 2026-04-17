import React from 'react';

const Country = ({country}) => {
    
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h6>Capital: {country.capital.capital}, Population: {country.population.population}, Region: {country.region.region}</h6>
        </div>
    );
};

export default Country;