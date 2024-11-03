import {product} from '@/types/product';

export const cheesecakeOptions = [
    { description: 'Single serve', price: 20 },
    { description: 'Pack of four', price: 20 },
    { description: 'Pack of six', price: 30 },
    { description: 'Pack of twelve', price: 60 },
    { description: '1kg medium cake', price: 70 },
    { description: '2kg large cake', price: 140 }
];
export const brownieOptions = [
    { description: 'Pack of four', price: 24 },
    { description: 'Pack of six', price: 36 },
    { description: 'Pack of twelve', price: 72 }
];
export const cookieOptions = [
    { description: 'Pack of four', price: 20 },
    { description: 'Pack of six', price: 30 },
    { description: 'Pack of twelve', price: 60 }
];
export const truffleOptions = [
    { description: 'Pack of four', price: 16 },
    { description: 'Pack of six', price: 24 },
    { description: 'Pack of twelve', price: 48 }
];
export const muffinOptions = [
    { description: 'Single serve', price: 35 },
    { description: 'Pack of four', price: 70 },
    { description: 'Pack of six', price: 100 }
];

export const cheesecakes: product[] = [
    {
        type: 'cheesecakes',
        name: 'blueberry cheesecake',
        img: {
            src: '/static/cheesecakes/cheesecake4.jpg',
            width: 2722,
            height: 4083,
            overrides: ''
        },
        options: cheesecakeOptions
    },
    {
        type: 'cheesecakes',
        name: 'raspberry cheesecake',
        img: {
            src: '/static/cheesecakes/cheesecake1.jpg',
            width: 5792,
            height: 8513,
            overrides: 'object-bottom'
        },
        options: cheesecakeOptions
    },
    {
        type: 'cheesecakes',
        name: 'strawberry cheesecake',
        img: {
            src: '/static/cheesecakes/cheesecake6.jpg',
            width: 1200,
            height: 1800,
            overrides: 'object-bottom'
        },
        options: cheesecakeOptions
    },
    {
        type: 'cheesecakes',
        name: 'salted caramel cheesecake',
        img: {
            src: '/static/cheesecakes/cheesecake3.jpg',
            width: 2592,
            height: 3456,
            overrides: ''
        },
        options: cheesecakeOptions
    },
    {
        type: 'cheesecakes',
        name: 'lotus cheesecake',
        img: {
            src: '/static/cheesecakes/cheesecake5.jpg',
            width: 1200,
            height: 1500,
            overrides: ''
        },
        options: cheesecakeOptions
    }
];

export const brownies: product[] = [
    {
        type: 'brownies',
        name: 'fudgy brownies',
        img: {
            src: '/static/brownies/brownies2.jpg',
            width: 2466,
            height: 3648,
            overrides: 'object-right'
        },
        options: brownieOptions
    }
];


export const cookies: product[] = [
    {
        type: 'cookies',
        name: 'marshmallow chocolate chip cookies',
        img: {
            src: '/static/cookies/cookies4.jpg',
            width: 2560,
            height: 2228,
            overrides: ''
        },
        options: cookieOptions
    },
    {
        type: 'cookies',
        name: 'oatmeal raisin cookies',
        img: {
            src: '/static/cookies/cookies1.jpg',
            width: 7940,
            height: 7756,
            overrides: ''
        },
        options: cookieOptions
    },
    {
        type: 'cookies',
        name: 'kinder cookies',
        img: {
            src: '/static/cookies/cookies2.jpg',
            width: 768,
            height: 1024,
            overrides: ''
        },
        options: cookieOptions
    }
];

export const truffles: product[] = [
    {
        type: 'truffles',
        name: 'white truffles',
        img: {
            src: '/static/truffles/truffles5.jpg',
            width: 650,
            height: 792,
            overrides: ''
        },
        options: truffleOptions
    },
    {
        type: 'truffles',
        name: 'dark chocolate truffles',
        img: {
            src: '/static/truffles/truffles3.jpg',
            width: 1000,
            height: 1500,
            overrides: ''
        },
        options: truffleOptions
    },
    {
        type: 'truffles',
        name: 'milk truffles',
        img: {
            src: '/static/truffles/truffles1.jpg',
            width: 1200,
            height: 1200,
            overrides: ''
        },
        options: truffleOptions
    }
];

export const muffins: product[] = [
    {
        type: 'muffins',
        name: 'blueberry muffins',
        img: {
            src: '/static/muffins/muffin3.jpg',
            width: 1200,
            height: 1800,
            overrides: ''
        },
        options: muffinOptions
    },
    {
        type: 'muffins',
        name: 'raspberry muffins',
        img: {
            src: '/static/muffins/muffin5.jpg',
            width: 1200,
            height: 1500,
            overrides: ''
        },
        options: muffinOptions
    },
    {
        type: 'muffins',
        name: 'chocolate chip muffins',
        img: {
            src: '/static/muffins/muffin2.jpg',
            width: 1005,
            height: 1256,
            overrides: ''
        },
        options: muffinOptions
    }
];