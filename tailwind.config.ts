import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xs: '360px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                hailBob: ['var(--font-hail-bob)','sans-serif'],
            }
        },
    },
    plugins: [],
};

export default config;
