export function getColor(product): string {
	const color = product?.variants[0].selectedOptions[0]
		.filter((option: { name: string }) => option.name.toLowerCase().includes("color"))
		.value.toLowerCase()

	return color
}
