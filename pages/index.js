import Head from "next/head"
import { JumbotronContainer } from "../containers/jumbotron"
import { AdvantagesContainer } from "../containers/advantages"
import { SubscribeContainer } from "../containers/subscribe"
import { TestimonialsContainer } from "../containers/testimonials"

export default function Home() {
	return (
		<>
			<Head>
				<title>Oxford Composite Wood - Home</title>
				<meta
					name="description"
					content="Shop for the best quality composite wood for decking and cladding in Oxford, Oxfordshire"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<JumbotronContainer />
				<TestimonialsContainer />
				<AdvantagesContainer />
				<SubscribeContainer />
			</main>
		</>
	)
}
