import React from 'react'
import { Container, Title, SubTitle, Form, Input, Button } from './styles/subscribe'

export default function Subscribe({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Subscribe.Title = function SubscribeTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Subscribe.SubTitle = function SubscribeSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Subscribe.Form = function SubscribeForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}

Subscribe.Input = function SubscribeInput({ ...restProps }) {
    return <Input {...restProps} />
}

Subscribe.Button = function SubscribeButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}