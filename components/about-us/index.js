import {
	Container,
	Title,
	SubTitle,
	TextBox,
	Row,
	Column,
	Image,
} from "../about-us/styles/about-us"

export default function About({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

About.Title = function AboutTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

About.SubTitle = function AboutSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>
}

About.TextBox = function AboutTextBox({ children, ...restProps }) {
	return <TextBox {...restProps}>{children}</TextBox>
}

About.Row = function AboutRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>
}

About.Column = function AboutColumn({ children, ...restProps }) {
	return <Column {...restProps}>{children}</Column>
}

About.Image = function AboutImage({ children, ...restProps }) {
	return <Image {...restProps}>{children}</Image>
}
