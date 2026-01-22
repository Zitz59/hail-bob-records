import localFont from "next/font/local";

export const hailBobFont = localFont({
    src: [
        {
            path: '../public/fonts/RolandTR808.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/RolandTR808.woff',
            weight: '700',
            style: 'normal'
        },
    ],
    variable: '--font-hail-bob',
    display: 'swap',
})