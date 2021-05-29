import React from 'react'
import {
    Container,
    Group,
    ImageShadow,
    TitleShadow,
} from './styles/products-loading'

export default function ProductsLoading({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

ProductsLoading.Group = function ProductsLoadingGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

ProductsLoading.TitleShadow = function ProductsLoadingTitleShadow({ children, ...restProps }) {
    return <TitleShadow {...restProps}>{children}</TitleShadow>
}

ProductsLoading.ImageShadow = function ProductsLoadingImageShadow({ children, ...restProps }) {
    return <ImageShadow {...restProps}>{children}</ImageShadow>
}
