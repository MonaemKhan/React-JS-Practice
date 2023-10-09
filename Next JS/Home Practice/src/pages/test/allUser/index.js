import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const allUsers = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(er => console.log(er))
    }, []);

    // console.log(users)
    return (
        <>
            <title>View All User</title>
            <div className="text-center fs-3 fw-bold">View All User</div>
            <hr />
            {/* <div className="row p-4">
                {
                    users.map((val, index) => (
                        <div key={index} className="col-md-4 mb-3 text-wrap border border-primary" style={{height:"450px"}}>
                            <div className="d-flex justify-content-around h-25">
                                <h1>{val.name}</h1>
                            </div>
                            <div className="ps-4 h-50">
                                <h4>Mail: {val.email}</h4>
                                <h4>phone: {val.phone}</h4>
                                <h4>Website: {val.website}</h4>
                            </div>
                            <div>
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                    ))}
            </div> */}

            <table className="table table-hover container">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((val, index) => (
                            <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td>{val.website}</td>
                                <td>
                                    <Link href={{
                                        pathname: '../../test/viewUser',
                                        query: { id: val.id }
                                    }} class="btn btn-primary">View</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    );
};

export default allUsers;