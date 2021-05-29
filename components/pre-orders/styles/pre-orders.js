import styled from "styled-components"
import { DARK, LIGHT } from "../../../constants/colors"

export const Container = styled.section`
	margin: 0 auto;
	padding-top: 2em;
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 800px) {
		padding: 4rem;
		flex-direction: row;
		justify-content: space-evenly;
	}
`

export const ItemContainer = styled.div`
	max-width: 300px;
	width: 100%;
	height: 450px;
	background: url(${({ bg }) => (bg ? `/images/bg/${bg}.jpg` : "/images/bg/bg-bamboo.jpg")})
		center / cover no-repeat;
	background-color: #717171;
	background-blend-mode: overlay;
	cursor: pointer;
	display: grid;
	place-items: center;
	overflow: hidden;
	transition: all 1s;
	box-shadow: 5px 1px 10px;

	&:hover {
		transform: translateY(-10px) scale(1.05);
		box-shadow: 7px 3px 13px;
	}

	@media (max-width: 800px) {
		margin-bottom: 2em;
	}
`

export const Text = styled.h2`
	width: 140%;
	margin: 0;
	text-transform: uppercase;
	color: ${LIGHT};
	/* mix-blend-mode: multiply; */
	background: ${DARK};
	transform: rotate(-45deg);
	font-size: 2.25rem;
	padding: 0.5em 1.5em;
`
