'use client';

import Image from 'next/image';
import React, {FC, useEffect, useState} from 'react';
import {FaInstagram} from 'react-icons/fa';
import {LiaBarsSolid} from 'react-icons/lia';
import Link from 'next/link';
import {useAppContext} from '@/app/context';

interface HeaderProps {
    override?: boolean
}

const Header: FC<HeaderProps> = ({ override = false }) => {
    const { isMenuOpen, toggleMenu } = useAppContext()
    const [hasScrolled, setHasScrolled] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set 'hasScrolled' to true if the user scrolls more than 50px
            setHasScrolled(currentScrollY > 50);

            // Detect if the user is scrolling up or down
            if (currentScrollY > lastScrollY && currentScrollY > 100)
                setShowHeader(false); // Scrolling down and past 100px, hide the header
            else
                setShowHeader(true); // Scrolling up or near the top, show the header

            setLastScrollY(currentScrollY); // Update the last scroll position
        };

        // Function to update the scroll-margin-top dynamically based on viewport width
        const updateScrollMargin = () => {
            const scrollPadding = (document.querySelector('header')?.clientHeight || 0) + 10;
            document.documentElement.style.setProperty('--scroll-padding', `${scrollPadding}px`);
        };

        // Call the updateScrollMargin function initially to set the scroll margin
        updateScrollMargin();

        // Attach both scroll and resize event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateScrollMargin);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateScrollMargin);
        };
    }, [lastScrollY]);

    return (
        <header className={` 
            flex justify-between items-center p-2 px-4 w-full transition-all duration-300 ease-in-out 
            md:justify-center ${hasScrolled || override ? 'bg-primary opacity-95 shadow-lg fixed top-0 left-0 right-0 z-20' : 
            'bg-transparent'} ${showHeader ? 'translate-y-0' : '-translate-y-full'}
        `}>
            <button
                className={`text-2xl md:hidden ${isMenuOpen ? 'hidden' : ''}`}
                aria-label='open menu'
                onClick={toggleMenu}
            >
                <LiaBarsSolid className={hasScrolled || override ? 'text-text' : 'text-background'}/>
            </button>
            <nav className={`hidden md:flex md:justify-start md:gap-4 md:flex-1 ${
                hasScrolled || override ? 'text-gray-800' : 'text-background'
            }`}>
                <Link className='text-xs font-semibold lg:text-sm xl:text-base' href='/#specialties'>Our Specialties</Link>
                <Link className='text-xs font-semibold lg:text-sm xl:text-base' href='/menu'>Our Menu</Link>
                <Link className='text-xs font-semibold lg:text-sm xl:text-base' href='/#contact'>Contact Us</Link>
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
                    <FaInstagram className={`text-2xl ${hasScrolled || override ? 'text-text' : 'text-background'}`}/>
                </a>
                <a className={`
                    hidden btn text-xs font-semibold md:inline-block lg:text-sm xl:text-base ${
                    hasScrolled || override ? 'text-gray-800 bg-background' : 'text-background bg-secondary'
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
