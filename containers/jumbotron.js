import * as ROUTES from "../constants/routes"
import { Jumbotron } from "../components"
import Image from "next/image"

export function JumbotronContainer() {
	return (
		<Jumbotron>
			<Jumbotron.Container>
				{/* <Image className="background-image" src="/images/bg/bg-01.png" layout="fill" /> */}
				<Jumbotron.Button href={ROUTES.PRODUCTS}>Our Products</Jumbotron.Button>
			</Jumbotron.Container>
		</Jumbotron>
	)
}
