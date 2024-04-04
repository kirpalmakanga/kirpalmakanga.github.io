/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

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
            primary: '#171e42',
        },
        fontFamily: {
            primary: ['Jaapokki', 'sans-serif'],
            secondary: ['Kontanter', 'sans-serif'],
        },
    },
};
