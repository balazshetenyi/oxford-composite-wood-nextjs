import React from 'react'
import { Loading } from '../components'

export function LoadingContainer() {
    return (
        <Loading>
            <Loading.Group>
                <Loading.ImageShadow></Loading.ImageShadow>
                <Loading.ImagesShadow></Loading.ImagesShadow>
            </Loading.Group>
            <Loading.Group>
                <Loading.TitleShadow></Loading.TitleShadow>
                <Loading.DescriptionShadow></Loading.DescriptionShadow>
                <Loading.QuantityShadow></Loading.QuantityShadow>
                <Loading.PriceShadow></Loading.PriceShadow>
                <Loading.ButtonShadow></Loading.ButtonShadow>
                <Loading.ButtonShadow></Loading.ButtonShadow>
                <Loading.CalculatorShadow></Loading.CalculatorShadow>
            </Loading.Group>
        </Loading>
    )
}