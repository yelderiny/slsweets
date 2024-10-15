'use client';

import Image from 'next/image';
import React, {useState} from 'react';
import Header from '@/components/header.client';
import MobileNav from '@/components/mobile-nav.client';
import Link from 'next/link';
import {speciality} from '@/types/img';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
    const specialities: speciality[] = [
        {
            src: '/static/cheesecake/cheesecake8.jpg',
            width: 2722,
            height: 4083,
            description: 'Blueberry Cheesecake',
            price: 20,
            overrides: ''
        },
        {
            src: '/static/brownies/brownies2.jpg',
            width: 2466,
            height: 3648,
            description: 'Fudgy Brownies',
            price: 24,
            overrides: 'object-right'
        },
        {
            src: '/static/cookies/cookies5.jpg',
            width: 768,
            height: 1024,
            description: 'Kinder Cookies',
            price: 20,
            overrides: ''
        },
        {
            src: '/static/truffles/truffles3.jpg',
            width: 1000,
            height: 1500,
            description: 'Chocolate Cake Truffles',
            price: 16,
            overrides: ''
        },
        {
            src: '/static/muffins/muffin2.jpg',
            width: 1005,
            height: 1256,
            description: 'Chocolate Chip Muffins',
            price: 35,
            overrides: ''
        }
    ];

    return (
        <>
            <div className='relative bg-hero bg-cover h-dvh bg-center  '>
                <div className='absolute inset-0 bg-black/40'>
                    <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
                    <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>

                    {/* hero */}
                    <section className='
                    continer flex flex-col justify-center items-center min-h-screen pb-16 gap-4 text-center
                    text-background lg:gap-6
                '>
                        <h1 className='text-5xl font-script sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
                            From Our Oven <br/> Right To Your Heart
                        </h1>
                        <a
                            className='btn btn-primary inline-block text-sm xl:text-lg'
                            href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Order Now
                        </a>
                    </section>
                </div>
            </div>
            <main className='space-y-20 lg:space-y-32'>

                {/* story */}
                <section
                    id='story'
                    className='
                            container mt-10 space-y-4
                            sm:space-y-0 sm:flex sm:justify-center sm:items-center sm:gap-4
                            lg:gap-8 xl:gap-16
                        '>
                    <div className='order-1 space-y-8'>
                        <h2 className='title text-center'>
                                <span className='relative'>Welcome to SLSweets
                                    <span
                                        className=' absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4'/>
                                </span>
                        </h2>
                        <p className='text-sm text-center max-w-prose mx-auto lg:text-base'>
                            My love for baking began in my kitchen, where I found solace in the art of
                            crafting <em className='italic font-bold'>delicious cheesecakes</em>. What started as
                            a hobby soon turned into a passion, and I began sharing my creations on Instagram. With
                            a heart full of joy and a kitchen filled with the aroma of&#xa0;
                            <em className='italic font-bold'>freshly baked goods</em>, I embarked on this
                            delightful journey, turning my passion into a business and spreading smiles one bite
                            at a time.
                        </p>
                        <div className='text-center'>
                            <a
                                className='btn btn-primary inline-block text-sm text-background lg:text-base'
                                href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram link'
                            >
                                Find me on Instagram
                            </a>
                        </div>
                    </div>
                    <Image
                        className='
                                w-full h-96 object-cover rounded-md mx-auto sm:mx-0 sm:w-64 sm:h-full sm:flex-shrink-0
                                lg:w-80
                            '
                        src='/static/cheesecake/cheesecake4.jpg'
                        alt='cheesecake'
                        width={4160}
                        height={6240}
                    />
                </section>

                {/* specialities */}
                <section id='specialties' className='container space-y-4'>
                    <h2 className='title text-center'>
                        <span className='relative'>Our Specialities
                            <span
                                className='absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4'/>
                        </span>
                    </h2>
                    <p className='text-sm text-center max-w-prose mx-auto lg:text-base'>
                        Our menu is filled with a variety of sweet treats that are sure to satisfy your cravings.
                        From <em className='italic font-bold'>decadent cheesecakes</em> to <em
                        className='italic font-bold'>fudgy brownies</em>, we have something for everyone.
                    </p>
                    <div className='text-center'>
                        <Link className='btn btn-primary inline-block text-sm lg:text-base' href='/menu'>
                            View Our Menu
                        </Link>
                    </div>

                    <div className='
                        px-12 py-2 flex gap-4 overflow-x-scroll snap-x snap-mandatory
                        sm:px-0 sm:py-0 sm:overflow-x-visible sm:snap-none sm:flex-wrap sm:justify-center
                    '>
                        {
                            specialities.map((item, index) => (
                                <div key={index} className='flex-shrink-0'>
                                    <Image
                                        className={`
                                        w-72 h-96 object-cover rounded-md snap-center lg:w-96
                                        ${item.overrides}
                                    `}
                                        src={item.src}
                                        alt={`speciality-${index}`}
                                        width={item.width}
                                        height={item.height}
                                    />
                                    <p className='text-base mt-2 uppercase'>{item.description}</p>
                                    <p className='text-xs mt-4'>
                                        from <strong className='text-base text-secondary'>AED {item.price}</strong>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* faq */}
                <section id='faq' className='container'>
                    <h2 className='title text-center'>
                        <span className='relative'>Faq
                            <span
                                className='absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4'/>
                        </span>
                    </h2>
                </section>

                {/* contact us */}
                <section id='contact' className='container space-y-4'>
                    <h2 className='title text-center'>
                            <span className='relative'>Contact Us
                                <span
                                    className='absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4'/>
                            </span>
                    </h2>
                    <p className='text-sm text-center max-w-prose mx-auto lg:text-base'>
                        We&apos;re super easy to get in contact with and we do everything over Instagram. If you
                        want to make an order or get in touch with you to ask questions, feel free to reach out on
                        our instagram page and we&apos;ll make sure to get back to you as soon as possible.
                    </p>
                    <div className='text-center'>
                        <a
                            className='btn btn-primary inline-block text-background'
                            href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Find us on Instagram
                        </a>
                    </div>
                </section>
            </main>

            {/* footer */}
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
        </>
    );
}