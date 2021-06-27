import styled from "styled-components"
import { LIGHT, DARK, SHADOW, TEAK } from "../../../constants/colors"

export const Container = styled.header`
	background-color: ${DARK};
	color: ${LIGHT};
	text-align: right;
	transition: all 200ms;
	position: relative;
	z-index: 1000;

	&:hover {
		-webkit-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		-moz-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
	}

	@media (max-width: 900px) {
	}
`
export const Pane = styled.div`
	z-index: 100;
	position: relative;
	background-color: ${DARK};
	padding-top: 0.6em;
`
export const Contact = styled.p`
	margin: 0 1em 0.6em;
	display: inline-block;
	text-decoration: none;
	color: ${LIGHT};

	&.email:hover {
		text-decoration: underline;
	}

	@media (max-width: 900px) {
		display: block;
	}
`
export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	text-align: left;
	background-color: ${LIGHT};
	color: ${DARK};
	height: 4em;
	border-bottom: 1px solid rgba(77, 77, 77, 20%);

	@media (max-width: 900px) {
		display: ${({ dontShowOnSmallScreen }) => dontShowOnSmallScreen && "none"};
	}
`

export const Group = styled.div`
	width: fit-content;
	display: inline-block;

	&.login {
		flex: 2;
		display: flex;
		align-items: baseline;
		justify-content: flex-end;
		position: relative;
		margin-right: 1em;

		@media (max-width: 900px) {
			margin-top: 2em;
		}
	}

	@media (max-width: 900px) {
		display: ${({ dontShowOnSmallScreen }) => dontShowOnSmallScreen && "none"};
	}
`

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	position: relative;

	@media (min-width: 901px) {
		margin-left: calc(50vw - 230.6px);
	}

	@media (max-width: 900px) {
		flex-direction: column;
	}
`

export const Logo = styled.img`
	width: 80px;
	margin-left: 2em;

	&.logo {
		flex: 2;
		position: absolute;
		top: 10px;
		left: 16px;
		margin: 0;
	}

	@media (max-width: 900px) {
		margin: 0;
	}
`

export const HeaderLink = styled.a`
	font-size: 1.3em;
	font-weight: 600;
	text-decoration: none;
	text-transform: capitalize;
	color: ${DARK};
	margin: 0 0.5em;
	white-space: nowrap;

	&:hover {
		color: ${TEAK};
	}

	@media (max-width: 900px) {
		margin: 1em;

		&:first-of-type {
			margin-top: 2em;
		}
		&:last-of-type {
			margin-bottom: 2em;
		}
	}
`

export const ProductRoutes = styled.div`
	position: absolute;
	width: 100vw;
	padding: 1.5em 2em;
	background-color: ${LIGHT};
	color: ${DARK};
	left: 0;
	bottom: -60px;
	display: none;
	justify-content: center;
	z-index: 1;
	border-bottom: 1px solid ${SHADOW};

	& > a {
		text-transform: capitalize;
	}
`

export const Search = styled.div`
	display: inline-block;
	z-index: 1;
	height: 24px;

	@media (max-width: 900px) {
		margin-bottom: 2em;
	}
`

export const SearchIcon = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: 0;

	img {
		filter: brightness(0) invert(0.3);
		width: 20px;
	}

	@media (max-width: 900px) {
		margin: 0;
	}
`

export const SearchInput = styled.input`
	background-color: #fff;
	color: ${DARK};
	border: 1px solid white;
	transition: all 0.5s;
	height: 2.2em;
	font-size: 14px;
	margin-right: 1.5em;
	margin-left: ${({ active }) => (active === true ? "10px" : "0")};
	padding: ${({ active }) => (active === true ? "0 10px" : "0")};
	opacity: ${({ active }) => (active === true ? "1" : "0")};
	width: ${({ active }) => (active === true ? "200px" : "0px")};

	@media (max-width: 900px) {
		margin: 0;
	}
`
export const SearchResults = styled.div`
	background: #ededed;
	position: absolute;
	top: 410px;
	width: 100%;
	z-index: 1;

	& a {
		text-decoration: none;
		letter-spacing: 0.5px;
		color: ${DARK};

		&:hover {
			font-weight: 600;
			text-decoration: underline;
		}
	}

	@media (min-width: 901px) {
		top: 2.7em;
		left: 1em;
	}
`
export const SearchResultsWrapper = styled.div`
	display: flex;
	align-items: center;
	background: #fff;
	margin: 0.5em 1em;
`
export const SearchResultsImage = styled.img`
	height: 60px;
	margin-right: 1em;
`
export const SearchResultsTitle = styled.p`
	font-size: 0.9rem;
`
export const Icon = styled.img`
	width: 20px;
	height: 20px;
	margin: 0 1em;

	&.cartIcon {
		margin-left: 0;
	}
`

export const Dropdown = styled.div`
	background-color: ${LIGHT};
	padding: 1em 0;
	position: relative;
	overflow: ${({ isDroppedDown }) => (isDroppedDown === true ? "scroll" : "hidden")};
	transition: all 0.5s;
	height: ${({ isDroppedDown }) => (isDroppedDown === true ? "100vh" : "50px")};

	@media (min-width: 901px) {
		display: ${({ dontShowOnLargeScreen }) => dontShowOnLargeScreen && "none"};
	}
`

export const Span = styled.span`
	display: ${({ isCartEmpty }) => (isCartEmpty === true ? "none" : "flex")};
	justify-content: center;
	align-items: center;
	width: 16px;
	height: 16px;
	background-color: ${DARK};
	color: ${LIGHT};
	font-family: inherit;
	border-radius: 50%;
	position: absolute;
	top: -5px;
	right: 8px;
	font-size: 10px;
	font-weight: 600;

	@media (max-width: 900px) {
		top: 7px;
	}
`
