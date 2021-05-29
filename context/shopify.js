import Client from "shopify-buy";

// Initializing a client to return content in the store's primary language
export const Storefront = Client.buildClient({
  domain: "oxfordwpc.myshopify.com",
  storefrontAccessToken: "f086ae224cdad4182425b0f3d833bba6",
});
