import React from "react"
import { Container, ItemContainer, Text } from "./styles/pre-orders"

export default function PreOrders({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

PreOrders.ItemContainer = function PreOrdersItemContainer({ children, ...restProps }) {
	return <ItemContainer {...restProps}>{children}</ItemContainer>
}

PreOrders.Text = function PreOrdersText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}
