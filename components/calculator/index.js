import React from 'react'
import { Container, Title, Result, Description, InputField, Submit } from './styles/calculator'

export default function Calculator({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Calculator.Title = function CalculatorTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Calculator.Description = function CalculatorDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}

Calculator.InputField = function CalculatorInputField({ children, ...restProps }) {
    return <InputField {...restProps}>{children}</InputField>
}

Calculator.Result = function CalculatorResult({ children, ...restProps }) {
    return <Result {...restProps}>{children}</Result>
}

Calculator.Submit = function CalculatorSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}