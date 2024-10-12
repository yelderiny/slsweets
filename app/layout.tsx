import type {Metadata} from 'next';
import {Montserrat, Satisfy} from 'next/font/google';
import './globals.css';
import React from 'react';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap'
});

const satisfy  = Satisfy({
    subsets: ['latin'],
    variable: '--font-satisfy',
    weight: ['400']
});

export const metadata: Metadata = {
    title: 'SLSweets',
    description: 'Fresh home baked goods and treats in the UAE delivered right to your door'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang='en'>
            <body className={`${montserrat.variable} ${satisfy.variable}`}>
                {children}
            </body>
        </html>
    );
}
