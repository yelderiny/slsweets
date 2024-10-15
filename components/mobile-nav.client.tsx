import Image from 'next/image';
import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {LiaTimesSolid} from 'react-icons/lia';
import Link from 'next/link';
import {useAppContext} from '@/app/context';


const MobileNav  = () => {
    const { isMenuOpen, toggleMenu } = useAppContext();

    return (
        <div
            className={`
                fixed inset-0 bg-background z-30 flex flex-col justify-evenly items-center
                gap-4 opacity-0 pointer-events-none transition-opacity duration-100 ease-linear font-sans ${
                isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
            }`}>
            <button
                className='text-2xl text-text absolute top-4 left-4'
                aria-label='close menu'
                onClick={toggleMenu}
            >
                <LiaTimesSolid/>
            </button>
            <div>
                <Image
                    className={`
                        w-24 h-auto transition-transform duration-300 ease-in ${
                        isMenuOpen ? 'translate-y-0' : '-translate-y-12'
                    }`}
                    src='/static/logo.png'
                    alt='logo'
                    width={1806}
                    height={794}
                />
            </div>
            <nav className={`
                flex flex-col items-center gap-4 transition-transform duration-300 ease-in ${
                isMenuOpen ? 'translate-y-0' : 'translate-y-5'
            }`}>
                <Link onClick={toggleMenu} className='text-3xl relative' href='/#specialties'>
                    Our Specialties
                    <span className='absolute inset-x-0 -bottom-0.5 h-2 bg-secondary -z-10 opacity-30'/>
                </Link>
                <Link onClick={toggleMenu} className='text-3xl relative' href='/menu'>
                    Our Menu
                    <span className='absolute inset-x-0 -bottom-0.5 h-2 bg-secondary -z-10 opacity-30'/>
                </Link>
                <Link onClick={toggleMenu} className='text-3xl relative' href='/#contact'>
                    Contact Us
                    <span className='absolute inset-x-0 -bottom-0.5 h-2 bg-secondary -z-10 opacity-30'/>
                </Link>
            </nav>
            <div className='border border-text-50 pr-6'/>
            <div className={`
                transition-transform duration-300 ease-in ${
                isMenuOpen ? 'translate-y-0' : 'translate-y-5'
            }`}>
            <a
                    href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram link'
                >
                    <FaInstagram className='text-3xl m-auto mb-4'/>
                </a>
                <button className='btn btn-primary inline-block text-background'>Order Now</button>
            </div>
        </div>
    );
};

export default MobileNav;