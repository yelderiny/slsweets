'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cart from '@/components/cart.client';
import Header from '@/components/header.client';
import Footer from '@/components/footer.client';
import MobileNav from '@/components/mobile-nav.client';
import {cheesecakes, brownies, cookies, truffles, muffins} from '@/app//lib/data/products';


const Page = () => {
    const menu = [
        { header: 'come for', products: cheesecakes },
        { header: 'stay for', products: brownies },
        { header: 'relish in', products: cookies },
        { header: 'indulge in', products: truffles },
        { header: 'leave with', products: muffins }
    ];
    return (
        <>
            <Header override={true}/>
            <MobileNav/>
            <Cart/>

            <main className='space-y-20 mt-24 lg:space-y-32 lg:mt-40 xl:mt-52'>
                {
                    menu.map((section, index) => (
                        <section key={index} id={section.products[0].type} className='container'>
                            <h2 className='text-xs text-center'>
                                {section.header}&#xa0;
                                <span className='relative title capitalize'>the {section.products[0].type}
                                    <span
                                        className='
                                        absolute inset-x-0 bottom-2 h-2 bg-secondary -z-10 opacity-30 lg:bottom-4
                                    '
                                    />
                                </span>
                            </h2>
                            <div className='flex flex-wrap justify-center gap-1 lg:gap-5 mt-8'>
                                {
                                    section.products.map((product, index) => (
                                        <Link
                                            key={index}
                                            className='p-4 rounded-md hover:cursor-pointer hover:shadow-lg'
                                            href={{
                                                pathname: `/menu/${product.name.toLowerCase().replace(/ /g, '-')}`,
                                                query: {
                                                    type: product.type,
                                                    name: product.name,
                                                    src: product.img.src,
                                                    width: product.img.width,
                                                    height: product.img.height,
                                                    overrides: product.img.overrides
                                                }
                                            }}
                                        >
                                            <Image
                                                key={index}
                                                className={`
                                                    w-32 h-52 sm:w-72 sm:h-96 lg:w-52 lg:h-72 xl:w-72 xl:h-96 object-cover 
                                                    rounded-md ${product.img.overrides}
                                                `}
                                                src={product.img.src}
                                                alt='cheesecake'
                                                width={product.img.width}
                                                height={product.img.height}
                                            />
                                            <p
                                                className='
                                                    text-xs sm:text-sm mt-2 uppercase max-w-32 sm:max-w-none lg:max-w-52
                                                    xl:max-w-none'
                                            >
                                                {product.name}
                                            </p>
                                            <p className='text-xs sm:text-sm lg:text-base mt-2'>
                                                from <strong className='text-secondary lg:text-base'>AED {section.products[0].options[0].price}</strong>
                                            </p>
                                            <p className='text-xs sm:text-sm underline underline-offset-2 mt-4'>
                                                See options
                                            </p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </section>
                    ))
                }
            </main>
            <Footer/>
        </>
    );
};

export default Page;