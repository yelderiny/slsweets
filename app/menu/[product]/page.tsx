'use client';

import Image from 'next/image';
import React, {useState} from 'react';
import {useAppContext} from '@/app/context';
import {productOption} from '@/types/product';
import Header from '@/components/header.client';
import {FaMinus, FaPlus} from 'react-icons/fa6';
import MobileNav from '@/components/mobile-nav.client';
import {useRouter, useSearchParams} from 'next/navigation';
import {brownieOptions, cheesecakeOptions, cookieOptions, muffinOptions, truffleOptions} from '@/app/lib/data/products';

const Page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const {setCart, toggleCart} = useAppContext()

    const type = searchParams.get('type') || '';
    const name = searchParams.get('name') || '';

    const [quantity, setQuantity] = useState(1);
    const [chosenOption, setChosenOption] = useState<productOption | null>(null);

    const productType: productOption[] = {
        cheesecakes: cheesecakeOptions,
        brownies: brownieOptions,
        cookies: cookieOptions,
        truffles: truffleOptions,
        muffins: muffinOptions
    }[type] || [];

    const addToCart = () => {
        setCart(prevState => [...prevState, {
            type: type,
            name: name,
            description: chosenOption?.description || '',
            price: chosenOption?.price || 0
        }]);

        router.push('/menu');
        toggleCart();
    }

    const handleQuantityChange = (delta: number) => setQuantity(prev => Math.max(1, prev + delta));

    return (
        <>
            <Header override={true}/>
            <MobileNav/>
            <Image
                src={searchParams.get('src') as string}
                alt={name}
                width={Number(searchParams.get('width'))}
                height={Number(searchParams.get('height'))}
                className={searchParams.get('overrides') || ''}
            />
            <h1 className='uppercase m-4'>{name}</h1>
            <div className='p-4 space-y-1'>
                {
                    productType.map((option, index) => (
                        <div
                            key={index}
                            className={`
                                flex justify-between p-2 border rounded-md transition-colors duration-300 ease-in-out
                                hover:bg-accent hover:border-primary cursor-pointer ${chosenOption === option ? 'bg-primary border-primary' : ''} 
                            `}
                            onClick={() => setChosenOption(option)}
                        >
                            <p className='text-sm'>{option.description}</p>
                            <p className='text-sm'>AED {option.price}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center items-center mt-8 gap-5'>
                <button onClick={() => handleQuantityChange(-1)}>
                    <FaMinus className='text-sm'/>
                </button>
                <input
                    type='number'
                    className='text-center text-base font-medium px-2 py-1 w-20 bg-transparent pointer-events-none'
                    value={quantity}
                    min={1}
                    readOnly
                />
                <button onClick={() => handleQuantityChange(1)}>
                    <FaPlus className='text-sm'/>
                </button>
            </div>
            <hr className='my-3 border-t border-black w-5/6 mx-auto'/>
            <div className='flex justify-center my-4'>
                <button onClick={addToCart} className={`btn w-1/2 ${!chosenOption ? 'bg-gray-200 text-gray-400 pointer-events-none' : 'btn-primary'}`}>
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default Page;