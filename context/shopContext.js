import { createContext, useState, useEffect } from "react"
//import { cartReducer } from "../hooks/cartReducer"
import { Storefront } from "./shopify"

const ShopContext = createContext()

function ShopContextProvider({ children, products }) {
	const [cart, setCart] = useState(null)
	// const [isCartOpen, setIsCartOpen] = useState(false)

	// Create a checkout ID on render
	useEffect(async () => {
		setCart(JSON.parse(window.localStorage.getItem("cart")))
	}, [])

	// Add items to cart
	async function addItemToCart(item, quantity) {
		const checkoutId = window.localStorage.getItem("checkoutId")

		if (!checkoutId) {
			const { id } = await Storefront.checkout.create()
			checkoutId - id
			window.localStorage.setItem("checkoutId", id)
		}

		const cart = await Storefront.checkout.addLineItems(checkoutId, [
			{
				variantId: item.variants[0].id,
				quantity,
			},
		])

		window.localStorage.setItem("cart", JSON.stringify(cart))
		setCart(JSON.parse(window.localStorage.getItem("cart")))
	}
	// const lo = JSON.parse(cart)
	console.log(cart)

	// Remove item from cart by ID
	async function removeItemFromCart(lineItemId) {
		const checkoutId = await window.localStorage.getItem("checkoutId")
		window.localStorage.removeItem("cart")
		const cart = await Storefront.checkout.removeLineItems(checkoutId, [lineItemId])
		window.localStorage.setItem("cart", JSON.stringify(cart))
		setCart(JSON.parse(window.localStorage.getItem("cart")))
	}

	// Update item in cart by ID and quantity
	async function updateItemsInCart(item, quantity) {
		const checkoutId = await window.localStorage.getItem("checkoutId")
		window.localStorage.removeItem("cart")
		const cart = await Storefront.checkout.updateLineItems(checkoutId, [
			{
				id: item.id,
				quantity,
				variantId: item.variant.id,
			},
		])
		window.localStorage.setItem("cart", JSON.stringify(cart))
		setCart(JSON.parse(window.localStorage.getItem("cart")))
	}

	return (
		<ShopContext.Provider
			value={{
				cart,
				addItemToCart,
				removeItemFromCart,
				updateItemsInCart,
			}}
		>
			{children}
		</ShopContext.Provider>
	)
}

// export async function getServerSideProps() {
// 	const res = await Storefront.product.fetchAll()

// 	return { props: { products: JSON.parse(JSON.stringify(res)) } }
// }

export { ShopContextProvider, ShopContext }
