'use client';

import Image from 'next/image';
import React, {FC, useEffect, useState} from 'react';
import {FaInstagram} from 'react-icons/fa';
import {LiaBarsSolid} from 'react-icons/lia';

interface HeaderProps {
    isMenuOpen: boolean,
    toggleMenu: () => void
}

const Header: FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    // Detect scroll event and update the header's state
    useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 50);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={` 
            flex justify-between items-center p-2 px-4 w-full transition-all duration-300 ease-in-out 
            md:justify-center ${hasScrolled ? 'bg-primary-900 shadow-lg fixed top-0 left-0 right-0 w-full z-20' :
            'bg-transparent'
        }`}>
            <button
                className={`text-2xl md:hidden ${isMenuOpen ? 'hidden' : ''}`}
                aria-label='open menu'
                onClick={toggleMenu}
            >
                <LiaBarsSolid className={hasScrolled ? 'text-text-50' : 'text-text-900'}/>
            </button>
            <nav className={`hidden md:flex md:justify-start md:gap-4 md:flex-1 ${
                hasScrolled ? 'text-text-50' : 'text-text-900'
            }`}>
                <a className='text-xs font-medium lg:text-sm xl:text-base' href='#story'>Our Story</a>
                <a className='text-xs font-medium lg:text-sm xl:text-base' href='#specialties'>Our Specialties</a>
                <a className='text-xs font-medium lg:text-sm xl:text-base' href='#contact'>Contact Us</a>
            </nav>
            <div>
                <Image
                    className={`w-24 h-auto md:flex-1 lg:w-40 xl:w-48 ${isMenuOpen ? 'hidden' : 'block'}`}
                    src='/static/logo.png'
                    alt='logo'
                    width={1806}
                    height={794}
                />
            </div>
            <div className='md:flex md:justify-end md:items-center md:gap-4 md:flex-1'>
                <a
                    href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram link'
                >
                    <FaInstagram className={`text-2xl ${hasScrolled ? 'text-text-50' : 'text-background-950'}`}/>
                </a>
                <a className={`
                    hidden btn btn-secondary text-xs font-medium md:inline-block lg:text-sm xl:text-base ${
                    hasScrolled ? 'text-text-50' : 'text-background-950'
                }`}
                   href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                   target='_blank'
                   rel='noopener noreferrer'
                >
                    Order Now
                </a>
            </div>
        </header>
    );
};

export default Header;
