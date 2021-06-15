import * as ROUTES from "../constants/routes"
import { Jumbotron } from "../components"

export function JumbotronContainer() {
	return (
		<Jumbotron>
			<Jumbotron.Container>
				<Jumbotron.Button href={ROUTES.PRODUCTS}>Our Products</Jumbotron.Button>
			</Jumbotron.Container>
		</Jumbotron>
	)
}
