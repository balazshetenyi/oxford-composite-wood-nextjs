import { useContext } from "react"
import Media from "react-media"
import { PRODUCTS } from "../constants/routes"
import { Cart } from "../components"
import { useRouter } from "next/router"
import { ShopContext } from "../context/shopContext"

export function CartContainer() {
	const router = useRouter()
	const { cart, removeItemFromCart, updateItemsInCart } = useContext(ShopContext)

	function handleQuantityChange(event, item) {
		const quantity = event
		updateItemsInCart(item, parseInt(quantity))
	}

	function handleCheckout() {
		router.push(cart.webUrl)
		alert("You are being redirected to our secure checkout page...")
	}

	if (!cart) {
		return <div>Loading...</div>
	} else {
		return (
			<Cart>
				<Cart.Title>Shopping Cart</Cart.Title>
				<Cart.Header>
					<Cart.Column className="product">Product</Cart.Column>
					<Cart.Column>Price</Cart.Column>
					<Cart.Column>Quantity</Cart.Column>
					<Cart.Column>Total</Cart.Column>
				</Cart.Header>
				{/* -------------------------- */}
				{/* Show this on small screens */}
				{cart && (
					<Media
						query="(max-width: 599px)"
						render={() =>
							cart.lineItems.map((item) => (
								<Cart.Row key={item.id}>
									<Cart.Column className="image">
										<Cart.Image src={item.variant.image.src} alt={item.title} />
									</Cart.Column>
									<Cart.Column className="details">
										<Cart.Text>{item.title}</Cart.Text>
										<Cart.Quantity
											type="number"
											value={item.quantity}
											onChange={() => handleQuantityChange(item)}
										/>
										<Cart.Image src={"/images/icons/trash.svg"} className="trash" onClick={""} />
										<Cart.Text className="price">Price: £{item.variant.price}/board</Cart.Text>
										<Cart.Text className="item-total">
											Total: £{(item.variant.price * item.quantity).toFixed(2)}
										</Cart.Text>
									</Cart.Column>
								</Cart.Row>
							))
						}
					/>
				)}
				{/* -------------------------------------  */}
				{/* Show this on medium and large screens */}
				{cart && (
					<Media
						query="(min-width: 600px)"
						render={() =>
							cart.lineItems.map((item) => (
								<Cart.Row key={item.id}>
									<Cart.Column className="product">
										<Cart.Image src={item.variant.image.src} alt={item.title} />
										<Cart.Text>{item.title}</Cart.Text>
									</Cart.Column>
									<Cart.Column>
										<Cart.Text>£{item.variant.price}</Cart.Text>
									</Cart.Column>
									<Cart.Column>
										<Cart.Quantity
											type="number"
											value={item.quantity}
											name="quantity"
											onChange={({ target }) => handleQuantityChange(target.value, item)}
										/>
									</Cart.Column>
									<Cart.Column className="itemTotal">
										<Cart.Text>£{(item.variant.price * item.quantity).toFixed(2)}</Cart.Text>
										<Cart.Image
											src={"/images/icons/trash.svg"}
											className="trash"
											onClick={() => removeItemFromCart(item.id)}
										/>
									</Cart.Column>
								</Cart.Row>
							))
						}
					/>
				)}

				<Cart.Total>Subtotal: £{cart.totalPrice}</Cart.Total>
				<Cart.Small>Tax included. Shipping calculated at checkout.</Cart.Small>
				<Cart.Checkout onClick={handleCheckout}>Checkout</Cart.Checkout>
				<Cart.Text className="goBack" onClick={() => router.push(PRODUCTS)}>
					Back to products
				</Cart.Text>
			</Cart>
		)
	}
}
