'use client';

import React, {useState} from 'react';
import Header from '@/components/header.client';
import MobileNav from '@/components/mobile-nav.client';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import { Unstable_NumberInput as NumberInput } from '@mui/base';
import {FaMinus, FaPlus} from 'react-icons/fa6';
import {brownieOptions, cheesecakeOptions, cookieOptions, muffinOptions, truffleOptions} from '@/app/lib/data/products';

const Page = () => {
    const searchParams = useSearchParams();

    const src = searchParams.get('src') as string;
    const name = searchParams.get('name') as string;
    const width = searchParams.get('width');
    const height = searchParams.get('height');
    const overrides = searchParams.get('overrides') as string;

    const productType = name.toLowerCase();

    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <Header override={true}/>
            <MobileNav/>
            <Image
                src={src}
                alt={name}
                width={Number(width)}
                height={Number(height)}
                className={`${overrides}`}
            />
            <h1 className='uppercase m-4'>{name}</h1>
            {
                productType.includes('cheesecake') ? (
                    <div className='space-y-0.5'>
                        {
                            cheesecakeOptions.map((option, index) => (
                                <div
                                    key={index} className='
                                        flex justify-between p-2 border rounded-md transition-colors duration-300 ease-in-out
                                        hover:bg-accent hover:border-primary
                                    '
                                >
                                    <p className='text-sm'>{option.description}</p>
                                    <p className='text-sm'>AED {option.price}</p>
                                </div>
                            ))
                        }
                    </div>
                ) : productType.includes('brownie') ? (
                    <div className='space-y-0.5'>
                        {
                            brownieOptions.map((option, index) => (
                                <div
                                    key={index} className='
                                        flex justify-between p-2 border rounded-md transition-colors duration-300 ease-in-out
                                        hover:bg-accent hover:border-primary
                                    '
                                >
                                    <p className='text-sm'>{option.description}</p>
                                    <p className='text-sm'>AED {option.price}</p>
                                </div>
                            ))
                        }
                    </div>
                ) : productType.includes('cookie') ? (
                    <div className='space-y-0.5'>
                        {
                            cookieOptions.map((option, index) => (
                                <div
                                    key={index} className='
                                        flex justify-between p-2 border rounded-md transition-colors duration-300 ease-in-out
                                        hover:bg-accent hover:border-primary
                                    '
                                >
                                    <p className='text-sm'>{option.description}</p>
                                    <p className='text-sm'>AED {option.price}</p>
                                </div>
                            ))
                        }
                    </div>
                ) : productType.includes('truffle') ? (
                    <div className='space-y-0.5'>
                        {
                            truffleOptions.map((option, index) => (
                                <div
                                    key={index} className='
                                        flex justify-between p-2 border rounded-md transition-colors duration-300 ease-in-out
                                        hover:bg-accent hover:border-primary
                                    '
                                >
                                    <p className='text-sm'>{option.description}</p>
                                    <p className='text-sm'>AED {option.price}</p>
                                </div>
                            ))
                        }
                    </div>
                ) : productType.includes('muffin') ? (
                    <div className='space-y-0.5'>
                        {
                            muffinOptions.map((option, index) => (
                                <div
                                    key={index} className='
                                        flex justify-between p-2 border rounded-md transition-colors duration-300 ease-in-out
                                        hover:bg-accent hover:border-primary
                                    '
                                >
                                    <p className='text-sm'>{option.description}</p>
                                    <p className='text-sm'>AED {option.price}</p>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>Product options not available.</p>
                )
            }
            <div className='flex gap-2 justify-center items-center'>
                {/* todo: fix the css for the input */}
                <NumberInput
                    value={quantity}
                    onChange={(_event, newValue) => setQuantity(newValue as number)}
                    slots={{
                        root: 'div',
                        input: 'input',
                        incrementButton: 'button',
                        decrementButton: 'button',
                    }}
                    slotProps={{
                        root: {
                            className: 'flex justify-center items-center'
                        },
                        input: {
                            className: 'text-sm'
                        },
                        incrementButton: {
                            children: <FaPlus className='text-base'/>,
                            className: 'text-sm'
                        },
                        decrementButton: {
                            children: <FaMinus className='text-base'/>,
                            className: 'text-sm'
                        }
                    }}

                />
            </div>


        </>
    );
};

export default Page;