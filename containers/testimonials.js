import { Testimonials } from "../components"

export function TestimonialsContainer() {
	return (
		<Testimonials>
			<Testimonials.Wrapper className="outer">
				<Testimonials.Wrapper>
					<Testimonials.Quote
						src="/images/icons/quote.svg"
						alt="quote"
						width="40"
						height="30"
					/>
					<Testimonials.Text>
						Decking has been delivered exactly on time. Thick and solid quality with
						good price. Can't ask for more. Great service !
					</Testimonials.Text>
					<Testimonials.Cite>-Richard</Testimonials.Cite>
				</Testimonials.Wrapper>
				<Testimonials.Wrapper>
					<Testimonials.Quote
						src="/images/icons/quote.svg"
						alt="quote"
						width="40"
						height="30"
					/>
					<Testimonials.Text>
						I am very happy with the outdoor tiles, quick and easy to fit and just
						looking beautiful.
					</Testimonials.Text>
					<Testimonials.Cite>-Andrew</Testimonials.Cite>
				</Testimonials.Wrapper>
			</Testimonials.Wrapper>
		</Testimonials>
	)
}
