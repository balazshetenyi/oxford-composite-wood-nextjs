import styled from "styled-components"
import Image from "next/image"
import { LIGHT, DARK, GREY, TEAK, CREAM, BROWN } from "../../../constants/colors"

export const Container = styled.section`
	max-width: 1200px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2em;
	margin: 0 auto;
	color: ${DARK};
	justify-content: center;
	padding: 1em 2em;

	@media (max-width: 720px) {
		padding: 1em;
	}
`
export const Group = styled.div`
	padding: 1em;
	padding-bottom: 0;

	&.images {
		@media (max-width: 700px) {
			grid-column: 1 / 3;
			place-self: center;
			display: ${({ hideOnSmallScreen }) => hideOnSmallScreen && "none"};
		}
	}

	&.details {
		@media (max-width: 820px) {
			width: 100%;
		}
		@media (max-width: 700px) {
			grid-column: 1 / 3;
			grid-row: 1/2;
			place-self: center;
		}
	}

	&.accessories {
		grid-column: 1 / 3;
		padding-top: 0;
	}
`
export const ImageContainer = styled.div`
	height: 700px;
	display: ${({ showOnSmallScreen }) => showOnSmallScreen && "none"};

	& > .imageLarge {
		-webkit-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		-moz-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
	}

	@media (max-width: 820px) {
		width: 90vw;
	}

	@media (max-width: 700px) {
		display: ${({ showOnSmallScreen }) => showOnSmallScreen && "block"};
		margin-bottom: 0;
	}
`
export const ImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 70%;
	margin-bottom: 5%;
	position: relative;

	@media (max-width: 700px) {
		height: 90%;
	}
`
export const ImagesWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 25%;
	display: flex;
	justify-content: space-evenly;

	& img {
		max-height: 100%;
		cursor: pointer;
		transition: all 250ms ease-in-out;

		&:hover {
			transform: scale(1.1);
			-webkit-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
			-moz-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
			box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		}
		&:active {
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
			box-shadow: none;
		}
	}
`
export const StyledImage = styled(Image)`
	// margin-right: 1em !important;
	//margin-bottom: 1em !important;
`
export const Title = styled.h1`
	font-size: 1.6em;
	margin-top: 0;
`
export const Text = styled.p`
	margin-top: 0;
	margin-bottom: 0.3em;
	width: 100%;

	&.quantityTitle {
		text-align: right;
	}
`
export const Price = styled.h2`
	margin: 0;
	text-align: right;
`
export const Small = styled.small`
	display: block;
	margin-bottom: 1.5em;
	text-align: right;
`
export const Filter = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		"colour colour colour"
		"len len quantity";
`
export const Quantity = styled.div`
	display: inline-block;
	grid-area: quantity;
	justify-self: end;
	margin-bottom: 1em;

	@media (max-width: 800px) {
		margin-right: auto;
	}
`
export const ColorPicker = styled.div`
	display: flex;
	flex-wrap: wrap;
	grid-area: colour;
	height: min-content;
	align-self: center;
	margin-bottom: 1em;
`
export const Color = styled.div`
	display: block;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	margin-right: 0.5em;
	cursor: pointer;

	&.dark-grey {
		background-color: ${DARK};
	}
	&.grey {
		background-color: ${GREY};
	}
	&.brown {
		background-color: ${BROWN};
	}
	&.teak {
		background-color: ${TEAK};
	}
	&.cream {
		background-color: ${CREAM};
	}
`
export const LengthFilter = styled.div`
	grid-area: len;
`
export const Length = styled.div`
	height: 2em;
	width: ${({ length }) => (length === "2400" ? "10em" : "15em")};
	background-color: ${DARK};
	margin-bottom: 0.5em;
	color: ${LIGHT};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&.active {
		border: 3px solid #ffc300;
		color: #ffc300;
	}
`

export const Select = styled.input`
	padding: 10px;
	font-size: 1.2rem;
	width: 80px;
	color: inherit;
	border: 1px solid ${DARK};
`
export const AddToCart = styled.button`
	display: block;
	width: 100%;
	min-width: 200px;
	padding: 0.5em;
	margin-bottom: 1em;
	font-family: inherit;
	font-size: 1.2rem;
	text-transform: uppercase;
	cursor: pointer;
	background-color: ${LIGHT};
	border: 1px solid ${DARK};
	transition: all 200ms ease-in-out;

	&:hover {
		background-color: #ffc300;
		border: 1px solid #ffc300;
		color: #fff;
		-webkit-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		-moz-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
	}
	&:active {
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
	}
	&:focus {
		outline: none;
	}

	@media (max-width: 800px) {
		width: 100%;
	}
`
export const GoToCheckout = styled(AddToCart)`
	background-color: ${DARK};
	color: ${LIGHT};
`
export const MorePaymentOptions = styled.a``
export const Description = styled.p`
	line-height: 1.5;
	letter-spacing: 0.5px;
	margin-top: 0;
`
export const Subtitle = styled.h2`
	text-align: center;
`
export const Row = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-gap: 1em;
	margin-bottom: 4em;
`
export const Item = styled.div`
	width: 100%;
`
export const BackToProducts = styled.button`
	margin-bottom: 4em;
	padding: 0.5em 1.5em;
	font-family: inherit;
	font-size: 1.3rem;
	text-transform: uppercase;
	cursor: pointer;
	background-color: ${LIGHT};
	border: 1px solid ${DARK};
	grid-column: 1/3;
	margin-left: auto;
	margin-right: auto;

	&:hover {
		background-color: ${DARK};
		color: ${LIGHT};
		-webkit-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		-moz-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
	}
	&:active {
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
	}
`
