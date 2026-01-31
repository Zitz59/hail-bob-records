import localFont from "next/font/local";

export const hailBobFont = localFont({
    src: [
        {
            path: '../public/fonts/IBMPlexMono-Medium.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/Inter-VariableFont.ttf',
            weight: '700',
            style: 'bold'
        },
    ],
    variable: '--font-hail-bob',
    display: 'swap',
})