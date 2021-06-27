import Link from "next/link"
import { Section, Background, Container, Title, SubTitle, Button } from "./styles/jumbotron"

export default function Jumbotron({ bg = true, children, ...restProps }) {
	return bg ? <Section {...restProps}>{children}</Section> : { children }
}

Jumbotron.Background = function JumbotronBackground({ ...restProps }) {
	return <Background {...restProps} />
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Button = function JumbotronButton({ href, children, ...restProps }) {
	return (
		<Link href={href} passHref>
			<Button {...restProps}>{children}</Button>
		</Link>
	)
}
