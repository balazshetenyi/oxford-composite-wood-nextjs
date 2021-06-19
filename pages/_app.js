import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	const productPages = pageProps.collections.map((page) =>
		page.title.toLowerCase().split(" ").join("-")
	)
	console.log(pageProps)
	return (
		<>
			<HeaderContainer productPages={productPages} />
			<Component {...pageProps} />
			<FooterContainer />
		</>
	)
}

export default MyApp
