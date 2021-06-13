import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<HeaderContainer />
			<Component {...pageProps} />
			<FooterContainer />
		</>
	)
}

export default MyApp
