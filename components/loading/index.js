import React from 'react'
import { 
    Container, 
    Group, 
    ImageShadow, 
    ImagesShadow, 
    TitleShadow, 
    DescriptionShadow,
    QuantityShadow,
    PriceShadow,
    ButtonShadow,
    CalculatorShadow
 } from './styles/loading'

export default function Loading({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Loading.Group = function LoadingGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Loading.ImageShadow = function LoadingImageShadow({ children, ...restProps }) {
    return <ImageShadow {...restProps}>{children}</ImageShadow>
}

Loading.ImagesShadow = function LoadingImagesShadow({ children, ...restProps }) {
    return <ImagesShadow {...restProps}>{children}</ImagesShadow>
}

Loading.TitleShadow = function LoadingTitleShadow({ children, ...restProps }) {
    return <TitleShadow {...restProps}>{children}</TitleShadow>
}

Loading.DescriptionShadow = function LoadingDescriptionShadow({ children, ...restProps }) {
    return <DescriptionShadow {...restProps}>{children}</DescriptionShadow>
}

Loading.QuantityShadow = function LoadingQuantityShadow({ children, ...restProps }) {
    return <QuantityShadow {...restProps}>{children}</QuantityShadow>
}

Loading.PriceShadow = function LoadingPriceShadow({ children, ...restProps }) {
    return <PriceShadow {...restProps}>{children}</PriceShadow>
}

Loading.ButtonShadow = function LoadingButtonShadow({ children, ...restProps }) {
    return <ButtonShadow {...restProps}>{children}</ButtonShadow>
}

Loading.CalculatorShadow = function LoadingCalculatorShadow({ children, ...restProps }) {
    return <CalculatorShadow {...restProps}>{children}</CalculatorShadow>
}