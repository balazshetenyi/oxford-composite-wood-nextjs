import { SubscribeContainer } from "../../containers/subscribe"
import { ProductsContainer } from "../../containers/products"
import { Storefront } from "../../context/shopify"

export default function Products({ collections }) {
	console.log(collections)
	return (
		<>
			<ProductsContainer collections={collections} />
			<SubscribeContainer />
		</>
	)
}

export async function getServerSideProps() {
	const res = await Storefront.collection.fetchAllWithProducts()

	return { props: { collections: JSON.parse(JSON.stringify(res)) } }
}
