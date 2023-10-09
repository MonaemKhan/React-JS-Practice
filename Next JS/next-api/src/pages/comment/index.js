import React, { useEffect, useState } from 'react';

const Comment = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[]);
    console.log(user);
    return (
        <div>
            <h1>This is From Comment Route</h1>
            {
                user.map((value,index)=>(
                    <div key={index}>
                        <p style={{color:"red",fontSize:"1.5rem"}}>{value.name}</p>

                        <p className="text-primary fs-1"> {value.id}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Comment;