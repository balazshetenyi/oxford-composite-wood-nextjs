import React, { useContext, useState, useEffect } from "react"
import { CART, PRODUCTS } from "../constants/routes"
import { Product, Products, Calculator } from "../components"
import { Storefront as client } from "../context/shopify"
import Link from "next/link"
import { useRouter } from "next/router"
import { ShopContext } from "../context/shopContext"
import { GetQuantity } from "../utils/calculator"
import { DECKING, CLADDING } from "../fixtures/dimensions"
import { getAccesories } from "../utils/accessories"
import { LoadingContainer } from "./loading"
import { filterAccessories } from "../utils/filterAccessories"

export function ProductContainer() {
	const router = useRouter()
	let { id } = router.query
	// Products states and shopping cart
	const { collections, product, setProduct, fetchProductById, addItemToCart } =
		useContext(ShopContext)
	const [quantity, setQuantity] = useState(1)
	const [imageIndex, setImageIndex] = useState(0)
	// Filter products state
	const [color, setColor] = useState("")
	const [length, setLength] = useState("")
	// Calculator state
	const [squareMeter, setSquareMeter] = useState(0)
	const [showResult, setShowResult] = useState(false)
	// Accesoories
	const [accessoriesToOffer, setAccessoriesToOffer] = useState(null)
	console.log(product)

	// Fetch the product
	useEffect(() => {
		fetchProductById(id)
	}, [id])

	// Set colour and length on product load
	useEffect(() => {
		setColor(product?.options[0]?.values[0].value)
		setLength(product?.options[1]?.values[0].value)
	}, [product])

	// Get the required accessories
	useEffect(() => {
		if (Object.entries(product).length) {
			let list = getAccesories(product, quantity)

			setAccessoriesToOffer(filterAccessories(list, product, collections))
		}
	}, [product, quantity, collections])

	// Get the needed material from calculator
	const handleSubmit = () => {
		// Get the measurements
		const material = product.productType.toLowerCase().includes("decking")
			? DECKING.oneSquare
			: CLADDING.oneSquare
		// Get the quantity needed
		const quantity = GetQuantity(squareMeter, material)
		// Set the quantity
		setQuantity(quantity)
		setShowResult(true)
	}

	// const handleQuantityChange = (value, product) => {
	// 	const newAccessories = accessoriesToOffer.reduce((acc, item) => {
	// 		if (item.product.id === product.id) {
	// 			return [...acc, { ...item, quantity: value }]
	// 		}
	// 		return [...acc, item]
	// 	}, [])
	// 	setAccessoriesToOffer(newAccessories)
	// }

	// If there is no product show loading page
	if (Object.entries(product).length === 0) return <LoadingContainer />

	return (
		<Product>
			{/** Product images */}
			<Product.Group className="images" hideOnSmallScreen>
				<Product.ImageContainer>
					<Product.ImageWrapper>
						{product && (
							<Product.Image
								key={product.images[imageIndex].id}
								className="imageLarge"
								src={product.images[imageIndex].src}
								alt={product.images[imageIndex].title}
							/>
						)}
					</Product.ImageWrapper>
					<Product.ImagesWrapper>
						{product?.images?.length > 1 &&
							product.images.map((image, index) => (
								<Product.Image
									onClick={() => setImageIndex(index)}
									key={image.id}
									src={image.src}
									alt={image.title}
								/>
							))}
					</Product.ImagesWrapper>
				</Product.ImageContainer>
			</Product.Group>
			{/** Product details */}
			<Product.Group className="details">
				<Product.Title>{product.title}</Product.Title>
				{/* ---------------------------- */}
				{/* Images shown on small screen */}
				<Product.ImageContainer showOnSmallScreen>
					<Product.ImageWrapper>
						<Product.Image
							key={product?.images[imageIndex]?.id}
							className="imageLarge"
							src={product?.images[imageIndex]?.src}
							alt={product?.images[imageIndex]?.title}
						/>
					</Product.ImageWrapper>
				</Product.ImageContainer>
				{/* ----------- */}
				<Product.Description>{product.description}</Product.Description>
				{/* Filter products */}
				<Product.Filter>
					{/* Filter by color */}
					<Product.ColorPicker>
						{console.log(product)}
						<Product.Text>{color && "Choose a colour"}</Product.Text>
						{collections &&
							collections
								.filter((products) => products.productType === product.productType)
								.map((product) => (
									<Link
										href={`/products/${product.id}`}
										key={product.id}
										onClick={() =>
											setColor(
												product.options[0].values[0].value.toLowerCase()
											)
										}
										passHref
									>
										<Product.Color
											className={product.options[0].values[0].value.toLowerCase()}
										></Product.Color>
									</Link>
								))}
					</Product.ColorPicker>
					{/* Filter by length */}
					{/* <Product.LengthFilter>
						{console.log(product)}
						<Product.Text>Choose length</Product.Text>
						{product.variants?.map((variant) => (
							<Product.Length
								length="short"
								color={color}
								className={length === 2400 ? "active" : ""}
								onClick={() => setLength(2400)}
							>
								{`${variant?.selectedOptions[1]?.value} mm`}
							</Product.Length>
						))}
					</Product.LengthFilter> */}
					<Product.Quantity>
						<Product.Text className="quantityTitle">Quantity</Product.Text>
						<Product.Select
							type="number"
							name="quantity"
							min="0"
							value={quantity}
							onChange={({ target }) => setQuantity(target.value)}
						/>
					</Product.Quantity>
				</Product.Filter>
				{/* <Product.Price>£{(product.variants[0].price * quantity).toFixed(2)}</Product.Price> */}
				<Product.Small>Tax included. Shipping calculated at checkout</Product.Small>
				<Product.AddToCart onClick={() => addItemToCart(product, parseInt(quantity))}>
					Add To Cart
				</Product.AddToCart>
				<Product.GoToCheckout onClick={() => history.push(CART)}>
					Go to checkout
				</Product.GoToCheckout>
				{/* Calculator */}
				{(product.productType === "composite decking" ||
					product.productType === "WPC Cladding") && (
					<Calculator>
						<Calculator.Title>
							Not sure how much you need? Use our calculator.
						</Calculator.Title>
						Area:{" "}
						<Calculator.InputField
							type="number"
							min="0"
							value={squareMeter}
							onChange={({ target }) => setSquareMeter(target.value)}
						/>
						m2*
						{showResult && (
							<Calculator.Result>
								You'll need {quantity} items to cover {squareMeter}m2 of area.
							</Calculator.Result>
						)}
						<Calculator.Submit onClick={handleSubmit}>Calculate</Calculator.Submit>
						<Calculator.Description>
							*We include 5% additional material in the calculation to account for
							off-cuts and wastage. For diagonally aligned boards we calculate an
							extra 15% required material due to the higher wastage factor.
						</Calculator.Description>
					</Calculator>
				)}
			</Product.Group>
			{/* ------------ */}
			{/** Accessories */}
			<Product.Group className="accessories">
				<Product.Subtitle>
					We recommend adding the following accessories to complete your project
				</Product.Subtitle>
				<Product.Row>
					{accessoriesToOffer &&
						collections &&
						accessoriesToOffer.map((prod) => (
							<Products.Pane
								key={prod.product?.id}
								style={{ margin: ".5em" }}
								className="productPane"
							>
								<Link href={`/products/${prod.product?.id}`} passHref>
									<Products.Textbox>
										<Products.Wrapper>
											<Products.Item
												src={prod.product?.images[0].src}
											></Products.Item>
										</Products.Wrapper>
										<Products.Text>{prod.product?.title}</Products.Text>
									</Products.Textbox>
								</Link>
								<Products.Textbox>
									<Products.ItemQuantity
										type="number"
										min="0"
										value={prod.quantity}
										onChange={({ target }) =>
											handleQuantityChange(
												parseInt(target.value),
												prod.product
											)
										}
									/>
									<Products.Price>
										£
										{(prod.product?.variants[0].price * prod.quantity).toFixed(
											2
										)}
									</Products.Price>
									<Products.AddToCart
										onClick={() => addItemToCart(prod.product, prod.quantity)}
									>
										Add To Cart
									</Products.AddToCart>
								</Products.Textbox>
							</Products.Pane>
						))}
				</Product.Row>
			</Product.Group>
			<Product.BackToProducts onClick={() => router.back()}>
				Back To Products
			</Product.BackToProducts>
		</Product>
	)
}