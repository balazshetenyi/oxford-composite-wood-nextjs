import React from "react"
import { Advantages } from "../components"

export function AdvantagesContainer() {
	return (
		<Advantages bg={"bg-advantages"}>
			<Advantages.Pane>
				<Advantages.Wrapper>
					<Advantages.Icon
						src="images/advantages/gem.svg"
						alt="icon"
						width="200"
						height="90"
					/>
					<Advantages.Text>Durability</Advantages.Text>
				</Advantages.Wrapper>
				<Advantages.Wrapper>
					<Advantages.Icon
						src="images/advantages/no-tint.svg"
						alt="icon"
						width="200"
						height="90"
					/>
					<Advantages.Text>No Painting</Advantages.Text>
				</Advantages.Wrapper>
				<Advantages.Wrapper>
					<Advantages.Icon
						src="images/advantages/recycle.svg"
						alt="icon"
						width="200"
						height="90"
					/>
					<Advantages.Text>Recyclable</Advantages.Text>
				</Advantages.Wrapper>
				<Advantages.Wrapper>
					<Advantages.Icon
						src="images/advantages/trees.svg"
						alt="icon"
						width="200"
						height="90"
					/>
					<Advantages.Text>Save Trees</Advantages.Text>
				</Advantages.Wrapper>
				<Advantages.Wrapper>
					<Advantages.Icon
						src="images/advantages/install.svg"
						alt="icon"
						width="200"
						height="90"
					/>
					<Advantages.Text>Easy to Install</Advantages.Text>
				</Advantages.Wrapper>
				<Advantages.Wrapper>
					<Advantages.Icon
						src="images/advantages/shield.svg"
						alt="icon"
						width="200"
						height="90"
					/>
					<Advantages.Text>Rot Proof</Advantages.Text>
				</Advantages.Wrapper>
				<Advantages.Wrapper>
					<Advantages.Icon
						src="images/advantages/low-main.svg"
						alt="icon"
						width="200"
						height="90"
					/>
					<Advantages.Text>Low Maintenance</Advantages.Text>
				</Advantages.Wrapper>
				<Advantages.Wrapper>
					<Advantages.Icon
						src="images/advantages/umbrella.svg"
						alt="icon"
						width="200"
						height="90"
					/>
					<Advantages.Text>Water Resistant</Advantages.Text>
				</Advantages.Wrapper>
			</Advantages.Pane>
		</Advantages>
	)
}
