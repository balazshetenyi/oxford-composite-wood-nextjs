import { Storefront } from "../context/shopify"
import { SubscribeContainer } from "../containers/subscribe"
import { AboutContainer } from "../containers/about-us"

export default function About() {
	return (
		<>
			<AboutContainer />
			<SubscribeContainer />
		</>
	)
}

export async function getServerSideProps() {
	const res = await Storefront.collection.fetchAll()

	return { props: { collections: JSON.parse(JSON.stringify(res)) } }
}
