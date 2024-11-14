'use client';

import Link from 'next/link';
import Image from 'next/image';
import {FaInstagram} from 'react-icons/fa';
import {useAppContext} from '@/app/context';
import {LiaBarsSolid} from 'react-icons/lia';
import {FiShoppingCart} from 'react-icons/fi';
import {FC, useCallback, useEffect, useState} from 'react';

interface HeaderProps {
    image?: boolean;
    follow?: boolean;
}

const Header: FC<HeaderProps> = ({ image = false, follow = true }) => {
    const { isMenuOpen, toggleMenu, toggleCart } = useAppContext();
    const [hasScrolled, setHasScrolled] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        if (!follow) return;

        const currentScrollY = window.scrollY;

        setHasScrolled(currentScrollY > 50); //update state if user has scrolled more than 50px

        // Show header if scrolling up or near the top (within 100px)
        // Hide header if scrolling down and past 100px
        setShowHeader(currentScrollY <= lastScrollY || currentScrollY <= 100);

        setLastScrollY(currentScrollY); //update last scroll position for next comparison
    }, [lastScrollY, follow]);

    const updateScrollMargin = useCallback(() => {
        // Calculate scroll padding based on header height plus additional 10px
        const scrollPadding = (document.querySelector('header')?.clientHeight ?? 0) + 10;

        // Set CSS custom property for scroll-padding-top
        // This ensures content is not hidden behind the fixed header when scrolling to anchor links
        document.documentElement.style.setProperty('--scroll-padding', `${scrollPadding}px`);
    }, []);

    useEffect(() => {
        updateScrollMargin();

        if (follow)
            window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateScrollMargin);

        return () => {
            if (follow)
                window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateScrollMargin);
        };
    }, [handleScroll, updateScrollMargin, follow]);

    return (
        <header
            className={` 
                flex justify-between items-center p-2 px-4 w-full transition-all duration-300 ease-in-out md:justify-center 
                ${hasScrolled || !image ? 'bg-primary opacity-95 shadow-lg' : 'bg-transparent'}
                ${follow ? 'fixed top-0 left-0 right-0 z-20' : 'relative'}
                ${follow && showHeader ? 'translate-y-0' : follow ? '-translate-y-full' : ''}
        `}
        >
            <button
                className={`text-2xl flex-1 md:hidden ${isMenuOpen ? 'hidden' : ''}`}
                aria-label='toggle menu'
                onClick={toggleMenu}
            >
                <LiaBarsSolid className={hasScrolled || !image ? 'text-text' : 'text-background'}/>
            </button>
            <nav
                className={`
                    hidden md:flex md:justify-start md:gap-4 md:flex-1 
                    ${hasScrolled || !image ? 'text-gray-800' : 'text-background'}
                `}
            >
                {
                    ['Our Specialties', 'Our Menu', 'Contact Us'].map((item, index) => (
                        <Link
                            key={index}
                            className='text-xs font-semibold lg:text-sm xl:text-base'
                            href={index === 1 ? '/menu' : `/#${item.toLowerCase().replace(' ', '-')}`}
                        >
                            {item}
                        </Link>
                    ))
                }
            </nav>
            <Link href='/'>
                <Image
                    className={`w-24 h-auto flex-1 lg:w-40 xl:w-48 ${isMenuOpen ? 'hidden' : 'block'}`}
                    src='/static/logo.png'
                    alt='logo'
                    width={1806}
                    height={794}
                />
            </Link>
            <div className='flex justify-end items-center gap-2 flex-1 md:gap-4'>
                <a
                    href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram link'
                >
                    <FaInstagram className={`text-2xl ${hasScrolled || !image ? 'text-text' : 'text-background'}`}/>
                </a>
                <button
                    aria-label='toggle cart'
                    onClick={toggleCart}
                >
                    <FiShoppingCart className={`text-2xl ${hasScrolled || !image ? 'text-text' : 'text-background'}`}/>
                </button>
                <Link
                    href='/menu'
                    className={`
                        hidden btn text-xs font-semibold md:inline-block lg:text-sm xl:text-base 
                        ${hasScrolled || !image ? 'text-gray-800 bg-background' : 'text-background bg-secondary'}
                    `}
                >
                    Order Now
                </Link>
            </div>
        </header>
    );
};

export default Header;
