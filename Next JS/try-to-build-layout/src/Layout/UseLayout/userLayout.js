import React from 'react';
import Header from '@/Component/Header/header';
const UserLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='container mt-4'>
                {children}
            </div>
        </div>
    );
};

export default UserLayout;