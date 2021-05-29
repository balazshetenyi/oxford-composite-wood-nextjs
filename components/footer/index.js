import Link from "next/link"
import {
	Container,
	Section,
	Group,
	FooterLink,
	SocialLink,
	Title,
	Text,
	Icon,
	Email,
	Copyright,
} from "./styles/footer"

export default function Footer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Footer.Section = function FooterSection({ children, ...restProps }) {
	return <Section {...restProps}>{children}</Section>
}

Footer.Group = function FooterGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>
}

Footer.FooterLink = function FooterFooterLink({ href, children, ...restProps }) {
	return (
		<Link href={href} passHref>
			<FooterLink>{children}</FooterLink>
		</Link>
	)
}

Footer.SocialLink = function FooterSocialLink({ href, children, ...restProps }) {
	return (
		<SocialLink href={href} {...restProps}>
			{children}
		</SocialLink>
	)
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({ to, children, ...restProps }) {
	return (
		<Text to={to} {...restProps}>
			{children}
		</Text>
	)
}

Footer.Icon = function FooterIcon({ src, ...restProps }) {
	return <Icon src={src} {...restProps} />
}

Footer.Email = function FooterEmail({ to, children, ...restProps }) {
	return (
		<Email href={to} {...restProps}>
			{children}
		</Email>
	)
}

Footer.Copyright = function FooterCopyright({ children, ...restProps }) {
	return <Copyright {...restProps}>{children}</Copyright>
}
