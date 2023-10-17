import { getAllCity, getCityByCountry } from '@/Services/city/city.service';
import { getAllCountry } from '@/Services/country/country.service';
import { EditEmployee, getEmployee } from '@/Services/employee/employee.service';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const EditEmployeeData = () => {

    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);
    const [data, setData] = useState({});

    const route = useRouter();
    const Id = route.query.id;

    useEffect(() => {
        const getData = async () => {
            setData(await getEmployee(Id))
            setCountry(await getAllCountry())
            setCity(await getAllCity())
        }
        getData();

    }, [Id]);

    const handleCountry = (e) => {
        const getCity = async () => {
            setCity(await getCityByCountry(e.target.value));
        }
        getCity();
        handleChange(e);
    }

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);
        try {
            await EditEmployee(data);
            route.push('/admin/employee')
        } catch (error) {
            console.error("Error", Error);
        }
    }

    return (
        <>
            <div className='container border'>
                <h1 className='my-4 mx-4'>Edit Info of {data?.name}</h1>
                <hr className='mb-5' />
                <form onSubmit={(e) => handleSubmit(e)} className='container ps-5'>
                    <input type="hidden" className="form-control" name='id' value={data.id} />
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Name</label>
                        <input value={data?.name} onChange={(e) => handleChange(e)} type="text" className="form-control" name='name' />
                    </div>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Email</label>
                        <input onChange={(e) => handleChange(e)} type="email" className="form-control" name='email' value={data.email} />
                    </div>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Phone</label>
                        <input onChange={(e) => handleChange(e)} type="text" className="form-control" name='phone' value={data.phone} />
                    </div>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Select Country</label>
                        <select onChange={(e) => handleCountry(e)} data-val="true" className="form-select" name='countryId' value={data.countryId}>
                            <option value="">Select a Country</option>
                            {
                                country != undefined && country.map((val, index) => (
                                    <option value={val.id} key={index}>
                                        {val.countryName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Select City</label>
                        <select onChange={(e) => handleChange(e)} data-val="true" className="form-select" name='cityId' value={data.cityId}>
                            <option value="">Select a City</option>
                            {
                                city != undefined && city.map((val, index) => (
                                    <option value={val.id} key={index}>
                                        {val.cityName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div style={{ textAlign: "right" }}>
                        <input type="submit" className="btn btn-primary mb-3 me-5" value="Save" />
                    </div>
                </form>

            </div>
        </>
    );
};

export default EditEmployeeData;