import { About } from "../components"

export function AboutContainer() {
	return (
		<About>
			<About.Row>
				<About.Column className="picture">
					<About.Image src={"bg-nature01"} />
				</About.Column>
				<About.Column className="text">
					<About.TextBox>
						<About.Title>Saving the forest, saving the planet</About.Title>
						<About.SubTitle>
							Our composite decking is 100% environmentally friendly. Made of recycled
							wood and recycled plastic.
						</About.SubTitle>
					</About.TextBox>
				</About.Column>
			</About.Row>
			<About.Row>
				<About.Column className="text">
					<About.TextBox>
						<About.Title>
							Innovative product that combines the naturalness of wood with modern
							technology
						</About.Title>
						<About.SubTitle>
							The combination of wood and plastic guarantees the creation of a
							material resistant to water and atmospheric conditions.
						</About.SubTitle>
					</About.TextBox>
				</About.Column>
				<About.Column className="picture">
					<About.Image src={"bg-bamboo"} />
				</About.Column>
			</About.Row>
			<About.Row>
				<About.Column className="picture">
					<About.Image src={"bg-decking"} />
				</About.Column>
				<About.Column className="text">
					<About.TextBox>
						<About.Title>It's easy to maintain and use</About.Title>
						<About.SubTitle>
							Our boards consist of 60% wood fibres and 30% high-density polyethylene,
							remaining 10% are stabilisers and UV filters.
						</About.SubTitle>
					</About.TextBox>
				</About.Column>
			</About.Row>
			<About.Row>
				<About.Column className="text">
					<About.TextBox>
						<About.Title>
							Composite boards are often chosen as an alternative to classic timber
						</About.Title>
						<About.SubTitle>
							Their unquestionable advantage is easy care. Composite decking, cladding
							and tiles are the perfect solution for comfort, low maintenance,
							attractive design and high quality material.
						</About.SubTitle>
					</About.TextBox>
				</About.Column>
				<About.Column className="picture">
					<About.Image src={"bg-terrace"} />
				</About.Column>
			</About.Row>
		</About>
	)
}
