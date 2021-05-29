import styled from "styled-components"
import { LIGHT } from "../../../constants/colors"

export const Container = styled.section`
	background: url(${({ bg }) => (bg ? `/images/bg/${bg}.jpg` : "/images/bg/bg-bamboo.jpg")})
		center / cover no-repeat;
	background-color: #717171;
	background-blend-mode: overlay;
	padding: 5em 0;

	@media (max-width: 800px) {
		padding: 3em 0;
	}
`
export const Pane = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 5em;
	place-items: center;

	@media (max-width: 800px) {
		grid-gap: 3em;
	}
	@media (max-width: 450px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-gap: 1em;
	}
`
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`
export const Text = styled.p`
	color: ${LIGHT};
	text-transform: uppercase;
	font-weight: 700;
	font-size: 1.3rem;
`
export const Icon = styled.img`
	aspect-ratio: attr(200px) / attr(90px);
	max-width: 200px;
	max-height: 90px;
`
