import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import { ShopContextProvider } from "../context/shopContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	const productPages = pageProps?.collections
		? pageProps?.collections?.map((page) => page.title.toLowerCase().split(" ").join("-"))
		: ""

	return (
		<ShopContextProvider>
			<HeaderContainer productPages={productPages} />
			<Component {...pageProps} />
			<FooterContainer />
		</ShopContextProvider>
	)
}

export default MyApp
