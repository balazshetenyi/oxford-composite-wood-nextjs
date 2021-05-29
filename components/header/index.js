import { useState, useRef } from "react"
import Link from "next/link"
import {
	Container,
	Wrapper,
	Pane,
	Contact,
	Group,
	Nav,
	HeaderLink,
	Search,
	SearchIcon,
	SearchInput,
	SearchResults,
	SearchResultsWrapper,
	SearchResultsImage,
	SearchResultsTitle,
	Icon,
	Logo,
	Span,
	Dropdown,
} from "./styles/header"

export default function Header({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>
}

Header.Pane = function HeaderPane({ children, ...restProps }) {
	return <Pane {...restProps}>{children}</Pane>
}

Header.Contact = function HeaderContact({ children, ...restProps }) {
	return <Contact {...restProps}>{children}</Contact>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>
}

Header.Nav = function HeaderNav({ children, ...restProps }) {
	return <Nav {...restProps}>{children}</Nav>
}

Header.HeaderLink = function HeaderHeaderLink({ href, children, ...restProps }) {
	return (
		<Link href={href} {...restProps} passHref>
			<HeaderLink>{children}</HeaderLink>
		</Link>
	)
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
	const [searchActive, setSearchActive] = useState(false)
	const ref = useRef(null)

	const handleClick = () => {
		setSearchActive(!searchActive)
		setSearchTerm("")
		ref.current.focus()
	}

	return (
		<Search {...restProps}>
			<SearchIcon onClick={handleClick}>
				<img src="/images/icons/search.svg" alt="search" width="20" height="20" />
			</SearchIcon>
			<SearchInput
				aria-label="productSearchField"
				ref={ref}
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder="Search products..."
				active={searchActive}
			/>
		</Search>
	)
}

Header.SearchResults = function HeaderSearchResults({ children, ...restProps }) {
	return <SearchResults {...restProps}>{children}</SearchResults>
}

Header.SearchResultsWrapper = function HeaderSearchResultsWrapper({ children, ...restProps }) {
	return <SearchResultsWrapper {...restProps}>{children}</SearchResultsWrapper>
}

Header.SearchResultsImage = function HeaderSearchResultsImage({ src, ...restProps }) {
	return <SearchResultsImage src={src} {...restProps} />
}

Header.SearchResultsTitle = function HeaderSearchResultsTitle({ children, ...restProps }) {
	return <SearchResultsTitle {...restProps}>{children}</SearchResultsTitle>
}

Header.Logo = function HeaderCartLogo({ href, ...restProps }) {
	return (
		<Link href={href}>
			<a>
				<Logo {...restProps} />
			</a>
		</Link>
	)
}

Header.Icon = function HeaderCartIcon({ href, src, ...restProps }) {
	return (
		<Link href={href}>
			<a>
				<Icon src={src} {...restProps} />
			</a>
		</Link>
	)
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Span = function HeaderSpan({ children, ...restProps }) {
	return <Span {...restProps}>{children}</Span>
}
