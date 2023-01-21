/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            display: ["Sofia Sans Extra Condensed"],
        },
        extend: {
            animation: {
                "slide-down": "slide-down 1s",
                appear: "appear 1s",
            },
            keyframes: {
                "slide-down": {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(0%)" },
                },
                appear: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
