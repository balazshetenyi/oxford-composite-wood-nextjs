import styled from "styled-components"
import { LIGHT, DARK } from "../../../constants/colors"

export const Container = styled.section`
	width: 100%;
	max-width: 1200px;
	background-color: ${LIGHT};
	margin: 0 auto;
	letter-spacing: 0.5px;
	line-height: 1.3;
	position: relative;
`
export const Group = styled.div`
	padding: 0 1em 3em;

	&.categoriesList {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding-top: 10px;

		/* @media (max-width: 1200px) {
			display: block;
			position: absolute;
			top: ${({ showCategories }) => (showCategories ? "0" : "-600px")};
			transition: all 300ms linear;
			background-color: ${LIGHT};
			width: 100%;
		} */
	}

	&.productsList {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`
export const Wrapper = styled.div`
	margin: ${({ margin }) => (margin ? margin : "0px")};
	overflow: hidden;
	border-radius: 3px;
	transition: all 250ms ease-in-out;

	&:hover {
		-webkit-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		-moz-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
	}
	&:active {
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
	}

	/* @media (max-width: 1200px) {
		&.categoryWrapper {
			width: 70%;
			margin: 0 auto;
		}
	} */
`

export const Pane = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;

	&.productPane {
		background-color: #fff;
		padding: 0.5em;
		box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		-webkit-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		-moz-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
	}

	& a {
		text-decoration: none;
	}
`
export const Category = styled.div`
	background: url(${({ src }) => src && src}) center / cover no-repeat;
	background-color: ${DARK};
	background-blend-mode: overlay;
	font-size: 1.3rem;
	width: 180px;
	height: 240px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	cursor: pointer;
	transition: all 250ms ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`
export const Item = styled.div`
	background: url(${({ src }) => (src ? src : "https://via.placeholder.com/200x250.jpg")}) center /
		cover no-repeat;
	height: 300px;
	cursor: pointer;
	transition: all 250ms ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`
export const Title = styled.h2`
	text-align: center;
	color: ${DARK};

	&.categoryTitle {
		display: none;

		@media (max-width: 1200px) {
			display: inline;
			grid-column: 2 / 3;
			font-size: 1.3rem;

			&:hover {
				cursor: pointer;
			}
		}
	}
`
export const ProductTitle = styled.h3`
	color: ${LIGHT};
	text-align: center;
	padding: 0 0.5em;
`
export const Textbox = styled.div`
	width: 100%;

	&.categoryTitleContainer {
		@media (max-width: 1200px) {
			display: grid;
			grid-template-columns: 1fr auto 1fr;
		}
	}
`
export const Text = styled.p`
	cursor: pointer;
	color: ${DARK};
	margin-top: 0.5em;
`
export const ItemQuantity = styled.input`
	width: 80px;
	padding: 10px;
`
export const Price = styled.p`
	display: inline-block;
	font-size: 1.2rem;
	font-weight: 600;
	color: ${DARK};
	margin-top: 0;
	padding-right: 0.2em;
	width: 100%;
	text-align: right;
`
export const AddToCart = styled.button`
	background-color: ${DARK};
	color: ${LIGHT};
	letter-spacing: 0.5px;
	border: 1px solid ${LIGHT};
	font-size: 1rem;
	padding: 0.5em 1.5em;
	width: 100%;
	cursor: pointer;
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
`
export const Icon = styled.div`
	cursor: pointer;

	@media (max-width: 1200px) {
		background: url(${({ src }) => src}) center / cover no-repeat;
		width: 20px;
		height: 20px;
		display: inline-block;
		margin: 0.5em;
		z-index: 99;
		grid-column: 3 / 4;
		align-self: center;
		transition: all 250ms;
		//justify-self: ${({ showCategories }) => (showCategories === true ? "end" : "start")};
	}
`
export const Loading = styled.p``
