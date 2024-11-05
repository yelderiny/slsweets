import {img} from '@/types/img';

export type productOption = {
    description: string,
    price: number
};

export type product = {
    id: string,
    type: string,
    name: string,
    description: string,
    img: img,
    options: productOption[]
};

export type cartItem = Omit<product, 'options' | 'img' | 'description'> & productOption & { quantity: number };