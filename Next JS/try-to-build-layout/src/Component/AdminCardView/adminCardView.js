import React from 'react';
const AdminCardView = (props) => {
    return (
        <div className='col-md-4'>
            <div className='border border-3 mb-3'>
                <h1 className='bg-secondary text-info text-center'>{props.title}</h1>
                <div className='text-center fs-5'>
                    {props.data}
                </div>
            </div>
        </div>

    );
};

export default AdminCardView;