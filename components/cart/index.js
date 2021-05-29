import React from 'react'
import { Container, Title, Header, Row, Column, Image, Text, Quantity, Total, Small, Checkout } from './styles/cart'

export default function Cart({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Cart.Title = function CartTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Cart.Header = function CartHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Cart.Row = function CartRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Cart.Column = function CartColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

Cart.Image = function CartImage({ src, ...restProps }) {
    return <Image src={src} {...restProps} />
}

Cart.Text = function CartText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Cart.Quantity = function CartQuantity({ ...restProps }) {
    return <Quantity {...restProps} />
}

Cart.Total = function CartTotal({ children, ...restProps }) {
    return <Total {...restProps}>{children}</Total>
}

Cart.Small = function CartSmall({ children, ...restProps }) {
    return <Small {...restProps}>{children}</Small>
}

Cart.Checkout = function CartCheckout({ children, ...restProps }) {
    return <Checkout {...restProps}>{children}</Checkout>
}