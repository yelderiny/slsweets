export type img = {
    src: string;
    width: number;
    height: number;
    overrides: string;
}

export type speciality = img & {
    description: string;
    price: number;
    section: string;
};