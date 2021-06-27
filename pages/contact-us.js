import { ContactUsContainer } from "../containers/contact-us"
import { SubscribeContainer } from "../containers/subscribe"
import { Storefront } from "../context/shopify"

export default function ContactUs() {
	return (
		<>
			<ContactUsContainer />
			<SubscribeContainer />
		</>
	)
}

export async function getServerSideProps() {
	const res = await Storefront.collection.fetchAll()

	return { props: { collections: JSON.parse(JSON.stringify(res)) } }
}
