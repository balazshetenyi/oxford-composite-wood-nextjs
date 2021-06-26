import { Storefront } from "../context/shopify"
import { CartContainer } from "../containers/cart"

export default function Product() {
	return (
		<>
			<CartContainer />
		</>
	)
}

export async function getServerSideProps() {
	const res = await Storefront.collection.fetchAll()

	return { props: { collections: JSON.parse(JSON.stringify(res)) } }
}
