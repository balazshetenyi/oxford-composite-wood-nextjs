import styled from "styled-components"
import { DARK, LIGHT } from "../../../constants/colors"

export const Container = styled.div`
	background-color: ${LIGHT};
	opacity: 0.6;
	padding: 2em 1em;
	overflow: scroll;
`
export const Wrapper = styled.div`
	width: 30%;
	margin: 0 auto 1em;

	&.outer {
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		padding-top: 1em;

		@media (max-width: 600px) {
			flex-direction: column;
			width: 100%;
		}
	}

	@media (max-width: 1200px) {
		width: 50%;
		padding: 0.5em 1em 0 1em;
	}

	@media (max-width: 630px) {
		width: 70%;
	}
	@media (max-width: 460px) {
		width: 100%;
	}
`
export const Quote = styled.img`
	aspect-ratio: attr(3vh) / attr(auto);
	width: 3vh;
`
export const Text = styled.p`
	color: ${DARK};
	font-size: 2vh;
	font-weight: 600;
	letter-spacing: 0.5px;
	font-family: "Kaushan Script", cursive;
	margin-top: 0.3em;
`
export const Cite = styled.cite`
	font-family: "Kaushan Script", cursive;
`
