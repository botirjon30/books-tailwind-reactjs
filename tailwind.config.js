/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': '375px',
            'md': '768px',
            'lg': '992px',
            'xl': '1280px',
        },
        fontFamily: {
            'satisfy': ['Satisfy', 'cursive'],
        },
        extend: {},
    },
    plugins: [],
}
