import { SubscribeContainer } from "../../../containers/subscribe"
import { ProductContainer } from "../../../containers/product"
import { Storefront } from "../../../context/shopify"

export default function Product({ product, collections }) {
	return (
		<>
			<ProductContainer product={product} collections={collections} />
			<SubscribeContainer />
		</>
	)
}

export async function getServerSideProps({ params }) {
	const { id } = params
	const res = await Storefront.product.fetchByHandle(id)
	const coll = await Storefront.collection.fetchAllWithProducts()

	return {
		props: {
			product: JSON.parse(JSON.stringify(res)),
			collections: JSON.parse(JSON.stringify(coll)),
		},
	}
}
