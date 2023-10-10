import React, { useEffect, useState } from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewDetails from '@/Component/DataView/viewDetails';

const PostView = () => {
    const [postdata, setPostData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPostData(data))
            .catch(er => console.log(er))
    }, []);
    return (
        <div>
            <div className='bg-light text-secondary d-flex justify-content-between'>
                <div>
                    <h2> All Post View</h2>
                </div>
                <div>
                    <PostAddIcon className='fs-3 me-1' />
                    <Link href={''} className='fs-5'>Add Post</Link>
                </div>
            </div>
            <table className='table table-hover text-center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postdata.map((val, index) => (
                            <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.userId}</td>
                                <td>{val.title}</td>
                                <td>
                                    <Link href={''}> <VisibilityIcon /> </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ViewDetails/>
        </div>
    );
};

export default PostView;