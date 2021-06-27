import Terms from "../containers/terms-of-service"
import { Storefront } from "../context/shopify"

export default function TermsOfService() {
	return <Terms />
}

export async function getServerSideProps() {
	const res = await Storefront.collection.fetchAll()

	return { props: { collections: JSON.parse(JSON.stringify(res)) } }
}
