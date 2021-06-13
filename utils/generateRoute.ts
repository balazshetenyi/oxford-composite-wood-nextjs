export function generateRoute(product: { productType: string }): string {
	if (product.productType.toLowerCase().includes("decking")) return "decking"
	if (product.productType.toLowerCase().includes("cladding")) return "cladding"
	if (product.productType.toLowerCase().includes("tiles")) return "tiles"
	if (product.productType.toLowerCase().includes("accessories")) return "accessories"
	if (product.productType.toLowerCase().includes("preorders")) return "preorders"
	if (product.productType.toLowerCase().includes("mirror")) return "distressed-mirror"
	if (product.productType.toLowerCase().includes("samples")) return "free-samples"
}
