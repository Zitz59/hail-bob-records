import {AppProps} from "next/app";
import '../../styles/globals.css'
import Layout from "@/app/components/Layout/Layout";

export default function _app({Component, pageProps}: AppProps) {
	return (
		<>
				<Layout>
					<Component {...pageProps} />
				</Layout>
		</>

	)
}