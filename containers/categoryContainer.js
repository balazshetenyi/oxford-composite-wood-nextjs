import { Products } from "../components"
import Link from "next/link"

export function CategoryContainer({ collections }) {
	const categories = collections.map((category, index) => {
		return (
			// set a pane for each category for the filter
			<Products.Wrapper className="categoryWrapper" key={index} margin="10px">
				<Products.Pane>
					<Link
						href={{
							pathname: `/products/[slug]`,
							query: { slug: category.title.toLowerCase().split(" ").join("-") },
						}}
						passHref
					>
						<a>
							<Products.Category src={category.image.src}>
								<Products.ProductTitle>{category.title}</Products.ProductTitle>
							</Products.Category>
						</a>
					</Link>
				</Products.Pane>
			</Products.Wrapper>
		)
	})

	return (
		<Products>
			<Products.Group className="categoriesList">{categories}</Products.Group>
		</Products>
	)
}
