import { Storefront } from "../context/shopify"
import PrivacyContainer from "../containers/privacy-policy"

export default function Privacy() {
	return <PrivacyContainer />
}

export async function getServerSideProps() {
	const res = await Storefront.collection.fetchAll()

	return { props: { collections: JSON.parse(JSON.stringify(res)) } }
}
