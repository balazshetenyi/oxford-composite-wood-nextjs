import { createContext, useState, useEffect, useReducer } from "react"
//import { cartReducer } from "../hooks/cartReducer"
import { Storefront } from "./shopify"

const ShopContext = createContext()

function ShopContextProvider({ children }) {
	const [checkout, setCheckout] = useState({})
	const [collections, setCollections] = useState([])
	const [products, setProducts] = useState({})
	const [product, setProduct] = useState({})
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [error, setError] = useState(false)
	// // Shopping Cart
	// const [cart, dispatch] = useReducer(cartReducer, [], () => {
	// 	const local = localStorage.getItem("store")
	// 	return local ? JSON.parse(local) : []
	// })

	useEffect(() => {
		createCheckout()
		fetchCollections()
		fetchAllProducts()
	}, [])

	async function fetchCollections(collectionId) {
		// Fetch all collections or just a single collection if collection id is provided
		// collectionId: string - optional
		const collections = await Storefront.collection.fetchAllWithProducts(collectionId)
		setCollections(collections)
		console.log(collections)
	}

	async function fetchAllProducts() {
		// Fetch all products in the shop
		const allProducts = await Storefront.product.fetchAll()
		setProducts(allProducts)
		console.log(allProducts)
	}

	async function fetchProductById(productId) {
		// Fetch a single product by id
		// productId: string - required
		const product = await Storefront.product.fetch(productId)
		setProduct(product)
		console.log(product)
	}

	async function createCheckout() {
		// Create an emoty checkout
		const checkout = await Storefront.checkout.create()
	}

	async function fetchCheckout(checkoutId) {
		// Fetch checkout by id
		// chockoutId: string - required
		const checkout = await Storefront.checkout.fetch(checkoutId)
	}

	// async function updateCheckout(checkoutId) {

	// }

	async function addItemToCart(checkoutId, itemsToAdd) {
		// Add new items to checkout
		// checkoutId: string - required
		// itemsToAdd: object - required
		const newCart = await Storefront.checkout.addLineItems(checkoutId, itemsToAdd)
	}

	async function updateItemsInCart(checkoutId, itemsToUpdate) {
		// Updating the cart
		// checkoutId: string - required
		// itemsToUpdate: array of objects - required
		const updatedCart = await Storefront.checkout.updateLineItems(checkoutId, itemsToUpdate)
	}

	async function removeItemFromCart(checkoutId, itemsToRemove) {
		// Updating the cart
		// checkoutId: string - required
		// itemsToRemove: array of strings - required
		const updatedCart = await Storefront.checkout.removeLineItems(checkoutId, itemsToRemove)
	}

	return (
		<ShopContext.Provider
			value={{
				cart: checkout,
				collections,
				product,
				fetchProductById,
				addItemToCart,
			}}
		>
			{children}
		</ShopContext.Provider>
	)
}

export { ShopContextProvider, ShopContext }
