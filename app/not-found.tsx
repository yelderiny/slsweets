'use client';

import Image from 'next/image';
import Header from '@/components/header.client';
import MobileNav from '@/components/mobile-nav.client';
import {useRouter} from 'next/navigation';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function NotFound() {
    const router = useRouter();

    return (
        <>
            <Header override={true}/>
            <MobileNav/>

            <div className='container flex flex-col md:flex-row-reverse justify-center align-center text-center
                md:text-left min-h-screen md:min-h-fit space-y-6 md:space-y-0 md:space-x-8 p-4 md:mt-52'>
                <h1 className='text-5xl font-bold md:hidden'>Oops!</h1>

                <Image
                    className='mx-auto w-32 h-32 md:w-52 md:h-[26rem] md:-translate-y-16'
                    src={useMediaQuery('(min-width: 768px)') ? '/static/error2.png' : '/static/error.png'}
                    alt={useMediaQuery('(min-width: 768px)') ? 'ice cream drawing' : 'cheesecake drawing'}
                    width={useMediaQuery('(min-width: 768px)') ? 3990 : 500}
                    height={useMediaQuery('(min-width: 768px)') ? 8000 : 500}
                />

                <div>
                    <h1 className='text-5xl font-bold hidden md:block'>Oops!</h1>
                    <h2 className='text-2xl font-semibold md:mt-10'>Page Not Found</h2>
                    <p className='max-w-prose md:text-xl md:mt-2'>
                        We can&apos;t seem to find what you&apos;re looking for.
                    </p>
                    <button className='btn btn-primary mt-10' onClick={() => router.back()}>
                        Go Back
                    </button>
                </div>
            </div>
        </>
    );
}