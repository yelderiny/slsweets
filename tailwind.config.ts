import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '0.5rem'
            },
            fontFamily: {
                sans: ['var(--font-open-sans)'],
                serif: ['var(--font-lora)'],
                brico: ['var(--font-bricolage-grotesque)']
            },
            backgroundImage: {
                hero: 'url(\'/static/pastries.jpg\')'
            },
            colors: {
                'text': {
                    50: '#100d0a',
                    100: '#201b13',
                    200: '#3f3527',
                    300: '#5f503a',
                    400: '#7e6b4e',
                    500: '#9e8661',
                    600: '#b19e81',
                    700: '#c5b6a0',
                    800: '#d8cec0',
                    900: '#ece7df',
                    950: '#f5f3ef',
                },
                'background': {
                    50: '#0f0d0a',
                    100: '#1f1a14',
                    200: '#3d3329',
                    300: '#5c4d3d',
                    400: '#7a6652',
                    500: '#998066',
                    600: '#ad9985',
                    700: '#c2b3a3',
                    800: '#d6ccc2',
                    900: '#ebe6e0',
                    950: '#f5f2f0',
                },
                'primary': {
                    50: '#100e0a',
                    100: '#201c13',
                    200: '#3f3727',
                    300: '#5f533a',
                    400: '#7e6f4e',
                    500: '#9e8b61',
                    600: '#b1a281',
                    700: '#c5b9a0',
                    800: '#d8d0c0',
                    900: '#ece8df',
                    950: '#f5f3ef',
                },
                'secondary': {
                    50: '#0a0a10',
                    100: '#14141f',
                    200: '#27293f',
                    300: '#3b3d5e',
                    400: '#4f527d',
                    500: '#62669d',
                    600: '#8285b0',
                    700: '#a1a3c4',
                    800: '#c0c2d8',
                    900: '#e0e0eb',
                    950: '#eff0f5',
                },
                'accent': {
                    50: '#0f0a10',
                    100: '#1f141f',
                    200: '#3d273f',
                    300: '#5c3b5e',
                    400: '#7a4f7d',
                    500: '#99629d',
                    600: '#ad82b0',
                    700: '#c2a1c4',
                    800: '#d6c0d8',
                    900: '#ebe0eb',
                    950: '#f5eff5',
                },
            },

        }
    },
    plugins: []
};
export default config;
