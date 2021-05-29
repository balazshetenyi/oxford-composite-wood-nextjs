import React from 'react'
import { Container, Wrapper, Pane, Category, Item, ProductTitle, Title, Text, Textbox, Group, ItemQuantity, Price, AddToCart, Loading, Icon } from './styles/products'


export default function Products({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Products.Wrapper = function ProductsWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Products.Pane = function ProductsPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

Products.Category = function ProductsCategory({ children, ...restProps }) {
    return <Category {...restProps}>{children}</Category>
}

Products.Item = function ProductsItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Products.Group = function ProductsGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Products.ProductTitle = function ProductsProductTitle({ children, ...restProps }) {
    return <ProductTitle {...restProps}>{children}</ProductTitle>
}

Products.Title = function ProductsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Products.Textbox = function ProductsTextbox({ children, ...restProps }) {
    return <Textbox {...restProps}>{children}</Textbox>
}

Products.Text = function ProductsText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Products.ItemQuantity = function ProductsItemQuantity({ ...restProps }) {
    return <ItemQuantity {...restProps} />
}

Products.Price = function ProductsPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
}

Products.AddToCart = function ProductsAddToCart({ children, ...restProps }) {
    return <AddToCart {...restProps}>{children}</AddToCart>
}

Products.Loading = function ProductsLoading({ children, ...restProps }) {
    return <Loading {...restProps}>{children}</Loading>
}

Products.Icon = function ProductsIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}


