import React from 'react'
import { Container, Wrapper, Quote, Text, Cite } from './styles/testimonials'

export default function Testimonials({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Testimonials.Wrapper = function TestimonialsWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Testimonials.Quote = function TestimonialsQuote({ src, ...restProps }) {
    return <Quote src={src} {...restProps} />
}

Testimonials.Text = function TestimonialsText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Testimonials.Cite = function TestimonialsCite({ children, ...restProps }) {
    return <Cite {...restProps}>{children}</Cite>
}