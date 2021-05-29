import { useState, useContext, useEffect } from "react"
import { Products } from "../components"
import Link from "next/link"
import { ShopContext } from "../context/shopContext"
import { ProductsLoadingContainer } from "./products-loading"
import { ErrorContainer } from "../containers/errorPage"

export function ProductsContainer() {
	const { collections, fetchProductById, error } = useContext(ShopContext)
	const [pageTitle, setPageTitle] = useState("All Products")
	// Show category list
	const [showCategories, setShowCategories] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		collections && setLoading(false)
		console.log(collections)
	}, [collections])

	const handleFilter = (category) => {
		setPageTitle(category)
		setShowCategories(!showCategories)
	}

	const categories = collections.map((category, index) => {
		return (
			// set a pane for each category for the filter
			<Products.Wrapper className="categoryWrapper" key={index} margin="10px">
				<Products.Pane>
					<Products.Category
						src={category.image.src}
						onClick={() => handleFilter(category.title)}
					>
						<Products.ProductTitle>{category.title}</Products.ProductTitle>
					</Products.Category>
				</Products.Pane>
			</Products.Wrapper>
		)
	})

	const products =
		pageTitle !== "All Products"
			? collections
					.filter((collection) => collection.title === pageTitle)
					.map((collection) =>
						collection.products.map(
							(product) =>
								product.availableForSale && ( // Show available products only
									// if page title is not All Products, then match the category and return the items
									<Link href={`/products/${product.id}`} passHref>
										<a onClick={fetchProductById(product.id)}>
											<Products.Pane key={product.id} className="productPane">
												<Products.Textbox>
													<Products.Wrapper>
														<Products.Item
															src={product.images[0].src}
														></Products.Item>
													</Products.Wrapper>
													<Products.Text>{product.title}</Products.Text>
												</Products.Textbox>
												<Products.Textbox>
													<Products.Price>
														£{product.variants[0].price}
													</Products.Price>
													<Products.AddToCart>
														View Item
													</Products.AddToCart>
												</Products.Textbox>
											</Products.Pane>
										</a>
									</Link>
								)
						)
					)
			: collections.map((collection) =>
					collection.products.map(
						(product) =>
							product.availableForSale && ( // Show available products only
								// if page title is all products, then do not filter
								<Link href={`/products/${product.id}`} passHref>
									<a>
										<Products.Pane key={product.id} className="productPane">
											<Products.Textbox>
												<Products.Wrapper>
													<Products.Item
														src={product.images[0].src}
													></Products.Item>
												</Products.Wrapper>
												<Products.Text>{product.title}</Products.Text>
											</Products.Textbox>
											<Products.Textbox>
												<Products.Price>
													£{product.variants[0].price}
												</Products.Price>
												<Products.AddToCart>View Item</Products.AddToCart>
											</Products.Textbox>
										</Products.Pane>
									</a>
								</Link>
							)
					)
			  )

	return error ? (
		<ErrorContainer />
	) : loading ? (
		<ProductsLoadingContainer />
	) : (
		<Products>
			<Products.Textbox className="categoryTitleContainer">
				<Products.Title
					className="categoryTitle"
					onClick={() => setShowCategories(!showCategories)}
				>
					Categories
				</Products.Title>
				<Products.Icon
					src={
						showCategories ? "/images/icons/close.svg" : "images/icons/chevron-down.svg"
					}
					onClick={() => setShowCategories(!showCategories)}
					showCategories={showCategories}
				/>
			</Products.Textbox>
			<Products.Group className="categoriesList" showCategories={showCategories}>
				<Products.Wrapper className="categoryWrapper" margin="10px">
					<Products.Pane onClick={() => setPageTitle("All Products")}>
						<Products.Category
							src={""}
							onClick={() => setShowCategories(!showCategories)}
						>
							<Products.ProductTitle>All Products</Products.ProductTitle>
						</Products.Category>
					</Products.Pane>
				</Products.Wrapper>
				{categories}
			</Products.Group>

			<Products.Title>{pageTitle}</Products.Title>
			<Products.Group className="productsList">{products}</Products.Group>
		</Products>
	)
}
