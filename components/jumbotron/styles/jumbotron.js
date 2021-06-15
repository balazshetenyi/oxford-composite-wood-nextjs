import styled from "styled-components"
import { LIGHT, DARK } from "../../../constants/colors"

export const Background = styled.section`
	background: url(${({ src }) => (src ? `/images/bg/${src}.jpg` : "/images/bg/bg-01.png")}) left /
		cover no-repeat;
	background-color: ${DARK};
	background-blend-mode: hard-light;
	display: flex;
	align-items: center;
	height: calc(100vh - 6em);
`

export const Container = styled.div`
	width: 100%;
	text-align: center;
`

export const Title = styled.h1`
	font-size: 4vh;
	color: ${LIGHT};
	margin: 0;

	@media (min-width: 600px) {
		padding: 0 1em;
		font-size: 6vh;
	}
	@media (min-width: 1200px) {
		padding: 0 1em;
		font-size: 8vh;
	}
`

export const SubTitle = styled.h2`
	//font-size: 2.5rem;
	color: ${LIGHT};
	margin-bottom: 2em;

	@media (min-width: 1200px) {
		font-size: 1.8rem;
		padding: 0 1em;
	}
`

export const Button = styled.a`
	display: inline-block;
	background-color: ${LIGHT};
	border: 0;
	border: 1px solid transparent;
	border-radius: 3px;
	padding: 0.5em 1.5em;
	margin-bottom: 20vh;
	text-transform: uppercase;
	font-size: 2.2vh;
	color: ${DARK};
	cursor: pointer;
	transition: all 200ms;

	&:hover {
		background-color: ${DARK};
		color: ${LIGHT};
		border: 1px solid ${LIGHT};
		-webkit-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		-moz-box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
		box-shadow: 5px 4px 10px 0px rgba(143, 143, 143, 1);
	}
	&:active {
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		outline: 1px solid ${LIGHT};
	}

	@media (max-width: 1200px) {
		font-size: 1.2rem;
	}
`
