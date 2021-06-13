export function filterAccessories(list, product, products) {
	const accessories = products.filter((collection) =>
		collection.title.toLowerCase().includes("accessories")
	)[0].products

	if (product.title.toLowerCase().includes("decking")) {
		const productsToBuy = [
			{
				product: accessories.filter((product) => product.title.includes("clip"))[0],
				quantity: list.clip,
			},
			{
				product: accessories.filter((product) => product.title.includes("fasteners"))[0], // only the first one shows
				quantity: list.fasteners,
			},
			{
				product: accessories.filter((product) => product.title.includes("joist"))[0],
				quantity: list.joist,
			},
			// {
			// 	product: accessories
			// 		.filter((product) => product.title.includes("trim") && product.availableForSale)
			// 		.filter(
			// 			(trim) =>
			// 				trim.variants[0].title.toLowerCase() ===
			// 				product.variants[0].title.toLowerCase()
			// 		)[0],
			// 	quantity: list.trim,
			// },
		]
		return productsToBuy
	} else if (product.title.toLowerCase().includes("cladding")) {
		const productsToBuy = [
			{
				product: accessories.filter((product) => product.title.includes("clip"))[0],
				quantity: list.clip,
			},
			{
				product: accessories.filter((product) => product.title.includes("joist"))[0],
				quantity: list.joist,
			},
			{
				product: accessories
					.filter((product) => product.title.includes("trim"))
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
