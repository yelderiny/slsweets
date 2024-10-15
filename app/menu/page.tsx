'use client';

import React from 'react';
import Image from 'next/image';
import {img} from '@/types/img';
import Header from '@/components/header.client';
import MobileNav from '@/components/mobile-nav.client';
import Footer from '@/components/footer.client';


const Page = () => {
    const cheesecake: img[] = [
        {
            src: '/static/cheesecake/cheesecake1.jpg',
            width: 5792,
            height: 8513,
            overrides: 'object-bottom lg:place-self-end'
        },
        {
            src: '/static/cheesecake/cheesecake5.jpg',
            width: 3831,
            height: 4789,
            overrides: 'object-left'
        },
        {
            src: '/static/cheesecake/cheesecake7.jpg',
            width: 2592,
            height: 3456,
            overrides: 'lg:place-self-end'
        },
        {
            src: '/static/cheesecake/cheesecake8.jpg',
            width: 2722,
            height: 4083,
            overrides: ''
        }
    ];
    const brownies: img[] = [
        {
            src: '/static/brownies/brownies2.jpg',
            width: 2466,
            height: 3648,
            overrides: 'object-right lg:place-self-end'
        },
        {
            src: '/static/brownies/brownies3.jpg',
            width: 1200,
            height: 1200,
            overrides: ''
        },
        {
            src: '/static/brownies/brownies5.jpg',
            width: 3024,
            height: 4032,
            overrides: 'lg:place-self-end'
        },
        {
            src: '/static/brownies/brownies6.jpg',
            width: 4640,
            height: 6960,
            overrides: ''
        }
    ];
    const cookies: img[] = [
        {
            src: '/static/cookies/cookies7.jpg',
            width: 2560,
            height: 2228,
            overrides: 'lg:place-self-end'
        },
        {
            src: '/static/cookies/cookies3.jpg',
            width: 7940,
            height: 7756,
            overrides: ''
        },
        {
            src: '/static/cookies/cookies5.jpg',
            width: 768,
            height: 1024,
            overrides: 'lg:place-self-end'
        },
        {
            src: '/static/cookies/cookies6.jpg',
            width: 2883,
            height: 4324,
            overrides: 'object-bottom'
        }
    ];
    const truffles: img[] = [
        {
            src: '/static/truffles/truffles1.jpg',
            width: 1200,
            height: 1200,
            overrides: 'lg:place-self-end'
        },
        {
            src: '/static/truffles/truffles2.jpg',
            width: 1602,
            height: 2361,
            overrides: ''
        },
        {
            src: '/static/truffles/truffles3.jpg',
            width: 1000,
            height: 1500,
            overrides: 'lg:place-self-end'
        },
        {
            src: '/static/truffles/truffles4.jpg',
            width: 1200,
            height: 1200,
            overrides: ''
        }
    ];
    const muffins: img[] = [
        {
            src: '/static/muffins/muffin1.jpg',
            width: 1200,
            height: 1200,
            overrides: 'lg:place-self-end'
        },
        {
            src: '/static/muffins/muffin2.jpg',
            width: 1005,
            height: 1256,
            overrides: ''
        },
        {
            src: '/static/muffins/muffin3.jpg',
            width: 1200,
            height: 1800,
            overrides: 'lg:place-self-end'
        },
        {
            src: '/static/muffins/muffin5.jpg',
            width: 1707,
            height: 2560,
            overrides: ''
        }
    ];

    return (
        <>
            <Header override={true}/>
            <MobileNav/>

            <div className='space-y-20 mt-32 lg:space-y-32 lg:mt-52 xl:mt-60'>
                {/* cheesecake */}
                <section className='container'>
                    <div className='space-y-4'>
                        <h2 className='text-xs text-center'>
                            come for&#xa0;
                            <span className='relative title'>The Cheesecake
                                <span className='
                                    absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4
                                '/>
                        </span>
                        </h2>
                        <p className='text-sm text-center text-gray-700 max-w-prose mx-auto lg:text-base'>
                            Freshly Baked with Love. Our cheesecakes come in a variety of flavors and sizes:
                            Blueberry, Raspberry, Strawberry, Salted Caramel, and Lotus! Order yours today.
                        </p>
                        <div className='
                                px-12 py-2 flex gap-4 overflow-x-scroll snap-x snap-mandatory sm:px-0 sm:py-0 sm:grid
                                sm:grid-cols-2
                            '>
                            {
                                cheesecake.map((cake, index) => (
                                    <Image
                                        key={index}
                                        className={`
                                        w-72 h-96 object-cover flex-shrink-0 rounded-md snap-center 
                                        sm:w-full lg:w-96 ${cake.overrides
                                        }`}
                                        src={cake.src}
                                        alt='cheesecake'
                                        width={cake.width}
                                        height={cake.height}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-8 space-y-4 sm:space-y-0 sm:flex sm:gap-10 sm:mt-10'>
                        <h2 className='subtitle text-center sm:flex-1 sm:text-end sm:self-center'>
                                <span className='relative'>Our Prices<span className='absolute inset-x-0 bottom-0 h-2
                                bg-secondary -z-10 opacity-30'/></span>
                        </h2>
                        <div className='sm:border-l sm:border-text sm:h-80'></div>
                        <div className='flex-1 text-center self-center text-sm sm:text-left lg:text-base'>
                            <p className='mb-2'><span className='font-bold'>Single serve: </span>AED 20</p>
                            <p className='mb-2'><span className='font-bold'>Pack of four: </span>AED 20</p>
                            <p className='mb-2'><span className='font-bold'>Pack of six: </span>AED 30</p>
                            <p className='mb-2'><span className='font-bold'>Pack of twelve: </span>AED 60</p>
                            <p className='mb-2'><span className='font-bold'>1kg medium cake: </span>AED 70</p>
                            <p className='mb-5'><span className='font-bold'>2kg large cake: </span>AED 140</p>
                            <a
                                className='btn btn-primary inline-block text-background'
                                href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram link'
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* brownies */}
                <section className='container'>
                    <div className='space-y-4'>
                        <h2 className='text-xs text-center'>
                            stay for&#xa0;
                            <span className='relative title'>The Brownies
                                <span className='
                                    absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4
                                '/>
                        </span>
                        </h2>
                        <p className='text-sm text-center text-gray-700 max-w-prose mx-auto lg:text-base'>
                            Our brownies are made with the finest ingredients, ensuring a rich, fudgy, and decadent
                            treat. Order yours today.
                        </p>
                        <div className='
                        px-12 py-2 flex gap-4 overflow-x-scroll snap-x snap-mandatory sm:px-0 sm:grid sm:grid-cols-2'
                        >
                            {
                                brownies.map((brownie, index) => (
                                    <Image
                                        key={index}
                                        className={`
                                        w-72 h-96 object-cover flex-shrink-0 rounded-md snap-center 
                                        sm:w-full lg:w-96 ${brownie.overrides
                                        }`}
                                        src={brownie.src}
                                        alt='brownies'
                                        width={brownie.width}
                                        height={brownie.height}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-8 space-y-4 sm:space-y-0 sm:flex sm:gap-10 sm:mt-10'>
                        <h2 className='subtitle text-center sm:flex-1 sm:text-end sm:self-center'>
                        <span className='relative'>Our Prices<span className=' absolute inset-x-0 bottom-0 h-2
                        bg-secondary -z-10 opacity-30'/></span>
                        </h2>
                        <div className='sm:border-l sm:border-text sm:h-80'></div>
                        <div className='flex-1 text-center self-center text-sm sm:text-left lg:text-base'>
                            <ul className='space-y-1 mb-5'>
                                <li><span className='font-bold'>Pack of four: </span>AED 24</li>
                                <li><span className='font-bold'>Pack of six: </span>AED 36</li>
                                <li><span className='font-bold'>Pack of twelve: </span>AED 72</li>
                            </ul>
                            <a
                                className='btn btn-primary inline-block text-background'
                                href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram link'
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* cookies */}
                <section className='container'>
                    <div className='space-y-4'>
                        <h2 className='text-xs text-center'>
                            relish in&#xa0;
                            <span className='relative title'>The Cookies
                                <span className='
                                    absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4
                                '/>
                        </span>
                        </h2>
                        <p className='text-sm text-center text-gray-700 max-w-prose mx-auto lg:text-base'>
                            Indulge in our freshly baked cookies, crafted to perfection with the finest
                            ingredients. Each bite offers a delightful combination of crispy edges and a soft,
                            chewy center. Check our speciality Kinder chocolate chunk cookies. Or check in for our
                            seasonal flavors. Treat yourself today!
                        </p>
                        <div className='
                        px-12 py-2 flex gap-4 overflow-x-scroll snap-x snap-mandatory sm:px-0 sm:grid sm:grid-cols-2
                    '>
                            {
                                cookies.map((cookie, index) => (
                                    <Image
                                        key={index}
                                        className={`
                                        w-72 h-96 object-cover flex-shrink-0 rounded-md snap-center 
                                        sm:w-full lg:w-96 ${cookie.overrides
                                        }`}
                                        src={cookie.src}
                                        alt='cookies'
                                        width={cookie.width}
                                        height={cookie.height}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-8 space-y-4 sm:space-y-0 sm:flex sm:gap-10 sm:mt-10'>
                        <h2 className='subtitle text-center sm:flex-1 sm:text-end sm:self-center'>
                                <span className='relative'>Our Prices<span className=' absolute inset-x-0 bottom-0 h-2
                                bg-secondary -z-10 opacity-30'/></span>
                        </h2>
                        <div className='sm:border-l sm:border-text sm:h-80'></div>
                        <div className='flex-1 text-center self-center text-sm sm:text-left lg:text-base'>
                            <ul className='space-y-1 mb-5'>
                                <li><span className='font-bold'>Pack of four: </span>AED 20</li>
                                <li><span className='font-bold'>Pack of six: </span>AED 30</li>
                                <li><span className='font-bold'>Pack of twelve: </span>AED 60</li>
                            </ul>
                            <a
                                className='btn btn-primary inline-block text-background'
                                href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram link'
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* truffles */}
                <section className='container'>
                    <div className='space-y-4'>
                        <h2 className='text-xs text-center'>
                            indulge in&#xa0;
                            <span className='relative title'>The Truffles
                                <span
                                    className='absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4'/>
                                </span>
                        </h2>
                        <p className='text-sm text-center text-gray-700 max-w-prose mx-auto lg:text-base'>
                            Experience pure bliss with our handcrafted truffles, each a delightful burst of flavor.
                            Made with rich chocolate and infused with unique fillings, these decadent treats are
                            perfect for any occasion. Whether you prefer classic ganache or adventurous flavor
                            combinations, our truffles will satisfy your sweet cravings!
                        </p>
                        <div className='
                        px-12 py-2 flex gap-4 overflow-x-scroll snap-x snap-mandatory sm:px-0 sm:grid sm:grid-cols-2
                    '>
                            {
                                truffles.map((truffle, index) => (
                                    <Image
                                        key={index}
                                        className={`
                                        w-72 h-96 object-cover flex-shrink-0 rounded-md snap-center 
                                        sm:w-full lg:w-96 ${truffle.overrides
                                        }`}
                                        src={truffle.src}
                                        alt='truffles'
                                        width={truffle.width}
                                        height={truffle.height}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-8 space-y-4 sm:space-y-0 sm:flex sm:gap-10 sm:mt-10'>
                        <h2 className='subtitle text-center sm:flex-1 sm:text-end sm:self-center'>
                                <span className='relative'>Our Prices<span className=' absolute inset-x-0 bottom-0 h-2
                                bg-secondary -z-10 opacity-30'/></span>
                        </h2>
                        <div className='sm:border-l sm:border-text sm:h-80'></div>
                        <div className='flex-1 text-center self-center text-sm sm:text-left lg:text-base'>
                            <ul className='space-y-1 mb-5'>
                                <li><span className='font-bold'>Pack of four: </span>AED 16</li>
                                <li><span className='font-bold'>Pack of six: </span>AED 24</li>
                                <li><span className='font-bold'>Pack of twelve: </span>AED 48</li>
                            </ul>
                            <a
                                className='btn btn-primary inline-block text-background'
                                href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram link'
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* muffins */}
                <section className='container'>
                    <div className='space-y-4'>
                        <h2 className='text-xs text-center'>
                            leave with&#xa0;
                            <span className='relative title'>The Muffins
                                <span className='
                                    absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4
                                '/>
                        </span>
                        </h2>
                        <p className='text-sm text-center text-gray-700 max-w-prose mx-auto lg:text-base'>
                            Start your day off right with our scrumptious muffins, baked to golden perfection.
                            Fluffy and moist, they come in a variety of flavors: blueberry and chocolate chip.
                            Perfect for breakfast or a snack, grab one (or two) and enjoy the goodness in every
                            bite!
                        </p>
                        <div className='
                        px-12 py-2 flex gap-4 overflow-x-scroll snap-x snap-mandatory sm:px-0 sm:grid sm:grid-cols-2
                    '>
                            {
                                muffins.map((muffin, index) => (
                                    <Image
                                        key={index}
                                        className={`
                                        w-72 h-96 object-cover flex-shrink-0 rounded-md snap-center 
                                        sm:w-full lg:w-96 ${muffin.overrides
                                        }`}
                                        src={muffin.src}
                                        alt='muffins'
                                        width={muffin.width}
                                        height={muffin.height}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-8 space-y-4 sm:space-y-0 sm:flex sm:gap-10 sm:mt-10'>
                        <h2 className='subtitle text-center sm:flex-1 sm:text-end sm:self-center'>
                                <span className='relative'>Our Prices<span className=' absolute inset-x-0 bottom-0 h-2
                                bg-secondary -z-10 opacity-30'/></span>
                        </h2>
                        <div className='sm:border-l sm:border-text sm:h-80'></div>
                        <div className='flex-1 text-center self-center text-sm sm:text-left lg:text-base'>
                            <ul className='space-y-1 mb-5'>
                                <li><span className='font-bold'>Pack of four: </span>AED 35</li>
                                <li><span className='font-bold'>Pack of six: </span>AED 70</li>
                                <li><span className='font-bold'>Pack of twelve: </span>AED 100</li>
                            </ul>
                            <a
                                className='btn btn-primary inline-block text-background'
                                href='https://www.instagram.com/_sl_sweets?igsh=Zzdxdmk3ajVqMXEw'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram link'
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Footer/>
        </>
    );
};

export default Page;