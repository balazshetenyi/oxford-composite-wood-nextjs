import { Storefront } from "../../context/shopify"
import { SubscribeContainer } from "../../containers/subscribe"
import { CategoryContainer } from "../../containers/categoryContainer"

export default function Products({ collections }) {
	return (
		<>
			<CategoryContainer collections={collections} />
			<SubscribeContainer />
		</>
	)
}

export async function getServerSideProps() {
	const res = await Storefront.collection.fetchAllWithProducts()

	return { props: { collections: JSON.parse(JSON.stringify(res)) } }
}
