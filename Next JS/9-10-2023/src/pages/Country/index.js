import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Country = () => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountryData(data))
            .catch(er => console.log(er))
    },[]);
    
    return (
        <div className="container mt-5">
            <h1 className='text-success text-center'>All Country</h1>
            <hr/>
            <div className="row">
                {
                    countryData.map((val, index) => (
                        <div key={index} className='col-md-4'>
                            <div className='border border-3 border-success m-2 p-4 rounded'>
                                <h4>{val?.name}</h4>
                                <img src={val?.flags?.png} style={{ height: "150px", width: "300px" }}></img>
                                <br />
                                <Link href={`/Country/Details/${val?.name}`} className="btn btn-success mt-3 mb-2">View Details</Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Country;