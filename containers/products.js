import { Products, Product } from "../components"
import { useRouter } from "next/router"
import Link from "next/link"

export function ProductsContainer({ collection }) {
	const router = useRouter()
	const pageTitle = collection?.title
	const variants =
		collection?.products.length < 2 && collection?.products[0].variants.length > 1
			? collection?.products[0].variants
			: collection?.products

	const products = collection?.products.map(
		(product) =>
			product.availableForSale && ( // Show available products only
				<Link
					href={`/products/${collection?.title.toLowerCase().split(" ").join("-")}/${
						product.handle
					}`}
					key={product.id}
					passHref
				>
					<a>
						<Products.Pane key={product.id} className="productPane">
							<Products.Textbox>
								<Products.Wrapper>
									<Products.Item src={product.images[0].src}></Products.Item>
								</Products.Wrapper>
								<Products.Text>{product.title}</Products.Text>
							</Products.Textbox>
							<Products.Textbox>
								<Products.Price>£{product.variants[0].price}</Products.Price>
								<Products.AddToCart>View Item</Products.AddToCart>
							</Products.Textbox>
						</Products.Pane>
					</a>
				</Link>
			)
	)

	const optionalProducts = variants?.map(
		(variant) =>
			variant.available && ( // Show available products only
				<Link
					href={`/products/${collection?.title.toLowerCase().split(" ").join("-")}/${
						collection.products[0].handle
					}`}
					key={variant.id}
					passHref
				>
					<a>
						<Products.Pane key={variant.id} className="productPane">
							<Products.Textbox>
								<Products.Wrapper>
									<Products.Item src={variant.image.src}></Products.Item>
								</Products.Wrapper>
								<Products.Text>{variant.title}</Products.Text>
							</Products.Textbox>
							<Products.Textbox>
								<Products.Price>£{variant.price}</Products.Price>
								<Products.AddToCart>View Item</Products.AddToCart>
							</Products.Textbox>
						</Products.Pane>
					</a>
				</Link>
			)
	)

	return (
		<Products>
			<Products.Title>{pageTitle}</Products.Title>
			<Products.Group className="productsList">
				{products}
				{optionalProducts}
			</Products.Group>
			<Product.BackToProducts onClick={() => router.back()}>
				Back To Categories
			</Product.BackToProducts>
		</Products>
	)
}
