import { createContext, useState, useEffect } from "react"
import { Storefront } from "./shopify"

const ShopContext = createContext()

function ShopContextProvider({ children }) {
	const [cart, setCart] = useState(null)
	const [isCartEmpty, setIsCartEmpty] = useState(true)
	const [totalQuantity, setTotalQuantity] = useState(0)
	const [allProducts, setAllProducts] = useState(null)
	// const [isCartOpen, setIsCartOpen] = useState(false)

	// Create a checkout ID on render
	useEffect(async () => {
		const cart = await JSON.parse(window.localStorage.getItem("cart"))
		setCart(cart)
		async function getAllProductsForSearchComponent() {
			const products = await Storefront.product.fetchAll()
			setAllProducts(products)
		}
		getAllProductsForSearchComponent()
	}, [])

	// Follow cart state
	useEffect(async () => {
		if (cart?.lineItems.length > 0) {
			setTotalQuantity(cart?.lineItems?.map((item) => item.quantity).reduce((acc, curr) => acc + curr))
			setIsCartEmpty(false)
		} else {
			setIsCartEmpty(true)
		}
	}, [cart])

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
				isCartEmpty,
				totalQuantity,
				allProducts,
			}}
		>
			{children}
		</ShopContext.Provider>
	)
}

export { ShopContextProvider, ShopContext }
