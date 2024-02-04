/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements-react/dist/js/**/*.js"
    ],
    theme: {
        extend: {},
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'title': ['Doctor who'],
            'display': ['Fontspace'],
            'body': ['Fontspace'],
        },
    },
    darkMode: "class",
    plugins: [require("tw-elements-react/dist/plugin.cjs")]
    }

