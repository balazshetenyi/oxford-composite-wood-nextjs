import { Products } from "../components"
import Link from "next/link"

export function ProductsContainer({ collection }) {
	const pageTitle = collection?.title

	const products = collection?.products.map(
		(product) =>
			product.availableForSale && ( // Show available products only
				// if page title is all products, then do not filter
				<Link
					href={`/products/${collection?.title.toLowerCase().split(" ").join("")}/${
						product.id
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

	return (
		<Products>
			<Products.Title>{pageTitle}</Products.Title>
			<Products.Group className="productsList">{products}</Products.Group>
		</Products>
	)
}
