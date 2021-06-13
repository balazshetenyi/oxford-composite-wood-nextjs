import React from "react"
import {
	Container,
	Group,
	ImageContainer,
	ImageWrapper,
	ImagesWrapper,
	StyledImage,
	Title,
	Text,
	Price,
	Small,
	Filter,
	Quantity,
	ColorPicker,
	Color,
	LengthFilter,
	Length,
	Select,
	AddToCart,
	GoToCheckout,
	MorePaymentOptions,
	Description,
	Subtitle,
	Row,
	Item,
	BackToProducts,
} from "./styles/product"

export default function Product({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Product.Group = function ProductGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>
}

Product.ImageContainer = function ProductImageContainer({ children, ...restProps }) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>
}

Product.ImagesWrapper = function ProductImagesWrapper({ children, ...restProps }) {
	return <ImagesWrapper {...restProps}>{children}</ImagesWrapper>
}

Product.ImageWrapper = function ProductImageWrapper({ children, ...restProps }) {
	return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}

Product.StyledImage = function ProductStyledImage({ src, ...restProps }) {
	return <StyledImage src={src} {...restProps} />
}

Product.Title = function ProductTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Product.Text = function ProductText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}

Product.Price = function ProductPrice({ children, ...restProps }) {
	return <Price {...restProps}>{children}</Price>
}

Product.Small = function ProductSmall({ children, ...restProps }) {
	return <Small {...restProps}>{children}</Small>
}

Product.Filter = function ProductFilter({ children, ...restProps }) {
	return <Filter {...restProps}>{children}</Filter>
}

Product.Quantity = function ProductQuantity({ children, ...restProps }) {
	return <Quantity {...restProps}>{children}</Quantity>
}

Product.ColorPicker = function ProductColorPicker({ children, ...restProps }) {
	return <ColorPicker {...restProps}>{children}</ColorPicker>
}

Product.Color = function ProductColor({ children, ...restProps }) {
	return <Color {...restProps}>{children}</Color>
}

Product.LengthFilter = function ProductLengthFilter({ children, ...restProps }) {
	return <LengthFilter {...restProps}>{children}</LengthFilter>
}

Product.Length = function ProductLength({ children, ...restProps }) {
	return <Length {...restProps}>{children}</Length>
}

Product.Select = function ProductSelect({ ...restProps }) {
	return <Select {...restProps} />
}

Product.AddToCart = function ProductAddToCart({ children, ...restProps }) {
	return <AddToCart {...restProps}>{children}</AddToCart>
}

Product.GoToCheckout = function ProductGoToCheckout({ children, ...restProps }) {
	return <GoToCheckout {...restProps}>{children}</GoToCheckout>
}

Product.MorePaymentOptions = function ProductMorePaymentOptions({ children, ...restProps }) {
	return <MorePaymentOptions {...restProps}>{children}</MorePaymentOptions>
}

Product.Description = function ProductDescription({ children, ...restProps }) {
	return <Description {...restProps}>{children}</Description>
}

Product.Subtitle = function ProductSubtitle({ children, ...restProps }) {
	return <Subtitle {...restProps}>{children}</Subtitle>
}

Product.Row = function ProductRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>
}

Product.Item = function ProductItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>
}

Product.BackToProducts = function ProductBackToProducts({ children, ...restProps }) {
	return <BackToProducts {...restProps}>{children}</BackToProducts>
}

// Rest from the products component
