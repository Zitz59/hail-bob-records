import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Layout from "@/app/components/Layout/Layout";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://hail-bob-records.pages.dev/"),
	title: "Hail Bob Records",
	description: "Chemical house for sad earth residents.",
	icons: {
		icon: [
			{url: "/favicon-light.png", media: "(prefers-color-scheme: light)"},
			{url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)"}
		]
	},
	openGraph: {
		title: "Hail Bob Records",
		description: "Chemical house for sad earth residents.",
		url: "https://hail-bob-records.pages.dev/",
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
		<html lang="en">
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
		<Layout>{children}</Layout>
		</body>
		</html>
	);
}
