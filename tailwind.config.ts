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
                text: '#161413',
                background: '#fafaf9',
                primary: '#f4cfc3',
                secondary: '#ebac93',
                accent: '#ae8f84',
            },

        }
    },
    plugins: []
};
export default config;
