import React from 'react';

const Footer = () => {
    return (
        <div className='py-3 bg-secondary'>
            <p className='text-center text-light'>  &copy; All Rights Reserved  @ {new Date().getFullYear()} </p>
        </div>
    );
};

export default Footer;