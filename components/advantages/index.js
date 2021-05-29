import React from 'react'
import { Container, Pane, Wrapper, Text, Icon } from './styles/advantages'

export default function Advanatges({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Advanatges.Pane = function AdvanatgesPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Advanatges.Wrapper = function AdvanatgesWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Advanatges.Text = function AdvanatgesText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Advanatges.Icon = function AdvanatgesIcon({ ...restProps}) {
    return <Icon {...restProps} />
}