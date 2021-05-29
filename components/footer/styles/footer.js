import styled from "styled-components"
import { Link as NextLink } from "next/link"
import { LIGHT, DARK } from "../../../constants/colors"

export const Container = styled.section`
	background-color: ${DARK};
	padding: 1.5em 1em 0.5em 1em;
	border-top: 1px solid rgba(77, 77, 77, 20%);
	flex-grow: 0;
	letter-spacing: 0.5px;

	@media (max-width: 1200px) {
		padding: 1em 0.5em;
	}
`
export const Section = styled.div`
	max-width: 1200px;
	display: flex;
	justify-content: space-evenly;
	border-bottom: ${({ borderBottom }) => (borderBottom ? `1px solid rgba(247,247,247, 20%)` : 0)};
	margin-bottom: ${({ borderBottom }) => borderBottom && ".5em"};
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"pages legal"
			"contact payment";
	}

	&.copy {
		display: flex;
		justify-content: center;
	}
`
export const Group = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100vw / 6);
	position: relative;
	margin-bottom: 1.5em;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 3em;
	}

	@media (max-width: 600px) {
		padding: 0 1em;
	}

	&.social {
		flex-flow: row wrap;
		width: 100%;
		padding: 0;
	}
`
export const FooterLink = styled.a`
	color: ${LIGHT};
	font-size: 1rem;
	text-decoration: none;
	margin-bottom: 1em;

	&:hover {
		text-decoration: underline;
	}

	@media (max-width: 500px) {
		font-size: 0.8rem;
	}
`
export const SocialLink = styled.a``
export const Title = styled.h2`
	margin-top: 0;
	font-size: 1.2rem;
	color: ${LIGHT};
	margin-bottom: 1em;
`
export const Text = styled.p`
	font-size: 1rem;
	margin-top: 0;
	color: ${LIGHT};

	@media (max-width: 500px) {
		font-size: 0.8rem;
	}
`
export const Email = styled.a`
	font-size: 1rem;
	color: ${LIGHT};
`
export const Icon = styled.img`
	width: 24px;
	margin-right: 1em;

	&.payment {
		width: 30px;
		height: 30px;
		margin-bottom: 0.5em;
	}
`
export const Copyright = styled.small`
	font-size: 0.9rem;
	color: ${LIGHT};
	padding: 0.5em 0;

	@media (max-width: 500px) {
		font-size: 0.7rem;
	}
`
