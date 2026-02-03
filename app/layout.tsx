import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Layout from "@/app/components/Layout/Layout";
import {hailBobFont} from "@/app/fonts";

//TODO:не работает открытие сайдбара по нажатию на бургер меню - починить
//TODO:Добавить OpenGraph preview на сайт для preview GitHub!


//📸 Вариант 2 — более красивый (через Figma)
//
// Создай новый фрейм 1200×630.
//
// Вставь туда скрин сайта.
//
// Сверху прозрачная черная заливка 20–40%.
//
// Большим текстом напиши:
//
// Hail Bob Records
//
// Next.js • Tailwind • Motion
//
// Сохрани как PNG → preview.png.

//hail-bob-records/
//   public/
//     preview.png
//   app/
//   package.json


//![Hail Bob Records Preview](public/preview.png)

	`export const metadata = {
  title: 'Hail Bob Records',
  description: 'Interactive music label website built with Next.js and Tailwind.',
  openGraph: {
    title: 'Hail Bob Records',
    description: 'Interactive music label website built with Next.js and Tailwind.',
    url: 'https://hail-bob-records.pages.dev/',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Hail Bob Records Preview',
      },
    ],
  },
};
`

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://hailbobrecords.com/"),
	title: "Hail Bob Records",
	description: "Hail Bob Records is an independent label focused on house, electro, techno, and industrial, releasing digital music and cassette editions rooted in underground culture.",
	icons: {
		icon: [
			{url: "/favicon-light.png", media: "(prefers-color-scheme: light)"},
			{url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)"}
		]
	},
	openGraph: {
		title: "Hail Bob Records",
		description: "Hail Bob Records is an independent label focused on house, electro, techno, and industrial, releasing digital music and cassette editions rooted in underground culture.",
		url: "https://hailbobrecords.com/",
		siteName: "Hail Bob Records",
		images: [
			{
				url: "/og-hail-bob.png",
				width: 1200,
				height: 630,
				alt: "Hail Bob Records",
			},
		],
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "Hail Bob Records",
		description: "Chemical house for sad earth residents.",
		images: ["/og-hail-bob.png"],
	},
};

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={hailBobFont.variable}>
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
		<Layout>{children}</Layout>
		</body>
		</html>
	);
}
