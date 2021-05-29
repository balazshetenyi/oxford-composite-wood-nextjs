import * as ROUTES from "../constants/routes"
import { Footer } from "../components"

export function FooterContainer() {
	return (
		<Footer>
			<Footer.Section borderBottom>
				<Footer.Group className="pages">
					<Footer.Title>Pages</Footer.Title>
					<Footer.FooterLink href={ROUTES.HOME}>Home</Footer.FooterLink>
					<Footer.FooterLink href={ROUTES.PRODUCTS}>Products</Footer.FooterLink>
					<Footer.FooterLink href={ROUTES.ABOUT}>About</Footer.FooterLink>
					<Footer.FooterLink href={ROUTES.CONTACT}>Contact us</Footer.FooterLink>
				</Footer.Group>
				<Footer.Group className="legal">
					<Footer.Title>Legal stuff</Footer.Title>
					<Footer.FooterLink href={ROUTES.PRIVACY}>Privacy policy</Footer.FooterLink>
					<Footer.FooterLink href={ROUTES.TERMS}>Terms & conditions</Footer.FooterLink>
					<Footer.FooterLink href={ROUTES.SHIPPING}>Delivery & returns</Footer.FooterLink>
				</Footer.Group>
				<Footer.Group className="contact">
					<Footer.Title>Contact us</Footer.Title>
					<Footer.Text>Oxford Composite Wood</Footer.Text>
					<Footer.Text>H2-H4 Milton Road</Footer.Text>
					<Footer.Text>Didcot OX11 7HH</Footer.Text>
					<Footer.Text>07543499917</Footer.Text>
					<Footer.Email href="mailto:oxfordcompositewood@gmail.com">
						Email Us
					</Footer.Email>
				</Footer.Group>
				<Footer.Group className="payment">
					<Footer.Title>Social media</Footer.Title>
					<Footer.Group className="social">
						<Footer.SocialLink
							href={"https://www.facebook.com/Oxford-Composite-Wood-1890987797667347"}
							target="_blank"
							rel="noreferrer"
						>
							<Footer.Icon
								src={"/images/icons/facebook.svg"}
								alt="facebook icon"
								width="24px"
								height="24px"
							/>
						</Footer.SocialLink>
						<Footer.SocialLink href="#">
							<Footer.Icon
								src={"/images/icons/instagram.svg"}
								alt="instagram icom"
								width="24px"
								height="24px"
							/>
						</Footer.SocialLink>
						<Footer.SocialLink href="#">
							<Footer.Icon
								src={"/images/icons/pinterest.svg"}
								alt="pinterest icon"
								width="24px"
								height="24px"
							/>
						</Footer.SocialLink>
					</Footer.Group>
					<Footer.Title>Payment options</Footer.Title>
					<Footer.Group className="social">
						<Footer.Icon
							className="payment"
							src={"/images/icons/paypal.svg"}
							alt="paypal icon"
							width="30px"
							height="30px"
						/>
						<Footer.Icon
							className="payment"
							src={"/images/icons/apple-pay.svg"}
							alt="apple pay icon"
							width="30px"
							height="30px"
						/>
						<Footer.Icon
							className="payment"
							src={"/images/icons/mastercard.svg"}
							alt="mastercard icon"
							width="30px"
							height="30px"
						/>
						<Footer.Icon
							className="payment"
							src={"/images/icons/visa.svg"}
							alt="visa icon"
							width="30px"
							height="30px"
						/>
						<Footer.Icon
							className="payment"
							src={"/images/icons/google-pay.svg"}
							alt="google pay icon"
							width="30px"
							height="30px"
						/>
						<Footer.Icon
							className="payment"
							src={"/images/icons/shopify-pay.svg"}
							alt="shopify icon"
							width="30px"
							height="30px"
						/>
						<Footer.Icon
							className="payment"
							src={"/images/icons/amex.svg"}
							alt="amex icon"
							width="30px"
							height="30px"
						/>
					</Footer.Group>
				</Footer.Group>
			</Footer.Section>

			<Footer.Section className="copy">
				{/* <Footer.Copyright>Powered by Shopify</Footer.Copyright> */}

				<Footer.Copyright>&copy; Designed by Balazs Hetenyi</Footer.Copyright>
			</Footer.Section>
		</Footer>
	)
}
