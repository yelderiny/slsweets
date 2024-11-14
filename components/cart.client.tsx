'use client';

import Link from 'next/link';
import React, {useEffect, useMemo} from 'react';
import {useAppContext} from '@/app/context';
import {LiaTimesSolid} from 'react-icons/lia';
import {IoIosAdd, IoIosRemove} from 'react-icons/io';


const Cart = () => {
    const {isCartOpen, toggleCart, cart, setCart} = useAppContext();

    const subtotal = useMemo(() =>
            cart.reduce((total, item) => total + item.price * item.quantity, 0),
        [cart]
    );

    useEffect(() => {
        document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
    }, [isCartOpen]);

    const handleQuantityChange = (index: number, delta: number) =>
        setCart(prevItems =>
            prevItems.map((item, i) =>
                i === index ? {...item, quantity: Math.max(1, item.quantity + delta)} : item
            )
        );

    const handleRemoveItem = (index: number) =>
        setCart(prevItems => prevItems.filter((_, i) => i !== index));

    return (
        <div
            className={`
            fixed inset-y-0 right-0 bg-background z-30 transition-all duration-100 md:duration-200 ease-linear w-full
            ${isCartOpen ? 'opacity-100 pointer-events-auto md:translate-x-0' : 'md:translate-x-full opacity-0 pointer-events-none'} 
            md:left-auto md:w-[45%] lg:w-[40%]
        `}
        >
            <div className='flex justify-between items-center mx-4 mt-6 mb-2 text-3xl'>
                <h2>Cart</h2>
                <button className='text-text' aria-label='close menu' onClick={toggleCart}>
                    <LiaTimesSolid/>
                </button>
            </div>
            <hr className='mx-4 border-t border-gray-300'/>
            {
                cart.length === 0 ?
                    <div className='flex items-center justify-center h-full text-xl'>
                        Your cart is empty
                    </div> :
                    <>
                        <div className='overflow-y-auto h-2/3 mx-8'>
                            {
                                cart.map((item, index) => (
                                    <div key={index} className='my-4'>
                                        <div className='flex justify-between'>
                                            <div className='w-2/3'>
                                                <p className='capitalize font-medium text-base'>{item.name}</p>
                                                <p className='text-xs mt-1'>{item.description}</p>
                                                <p className='text-xs mt-4'>AED {item.price}</p>
                                            </div>
                                            <p
                                                className='flex justify-center items-center text-xs cursor-pointer underline
                                                hover:underline'
                                                onClick={() => handleRemoveItem(index)}
                                            >
                                                Remove
                                            </p>
                                        </div>
                                        <div className='flex justify-center items-center gap-8'>
                                            <IoIosRemove
                                                className='cursor-pointer'
                                                onClick={() => handleQuantityChange(index, -1)}
                                            />
                                            <div>{item.quantity}</div>
                                            <IoIosAdd
                                                className='cursor-pointer'
                                                onClick={() => handleQuantityChange(index, 1)}
                                            />
                                        </div>
                                        <hr className='mx-8 my-2 border-t border-gray-200'/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='absolute bottom-0 flex flex-col items-center my-4 w-full cursor-pointer'>
                            <p className="text-right w-full px-8 my-4">
                                <strong className="font-medium">Subtotal</strong> AED {subtotal}
                            </p>
                            <Link href='/checkout'>
                                <button className='btn btn-primary'>Checkout</button>
                            </Link>
                        </div>
                    </>
            }
        </div>
    );
};

export default Cart;