/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

export default {
    mode: 'jit',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            ...colors,
            primary: {
                '50': '#f0f5fe',
                '100': '#dee8fb',
                '200': '#c4d8f9',
                '300': '#9bbff5',
                '400': '#6c9dee',
                '500': '#497ae8',
                '600': '#345edc',
                '700': '#2b4aca',
                '800': '#293ea4',
                '900': '#263882',
                '950': '#171e42',
            },
        },
        fontFamily: {
            primary: ['Jaapokki', 'sans-serif'],
            secondary: ['Kontanter', 'sans-serif'],
        },
    },
};
