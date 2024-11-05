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
        id: 'CHE123',
        type: 'cheesecakes',
        name: 'blueberry cheesecake',
        description: 'A rich, creamy cheesecake topped with a luscious blueberries.',
        img: { src: '/static/cheesecakes/cheesecake4.jpg', width: 2722, height: 4083, overrides: '' },
        options: cheesecakeOptions
    },
    {
        id:'CHE234',
        type: 'cheesecakes',
        name: 'raspberry cheesecake',
        description: 'Smooth cheesecake paired with a tangy raspberry topping for a refreshing bite.',
        img: { src: '/static/cheesecakes/cheesecake1.jpg', width: 5792, height: 8513, overrides: 'object-bottom' },
        options: cheesecakeOptions
    },
    {
        id: 'CHE345',
        type: 'cheesecakes',
        name: 'strawberry cheesecake',
        description: 'Classic cheesecake topped with fresh strawberries and a hint of sweetness.',
        img: { src: '/static/cheesecakes/cheesecake6.jpg', width: 1200, height: 1800, overrides: 'object-bottom' },
        options: cheesecakeOptions
    },
    {
        id: 'CHE456',
        type: 'cheesecakes',
        name: 'salted caramel cheesecake',
        description: 'Indulgent cheesecake drizzled with rich salted caramel for a perfect balance.',
        img: { src: '/static/cheesecakes/cheesecake3.jpg', width: 2592, height: 3456, overrides: '' },
        options: cheesecakeOptions
    },
    {
        id: 'CHE567',
        type: 'cheesecakes',
        name: 'lotus cheesecake',
        description: 'A creamy cheesecake with a buttery Lotus Biscoff crust and topping.',
        img: { src: '/static/cheesecakes/cheesecake5.jpg', width: 1200, height: 1500, overrides: '' },
        options: cheesecakeOptions
    }
];

export const brownies: product[] = [
    {
        id: 'BRO678',
        type: 'brownies',
        name: 'fudgy brownies',
        description: 'Dense and gooey brownies with a rich chocolate flavor in every bite.',
        img: { src: '/static/brownies/brownies2.jpg', width: 2466, height: 3648, overrides: 'object-right' },
        options: brownieOptions
    }
];

export const cookies: product[] = [
    {
        id: 'COO789',
        type: 'cookies',
        name: 'marshmallow chocolate chip cookies',
        description: 'Soft cookies with gooey marshmallow and chocolate chunks throughout.',
        img: { src: '/static/cookies/cookies4.jpg', width: 2560, height: 2228, overrides: '' },
        options: cookieOptions
    },
    {
        id: 'COO890',
        type: 'cookies',
        name: 'oatmeal raisin cookies',
        description: 'Chewy oatmeal cookies with a hint of cinnamon and sweet raisins.',
        img: { src: '/static/cookies/cookies1.jpg', width: 7940, height: 7756, overrides: '' },
        options: cookieOptions
    },
    {
        id: 'COO901',
        type: 'cookies',
        name: 'kinder cookies',
        description: 'Deliciously soft cookies filled with creamy Kinder chocolate.',
        img: { src: '/static/cookies/cookies2.jpg', width: 768, height: 1024, overrides: '' },
        options: cookieOptions
    }
];

export const truffles: product[] = [
    {
        id: 'TRU012',
        type: 'truffles',
        name: 'white truffles',
        description: 'Delicate white chocolate truffles with a smooth, creamy center.',
        img: { src: '/static/truffles/truffles5.jpg', width: 650, height: 792, overrides: '' },
        options: truffleOptions
    },
    {
        id: 'TRU123',
        type: 'truffles',
        name: 'dark chocolate truffles',
        description: 'Decadent dark chocolate truffles with a rich, intense flavor.',
        img: { src: '/static/truffles/truffles3.jpg', width: 1000, height: 1500, overrides: '' },
        options: truffleOptions
    },
    {
        id: 'TRU234',
        type: 'truffles',
        name: 'milk truffles',
        description: 'Creamy milk chocolate truffles with a melt-in-your-mouth texture.',
        img: { src: '/static/truffles/truffles1.jpg', width: 1200, height: 1200, overrides: '' },
        options: truffleOptions
    }
];

export const muffins: product[] = [
    {
        id: 'MUF345',
        type: 'muffins',
        name: 'blueberry muffins',
        description: 'Moist muffins bursting with fresh blueberries in every bite.',
        img: { src: '/static/muffins/muffin3.jpg', width: 1200, height: 1800, overrides: '' },
        options: muffinOptions
    },
    {
        id: 'MUF456',
        type: 'muffins',
        name: 'raspberry muffins',
        description: 'Sweet and tangy raspberry muffins, perfect for a fruity treat.',
        img: { src: '/static/muffins/muffin5.jpg', width: 1200, height: 1500, overrides: '' },
        options: muffinOptions
    },
    {
        id: 'MUF567',
        type: 'muffins',
        name: 'chocolate chip muffins',
        description: 'Soft and fluffy muffins loaded with rich chocolate chips.',
        img: { src: '/static/muffins/muffin2.jpg', width: 1005, height: 1256, overrides: '' },
        options: muffinOptions
    }
];

export const allProducts: product[] = [...cheesecakes, ...brownies, ...cookies, ...truffles, ...muffins];