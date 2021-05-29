export function filterAccessories(list, product, products) {
	if (product && products && product.productType.toLowerCase().includes("decking")) {
		const productsToBuy = [
			{
				product: products.filter((products) => products.title.includes("clip"))[0],
				quantity: list.clip,
			},
			{
				product: products.filter((products) => products.title.includes("fasteners"))[0], // only the first one shows
				quantity: list.fasteners,
			},
			{
				product: products.filter((products) => products.title.includes("joist"))[0],
				quantity: list.joist,
			},
			{
				product: products
					.filter((products) => products.title.includes("trim"))
					.filter(
						(trim) =>
							trim.options[0].values[0].value === product.options[0].values[0].value
					)[0],
				quantity: list.trim,
			},
		]
		return productsToBuy
	} else if (product && products && product.productType.toLowerCase().includes("cladding")) {
		const productsToBuy = [
			{
				product: products.filter((products) => products.title.includes("clip"))[0],
				quantity: list.clip,
			},
			{
				product: products.filter((products) => products.title.includes("joist"))[0],
				quantity: list.joist,
			},
			{
				product: products
					.filter((products) => products.title.includes("trim"))
					.filter(
						(trim) =>
							trim.options[0].values[0].value === product.options[0].values[0].value
					)[0],
				quantity: list.trim,
			},
		]
		return productsToBuy
	} else return
}
