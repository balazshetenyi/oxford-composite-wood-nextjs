import React from 'react'
import { Container, Pane, Title, Text, Base, Label, Input, Message, Submit } from './styles/form'

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Pane = function FormPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

Form.Label = function FormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

Form.Input = function FormInput({ ...restProps }) {
    return <Input {...restProps} />
}

Form.Message = function FormMessage({ ...restProps }) {
    return <Message {...restProps} />
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}
