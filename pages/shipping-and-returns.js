import ShippingContainer from "../containers/shipping-and-returns"
import { Storefront } from "../context/shopify"

export default function Shipping() {
	return <ShippingContainer />
}

export async function getServerSideProps() {
	const res = await Storefront.collection.fetchAll()

	return { props: { collections: JSON.parse(JSON.stringify(res)) } }
}
