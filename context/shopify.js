import Client from "shopify-buy"

// Initializing a client to return content in the store's primary language
export const Storefront = Client.buildClient({
	domain: process.env.SHOPIFY_STORE_DOMAIN,
	storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
})
