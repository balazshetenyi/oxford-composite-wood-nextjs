import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { CART } from "../constants/routes"
import { Product, Products, Calculator } from "../components"
import { GetQuantity } from "../utils/calculator"
import { DECKING, CLADDING } from "../fixtures/dimensions"
import { getAccesories } from "../utils/accessories"
import { filterAccessories } from "../utils/filterAccessories"
import { getColor } from "../utils/getColor.ts"
import { ShopContext } from "../context/shopContext"

export function ProductContainer({ product, collections }) {
	const { addItemToCart } = useContext(ShopContext)
	const router = useRouter()
	// Products states and shopping cart
	const [quantity, setQuantity] = useState(1)
	const [imageIndex, setImageIndex] = useState(0)
	const collectionOfProduct = collections.filter((collection) =>
		product?.productType.toLowerCase().includes(collection.title.toLowerCase())
	)[0]
	const collectionOfAccessories = collections.find((collection) =>
		collection?.title.toLowerCase().includes("accessories")
	)
	// Filter products state
	const [color, setColor] = useState("")
	const [length, setLength] = useState("")
	const [lengthFilter, setLengthFilter] = useState([])
	// Calculator state
	const [squareMeter, setSquareMeter] = useState(0)
	const [showResult, setShowResult] = useState(false)
	// Accesoories
	const [accessoriesToOffer, setAccessoriesToOffer] = useState(null)

	// Set colour and length on product load
	useEffect(() => {
		setColor(product?.options[0]?.values[0].value || null)
		setLength(product?.options[1]?.values[0].value || null)
		getPossibleLengths(collectionOfProduct)
		setQuantity(1)
	}, [product])

	// Filter available products
	function getPossibleLengths(collection) {
		collection?.products.map((prod) => {
			if (prod?.options[1]) {
				if (!lengthFilter.includes(prod?.options[1]?.values[0].value) && prod.availableForSale) {
					lengthFilter.push(prod?.options[1]?.values[0].value)
				}
			} else return
		})
	}

	// Get the required accessories
	useEffect(() => {
		if (
			product.productType.toLowerCase().includes("decking") ||
			product.productType.toLowerCase().includes("cladding")
		) {
			if (Object.entries(product).length) {
				let list = getAccesories(product, quantity)
				setAccessoriesToOffer(filterAccessories(list, product, collectionOfAccessories))
			}
		}
	}, [product, quantity, collectionOfAccessories])

	// Get the needed material from calculator
	function handleSubmit() {
		// Get the measurements
		const material = product.productType.toLowerCase().includes("decking") ? DECKING.oneSquare : CLADDING.oneSquare
		// Get the quantity needed
		const quantity = GetQuantity(squareMeter, material)
		// Set the quantity
		setQuantity(quantity)
		setShowResult(true)
	}

	function handleQuantityChange(value, product) {
		const newAccessories = accessoriesToOffer.reduce((acc, item) => {
			if (item?.product?.id === product?.id) {
				return [...acc, { ...item, quantity: value }]
			}
			return [...acc, item]
		}, [])
		setAccessoriesToOffer(newAccessories)
	}

	// async function addItemToCart(item, quantity) {
	// 	const storage = window.localStorage
	// 	let checkoutId = window.localStorage.getItem("checkoutId")

	// 	if (!checkoutId) {
	// 		const checkout = await Storefront.checkout.create()
	// 		console.log("in here")
	// 		checkoutId = checkout.id
	// 		storage.setItem("checkoutId", checkoutId)
	// 	}

	// 	// const cart = await Storefront.checkout.addLineItems(checkoutId, [
	// 	// 	{
	// 	// 		variantId: item.variants[0].id,
	// 	// 		quantity,
	// 	// 	},
	// 	// ])

	// 	// storage.setItem("cart", JSON.stringify(cart))

	// 	// console.log(cart)
	// }

	return (
		<Product>
			{/** Product images */}
			<Product.Group className="images" hideOnSmallScreen>
				<Product.ImageContainer>
					<Product.ImageWrapper>
						<Product.StyledImage
							key={product?.images[imageIndex].id}
							className="imageLarge"
							src={product?.images[imageIndex].src}
							layout="fill"
							objectFit="cover"
							alt={product?.images[imageIndex].title}
						/>
					</Product.ImageWrapper>
					<Product.ImagesWrapper>
						{product?.images.map((image, index) => (
							<Product.StyledImage
								onClick={() => setImageIndex(index)}
								key={image.id}
								src={image.src}
								width="116"
								height="175"
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
						<Product.StyledImage
							key={product?.images[imageIndex]?.id}
							className="imageLarge"
							src={product?.images[imageIndex]?.src}
							layout="fill"
							objectFit="cover"
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
						<Product.Text>{color && collectionOfProduct && "Choose a colour"}</Product.Text>
						{collectionOfProduct &&
							collectionOfProduct.products
								.filter((prod) => prod.availableForSale)
								.map((product) => (
									<Link
										href={`/products/${collectionOfProduct.title.toLowerCase()}/${product?.handle}`}
										key={product?.id}
										onClick={() => setColor(getColor(product))}
									>
										<a>
											<Product.Color
												className={`${product?.options[0].values[0].value.toLowerCase()} ${
													product?.options[0].values[0].value.toLowerCase() === color &&
													"active"
												} `}
											></Product.Color>
										</a>
									</Link>
								))}
					</Product.ColorPicker>
					<Product.LengthFilter>
						<Product.Text>{lengthFilter.length > 1 && "Select length"}</Product.Text>
						{collectionOfProduct &&
							collectionOfProduct.products
								.filter((prod) => prod.availableForSale)
								.filter((prod) => prod.options[0].values[0].value.toLowerCase() === color)
								.map((prod) => (
									<Link
										href={`/products/${collectionOfProduct.title.toLowerCase()}/${prod?.handle}`}
										key={prod?.id}
									>
										<a>
											<Product.Length
												className={`${Number(prod.options[1].values[0].value)} ${
													prod.options[1].values[0].value == length && "active"
												}`}
											>{`${prod.options[1].values[0].value} mm`}</Product.Length>
										</a>
									</Link>
								))}
					</Product.LengthFilter>
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
				<Product.Price>£{(product.variants[0].price * quantity).toFixed(2)}</Product.Price>
				<Product.Small>Tax included. Shipping calculated at checkout</Product.Small>
				<Product.AddToCart onClick={() => addItemToCart(product, parseInt(quantity))}>
					Add To Cart
				</Product.AddToCart>
				<Product.GoToCheckout onClick={() => router.push(CART)}>Go to checkout</Product.GoToCheckout>
				{/* Calculator */}
				{(product.productType === "composite decking" || product.productType === "WPC Cladding") && (
					<Calculator>
						<Calculator.Title>Not sure how much you need? Use our calculator.</Calculator.Title>
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
							*We include 5% additional material in the calculation to account for off-cuts and wastage.
							For diagonally aligned boards we calculate an extra 15% required material due to the higher
							wastage factor.
						</Calculator.Description>
					</Calculator>
				)}
			</Product.Group>
			{/* ------------ */}
			{/** Accessories */}
			<Product.Group className="accessories">
				<Product.Subtitle>
					{accessoriesToOffer && "We recommend adding the following accessories to complete your project"}
				</Product.Subtitle>
				<Product.Row>
					{accessoriesToOffer &&
						accessoriesToOffer.map(
							(prod) =>
								prod.product && (
									<Products.Pane
										key={prod?.product?.id}
										style={{ margin: ".5em" }}
										className="productPane"
									>
										<Link
											href={`/products/${collectionOfAccessories?.title
												.toLowerCase()
												.split(" ")
												.join("-")}/${prod.product.handle}`}
											key={prod.product.handle}
											passHref
										>
											<a>
												<Products.Textbox>
													<Products.Wrapper>
														<Products.Item
															src={prod?.product?.images[0].src}
														></Products.Item>
													</Products.Wrapper>
													<Products.Text>{prod?.product?.title}</Products.Text>
												</Products.Textbox>
											</a>
										</Link>
										<Products.Textbox>
											<Products.ItemQuantity
												type="number"
												min="0"
												value={prod.quantity}
												onChange={({ target }) =>
													handleQuantityChange(parseInt(target.value), prod.product)
												}
											/>
											<Products.Price>
												£{(prod?.product?.variants[0].price * prod?.quantity).toFixed(2)}
											</Products.Price>
											<Products.AddToCart
												onClick={() => addItemToCart(prod?.product, parseInt(prod?.quantity))}
											>
												Add To Cart
											</Products.AddToCart>
										</Products.Textbox>
									</Products.Pane>
								)
						)}
				</Product.Row>
			</Product.Group>
			<Product.BackToProducts onClick={() => router.back()}>Back To Products</Product.BackToProducts>
		</Product>
	)
}
