import {img} from '@/types/img';

export type productOption = {
    description: string,
    price: number
};

export type product = {
    type: string,
    name: string,
    img: img,
    options: productOption[]
};

export type cartItem = product & productOption;