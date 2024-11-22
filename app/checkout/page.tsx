'use client';

import Cart from '@/components/cart.client';
import {useAppContext} from '@/app/context';
import Header from '@/components/header.client';
import {FormEvent, useEffect, useState} from 'react';
import MobileNav from '@/components/mobile-nav.client';

const Page = () => {
    const { cart } = useAppContext();
    const [phone, setPhone] = useState('');
    const [altPhone, setAltPhone] = useState('');
    const [hasWhatsapp, setHasWhatsapp] = useState(false);
    const [email, setEmail] = useState('');
    const [expectedDate, setExpectedDate] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const formIsValid =
            phone !== '' &&
            validatePhone(phone) &&
            email !== '' &&
            validateEmail(email) &&
            expectedDate !== '' &&
            (altPhone === '' || validatePhone(altPhone)) &&
            Object.values(errors).every(error => !error);

        setIsFormValid(formIsValid);
    }, [phone, altPhone, email, expectedDate, errors]);

    const validatePhone = (value: string): boolean => {
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return phoneRegex.test(value);
    };

    const validateEmail = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    // Function to get today's date in YYYY-MM-DD format
    const getTodayDate = (): string => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero
        const day = String(today.getDate()).padStart(2, '0'); // Add leading zero
        return `${year}-${month}-${day}`;
    };

    // Function to calculate the max date, two months from today
    const getMaxDate = (): string => {
        const today = new Date();
        today.setMonth(today.getMonth() + 2); // Add 2 months
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero
        const day = String(today.getDate()).padStart(2, '0'); // Add leading zero
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: boolean } = {};

        if (!phone || !validatePhone(phone)) newErrors.phone = true;
        if (altPhone && !validatePhone(altPhone)) newErrors.altPhone = true;
        if (!email || !validateEmail(email)) newErrors.email = true;
        if (!expectedDate) newErrors.expectedDate = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // todo: send an email to Shosho with the details of the order here
            console.log('Form submitted');
        }
    };

    return (
        <>
            <Header follow={false}/>
            <MobileNav/>
            <Cart/>

            <main className='container mt-4'>
                <div className='flex justify-between items-center'>
                    <button className='text-sm underline underline-offset-2 hover:no-underline'>Cart Summary</button>
                    <button className='text-sm underline underline-offset-2 hover:no-underline'>Total {cart.length} items</button>
                </div>
                <h1 className='text-lg font-semibold mt-4'>Here&apos;s what&apos;s going to happen</h1>
                <p className='text-sm mt-2'>
                    We only support <strong>pick up</strong> right now. After we ask you for your info, we will get in
                    touch with you using your details. We&apos;ll discuss your needs and make sure that you get your
                    order at a time that works for you.
                </p>
                <hr className='m-4 border-t border-gray-300'/>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
                    <label className='text-sm uppercase block mt-4 pl-2'>Phone Numbers*</label>
                    <input
                        type='text'
                        className={`text-sm bg-background border-b-2 p-2 focus:outline-none focus:border-primary ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder='Primary phone number'
                        value={phone}
                        onChange={e => {
                            setPhone(e.target.value);
                            setErrors({ ...errors, phone: false });
                        }}
                        onBlur={() => setErrors({ ...errors, phone: !validatePhone(phone) })}
                    />
                    <input
                        type='text'
                        className={`text-sm bg-background border-b-2 p-2 focus:outline-none focus:border-primary mt-2 ${errors.altPhone ? 'border-red-500' : ''}`}
                        placeholder='Alternative phone number'
                        value={altPhone}
                        onChange={e => {
                            setAltPhone(e.target.value);
                            setErrors({ ...errors, altPhone: false });
                        }}
                        onBlur={() => setErrors({ ...errors, altPhone: altPhone !== '' && !validatePhone(altPhone) })}
                    />
                    <label className='text-sm uppercase block mt-8 pl-2'>Do you have WhatsApp on either number?</label>
                    <div className='flex items-center mt-2 pl-2'>
                        <input
                            type='checkbox'
                            className='mr-2'
                            checked={hasWhatsapp}
                            onChange={() => setHasWhatsapp(!hasWhatsapp)}
                        />
                        <p className='text-sm'>Yes, I have WhatsApp</p>
                    </div>
                    <label className='text-sm uppercase block mt-8 pl-2'>e-Mail*</label>
                    <input
                        type='email'
                        className={`text-sm bg-background border-b-2 p-2 focus:outline-none focus:border-primary ${errors.email ? 'border-red-500' : ''}`}
                        placeholder='e-Mail'
                        onChange={e => {
                            setEmail(e.target.value);
                            setErrors({ ...errors, email: false });
                        }}
                        onBlur={() => setErrors({ ...errors, email: !validateEmail(email) })}
                    />
                    <label className='text-sm uppercase block mt-8 pl-2'>Pick up date*</label>
                    <input
                        type='date'
                        className={`text-sm bg-background border-b-2 p-2 focus:outline-none focus:border-primary ${errors.expectedDate ? 'border-red-500' : ''}`}
                        value={expectedDate}
                        min={getTodayDate()}
                        max={getMaxDate()}
                        onChange={e => {
                            setExpectedDate(e.target.value);
                            setErrors({ ...errors, expectedDate: false });
                        }}
                    />
                    <label className='text-sm uppercase block mt-8 pl-2'>Notes</label>
                    <textarea
                        className='text-sm bg-background border-b-2 p-2 focus:outline-none focus:border-primary'
                        placeholder='Any additional notes? (Allergies, preferences, etc.)'
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                    <button
                        type='submit'
                        className={`btn w-2/3 mx-auto text-sm m-8 ${!isFormValid ? `bg-gray-200 text-gray-400 pointer-events-none` : `btn-primary`}`}
                    >
                        Get in touch with me
                    </button>
                </form>
            </main>
        </>
    );
};

export default Page;