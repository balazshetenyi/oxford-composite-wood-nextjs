import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import { ShopContextProvider } from "../context/shopContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (
		<ShopContextProvider>
			<HeaderContainer />
			<Component {...pageProps} />
			<FooterContainer />
		</ShopContextProvider>
	)
}

export default MyApp
