import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ViewEachUser from '@/pages/Component/viewEachUser'

const Details = () => {
    const route = useRouter();
    const name = route.query.name;
    const [conData, setCondata] = useState({});

    useEffect(() => {
        if (name != undefined) {
            fetch(`https://restcountries.com/v2/name/${name}`)
                .then(res => res.json())
                .then(data => setCondata(data))
                .catch(er => console.log(er))
        }
    }, [name]);

    const CountryData = conData[0];
    const currency = `${CountryData?.currencies[0]?.code} (${CountryData?.currencies[0]?.symbol})`;
    const language = `${CountryData?.languages[0]?.name} (${CountryData?.languages[0]?.nativeName})`;

    
    return (
        <div>
            <div className='container'>
                <div className='row border border-3 mt-5 p-1 border-success rounded'>
                    <div className='col-md-5 text-center'>
                        <img src={CountryData?.flags?.png} style={{ height: "250px", width: "300px" }}></img>
                    </div>
                    <div className='col-md-7'>
                        <h1>{CountryData?.name}</h1>
                        <div className='row'>
                            <div className='col-md-6'><ViewEachUser name="Native" data={CountryData?.nativeName} /></div>
                            <div className='col-md-6'><ViewEachUser name="Capital" data={CountryData?.capital} /></div>
                            <div className='col-md-6'><ViewEachUser name="Region" data={CountryData?.region} /></div>
                            <div className='col-md-6'><ViewEachUser name="Currencies" data={currency} /></div>
                            <div className='col-md-6'><ViewEachUser name="Area" data={CountryData?.area} /></div>
                            <div className='col-md-6'><ViewEachUser name="Population" data={CountryData?.population} /></div>
                            <div className='col-md-6'><ViewEachUser name="Language" data={language} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;