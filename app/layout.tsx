import type {Metadata} from 'next';
import {Lora, Open_Sans, Bricolage_Grotesque} from 'next/font/google';
import './globals.css';
import React from 'react';

const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora',
    display: 'swap'
});

const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-open-sans',
    display: 'swap'
});

const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ['latin'],
    variable: '--font-bricolage-grotesque',
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'SLSweets',
    description: 'Fresh home baked goods and treats in the UAE delivered right to your door'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang='en'>
            <body className={`${lora.variable} ${openSans.variable} ${bricolageGrotesque.variable}`}>
                {children}
            </body>
        </html>
    );
}
