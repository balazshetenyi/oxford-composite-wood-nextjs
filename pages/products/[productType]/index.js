import { useRouter } from "next/router"
import { Storefront } from "../../../context/shopify"
import { ProductsContainer } from "../../../containers/products"

export default function ProductsPage({ collections }) {
	const { query } = useRouter()
	const productType = query.productType

	const collection = collections.filter((collection) =>
		collection.title.toLowerCase().split(" ").join("").includes(productType)
	)[0]

	return <ProductsContainer collections={collections} collection={collection} />
}

export async function getServerSideProps() {
	const res = await Storefront.collection.fetchAllWithProducts()

	return { props: { collections: JSON.parse(JSON.stringify(res)) } }
}
