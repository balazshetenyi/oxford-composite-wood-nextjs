import { ProductsLoading } from "../components"

export function ProductsLoadingContainer() {
	return (
		<ProductsLoading>
			<ProductsLoading.TitleShadow></ProductsLoading.TitleShadow>
			<ProductsLoading.Group className="categoriesGroupShadow">
				<ProductsLoading.ImageShadow className="categoryImageShadow"></ProductsLoading.ImageShadow>
				<ProductsLoading.ImageShadow className="categoryImageShadow"></ProductsLoading.ImageShadow>
				<ProductsLoading.ImageShadow className="categoryImageShadow"></ProductsLoading.ImageShadow>
				<ProductsLoading.ImageShadow className="categoryImageShadow"></ProductsLoading.ImageShadow>
				<ProductsLoading.ImageShadow className="categoryImageShadow"></ProductsLoading.ImageShadow>
			</ProductsLoading.Group>
			<ProductsLoading.TitleShadow></ProductsLoading.TitleShadow>
			<ProductsLoading.Group className="itemsGroupShadow">
				<ProductsLoading.ImageShadow className="imageShadow"></ProductsLoading.ImageShadow>
				<ProductsLoading.ImageShadow className="imageShadow"></ProductsLoading.ImageShadow>
				<ProductsLoading.ImageShadow className="imageShadow"></ProductsLoading.ImageShadow>
				<ProductsLoading.ImageShadow className="imageShadow"></ProductsLoading.ImageShadow>
			</ProductsLoading.Group>
		</ProductsLoading>
	)
}
