/** @type {import('tailwindcss').Config} */
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
};
