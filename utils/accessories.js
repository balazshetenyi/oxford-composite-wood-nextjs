// Get accesories and fittings for the product based
// on the quantity
export function getAccesories(product, quantity) {
	// If product is decking
	if (product.title.toLowerCase().includes("decking")) {
		const starterClipPerSqm = 10 // pieces
		const fastenerPerSqm = 25 // pieces
		const joistPerSqm = 1.5 // joist
		const trimPerSqm = 0.42 // trim
		const quantityInSqm = quantity / 2.8

		return {
			clip: Math.ceil((quantityInSqm * starterClipPerSqm) / 50),
			fasteners: Math.ceil((quantityInSqm * fastenerPerSqm) / 100),
			joist: Math.round(quantityInSqm * joistPerSqm),
			trim: Math.ceil(quantityInSqm * trimPerSqm),
		}

		// If product is cladding
	} else if (product.title.toLowerCase().includes("cladding")) {
		const starterClipPerSqm = 10 // pieces
		const joistPerSqm = 1 // joist
		const trimPerSqm = 0.42 // trim
		const quantityInSqm = quantity / 3.2

		return {
			clip: Math.ceil((quantityInSqm * starterClipPerSqm) / 50),
			joist: Math.round(quantityInSqm * joistPerSqm),
			trim: Math.ceil(quantityInSqm * trimPerSqm),
		}
	} else return
}
