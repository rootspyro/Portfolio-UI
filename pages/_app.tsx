import Head from "next/head"
import Layout from "../components/layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas,fab);
import "../styles/global.css"
export default function App({Component, pageProps}){
	return(
		<>
			<Head>
				<title>root@spyro:~#</title>
			</Head>
			<Layout>
				<Component { ... pageProps } />
			</Layout>
		</>
	)
}
