'use client'

import React from 'react';
import {useAppContext} from '@/app/context';
import {LiaTimesSolid} from 'react-icons/lia';
import {IoIosAdd, IoIosRemove} from "react-icons/io";


const Cart = () => {
    const {isCartOpen, toggleCart, cart, setCart} = useAppContext();

    const handleQuantityChange = (itemIndex: number, delta: number) =>
        setCart(prevItems => prevItems.map((currItem, currIndex) =>
            currIndex === itemIndex ? {...currItem, quantity: Math.max(1, currItem.quantity + delta)} : currItem))


    return (
        <div
            className={`
            fixed inset-y-0 right-0 bg-background z-30 transition-all duration-100 md:duration-200 ease-linear w-full
            ${isCartOpen ? 'opacity-100 pointer-events-auto md:translate-x-0' : 'md:translate-x-full opacity-0 pointer-events-none'} 
            md:left-auto md:w-[45%] lg:w-[40%]
        `}
        >
            <div className='flex justify-between items-center px-4 pt-6 pb-2 text-3xl'>
                <h2>Cart</h2>
                <button
                    className='text-text'
                    aria-label='close menu'
                    onClick={toggleCart}
                >
                    <LiaTimesSolid/>
                </button>
            </div>
            <hr className='mx-4 border-t border-gray-300'/>
            {
                cart.length === 0 ?
                    <div className="flex items-center justify-center h-full text-xl">
                        Your cart is empty
                    </div> :
                    cart.map((item, index) => (
                        <div key={index} className="px-8 py-4 ">
                            <div className="flex justify-between">
                                <div className="w-2/3">
                                    <p className="capitalize font-medium text-base">
                                        {item.name}
                                    </p>
                                    <p className="text-xs">
                                        {item.description}
                                    </p>
                                    <p className="text-sm pt-2">
                                        AED {item.price}
                                    </p>
                                </div>
                                <p
                                    className="underline flex justify-center items-center
                                            hover:italic transition duration-500 ease-in-out text-xs"
                                    onClick={() => {
                                        setCart(prevItems => prevItems.filter((_, i) => i !== index))
                                    }}>
                                    Remove
                                </p>
                            </div>
                            <div className="flex items-center justify-around">
                                <IoIosRemove onClick={() => handleQuantityChange(index, -1)}/>
                                <div>
                                    {item.quantity}
                                </div>
                                <IoIosAdd onClick={() => handleQuantityChange(index, 1)}/>
                            </div>
                            <hr className='mx-8 border-t border-gray-200 my-2'/>
                        </div>
                    ))
            }
        </div>
    );
};

export default Cart;