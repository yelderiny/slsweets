import React from 'react';
import {useAppContext} from '@/app/context';
import {LiaTimesSolid} from 'react-icons/lia';


const Cart = () => {
    const { isCartOpen, toggleCart } = useAppContext();

    return (
        <div
            className={`
            fixed inset-0 bg-background z-30 opacity-0 pointer-events-none transition-opacity duration-100 ease-linear
             font-sans ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}
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
        </div>
    );
};

export default Cart;