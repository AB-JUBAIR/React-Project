import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [ctnry, setCountries] = useState({});

    useEffect( () => {
        fetch('https://countriesnow.space/api/v0.1/countries/')
        .then(async res => res.json())
        .then(async data => setCountries(data))
        
    }
        ,[])

        
    return (
        <div>
            <h3> Countries: </h3>
          {

            console.log(ctnry)
            
            
          }
        </div>
    );
};

export default Countries;