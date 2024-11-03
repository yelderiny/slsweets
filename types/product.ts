import {img} from '@/types/img';

export type product = {
    type: string,
    name: string,
    img: img,
    options: { description: string, price: number }[]
}