import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMultiply, faPen } from '@fortawesome/free-solid-svg-icons';
import { getSingleEmployee } from '@/Services/employee/employee.service';

const EmpDetails = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const id = router.query.details;
    useEffect(() => {
        const getData = async (id) => {
            try {
                const getAllData = await getSingleEmployee(id);
                setData(getAllData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (id !== undefined) {
            getData(id);
        }
    }, [id]);
    return (
        <div className=''>
            {
                isLoading ? <p>Loading...</p> :
                    <div className="emp-bg">
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="card-title">Employee Details</h3>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <dl className="row">
                                                <dt className="col-md-3">
                                                    Employee Name
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.firstName + " " + data.lastName}
                                                </dd>
                                                <dt className="col-md-3">
                                                    Email
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.email}
                                                </dd>
                                                <dt className="col-md-3">
                                                    Phone
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.phone}
                                                </dd>
                                                <dt className="col-md-3">
                                                    Address
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.address}
                                                </dd>
                                                <dt className="col-md-3">
                                                    Gender
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.gender}
                                                </dd>
                                                <dt className="col-md-3">
                                                    Date of Birth
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.dateOfBirth}
                                                </dd>
                                                <dt className="col-md-3">
                                                    Education
                                                </dt>
                                                <dd className="col-md-9">
                                                    Ssc
                                                    <input checked={data.ssc == true} className="check-box" disabled="disabled" type="checkbox" />
                                                    Hsc
                                                    <input checked={data.hsc == true} className="check-box" disabled="disabled" type="checkbox" />
                                                    Bsc
                                                    <input checked={data.bsc == true} className="check-box" disabled="disabled" type="checkbox" />
                                                    Msc
                                                    <input className="check-box" disabled="disabled" type="checkbox" />
                                                </dd>

                                                <dt className="col-md-3">
                                                    Country
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.country.name}
                                                </dd>
                                                <dt className="col-md-3">
                                                    State
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.state.name}
                                                </dd>
                                                <dt className="col-md-3">
                                                    City
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.city.name}
                                                </dd>
                                                <dt className="col-md-3">
                                                    Zip Code
                                                </dt>
                                                <dd className="col-md-9">
                                                    {data.zipCode}
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="col-md-4">
                                            <dl className="row">
                                                <dt className="col-md-3">
                                                    Picture
                                                </dt>
                                                <dd className="col-md-9">
                                                    <img className='img-fluid' src={`https://localhost:7217/${data.picture}`} />
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-end">

                                        <Link className="btn btn-outline-danger btn-sm me-3" href="/admin/employee">
                                            <FontAwesomeIcon icon={faMultiply} /> Cancel
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-sm me-3" href={`/admin/employee/edit/${id}`}>
                                            <FontAwesomeIcon icon={faPen} /> Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};
export default EmpDetails;