import Link from "next/link"
import { PreOrders } from "../components"
import * as ROUTES from "../constants/routes"

export function PreOrdersContainer() {
	return (
		<PreOrders>
			<Link href={ROUTES.PRODUCTS} passHref>
				<a>
					<PreOrders.ItemContainer bg={"bg-advantages"}>
						<PreOrders.Text>Pre-orders</PreOrders.Text>
					</PreOrders.ItemContainer>
				</a>
			</Link>
			<Link href={ROUTES.PRODUCTS} passHref>
				<a>
					<PreOrders.ItemContainer bg={"bg-decking"}>
						<PreOrders.Text>Free samples</PreOrders.Text>
					</PreOrders.ItemContainer>
				</a>
			</Link>
		</PreOrders>
	)
}
