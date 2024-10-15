import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-20 flex justify-between text-sm text-white p-4 bg-primary'>
            <p>&copy; 2024 SLSweets. All rights reserved.</p>
            <p className='text-right'>
                By&#xa0;
                <a href='https://www.linkedin.com/in/yelderiny'
                   target='_blank'
                   rel='noopener noreferrer'
                   className='font-bold'
                >
                    Youssef Elderiny
                </a>
            </p>
        </footer>
    );
};

export default Footer;