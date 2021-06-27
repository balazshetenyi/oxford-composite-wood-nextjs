import { useContext, useState, useEffect } from "react"
import * as ROUTES from "../constants/routes"
import { Header } from "../components"
import { ShopContext } from "../context/shopContext"
import Link from "next/link"

export function HeaderContainer({ productPages }) {
	const pages = productPages
	// const { cart } = useContext(ShopContext)
	const { isCartEmpty, totalQuantity, allProducts } = useContext(ShopContext)

	const [isDroppedDown, setIsDroppedDown] = useState(false)
	const [searchTerm, setSearchTerm] = useState("")
	const [searchResults, setSearchResults] = useState(null)

	useEffect(async () => {
		// Search engine
		const results = await allProducts?.filter(
			(product) =>
				product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.description.toLowerCase().includes(searchTerm.toLowerCase())
		)
		const links = await results?.map((item) => {
			return (
				<Link
					href={`/products/${item.productType.toLowerCase().split(" ").join("-")}/${item.handle}`}
					key={item.id}
				>
					<a onClick={() => setSearchTerm("")}>
						<Header.SearchResultsWrapper>
							<Header.SearchResultsImage src={item.images[0].src} />
							<Header.SearchResultsTitle>{item.title}</Header.SearchResultsTitle>
						</Header.SearchResultsWrapper>
					</a>
				</Link>
			)
		})
		setSearchResults(links)
	}, [searchTerm, allProducts])

	const handleDropdownClose = () => {
		setIsDroppedDown(false)
	}

	return (
		<Header>
			<Header.Pane>
				<Header.Contact>Oxford Composite Wood</Header.Contact>
				<Header.Contact>Tel: (+44)7543499917</Header.Contact>
				<Header.Contact as="a" className="email" href="mailto: oxfordcompositewood@gmail.com">
					oxfordcompositewood@gmail.com
				</Header.Contact>
				<Header.Logo
					className="logo"
					href={ROUTES.HOME}
					src="/images/logo/logo-main.png"
					alt="logo"
					width="80px"
					height="80px"
				/>
			</Header.Pane>

			{/* On small screens */}
			<Header.Dropdown isDroppedDown={isDroppedDown} dontShowOnLargeScreen>
				<Header.Icon
					src={isDroppedDown ? "/images/icons/close.svg" : "/images/icons/bars.svg"}
					href={"#"}
					onClick={() => setIsDroppedDown(!isDroppedDown)}
					alt={isDroppedDown ? "close icon" : "menu icon"}
					width="20px"
					height="20px"
				/>
				<Header.Icon
					href={"#"}
					src={"/images/icons/cart.svg"}
					onClick={handleDropdownClose}
					alt="cart icon"
					width="20px"
					height="20px"
				/>
				<Header.Span isCartEmpty={isCartEmpty}>{""}</Header.Span>
				<Header.Nav onClick={handleDropdownClose}>
					<Header.HeaderLink href={ROUTES.HOME} onClick={handleDropdownClose}>
						Home
					</Header.HeaderLink>
					{pages.map((page) => (
						<Header.HeaderLink href={`/products/${page}`} key={page}>
							{page.split("-").join(" ").trim()}
						</Header.HeaderLink>
					))}
					<Header.HeaderLink href={ROUTES.ABOUT}>About</Header.HeaderLink>
					<Header.HeaderLink href={ROUTES.CONTACT}>Contact us</Header.HeaderLink>
					<Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					<Header.SearchResults>{searchTerm && searchResults}</Header.SearchResults>
				</Header.Nav>
			</Header.Dropdown>

			{/* On large screens */}
			<Header.Wrapper dontShowOnSmallScreen className="dropdown-trigger">
				<Header.ProductRoutes className="dropdown-menu">
					{pages.map((page) => (
						<Header.HeaderLink href={`/products/${page}`} key={page}>
							{page.split("-").join(" ").trim()}
						</Header.HeaderLink>
					))}
				</Header.ProductRoutes>
				<Header.Nav>
					<Header.HeaderLink href={ROUTES.HOME}>Home</Header.HeaderLink>
					<Header.HeaderLink href={ROUTES.PRODUCTS}>Products</Header.HeaderLink>
					<Header.HeaderLink href={ROUTES.ABOUT}>About</Header.HeaderLink>
					<Header.HeaderLink href={ROUTES.CONTACT}>Contact us</Header.HeaderLink>
				</Header.Nav>
				<Header.Group className="login">
					<Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					<Header.SearchResults>{searchTerm && searchResults}</Header.SearchResults>
					<Header.Icon
						className="cartIcon"
						href={ROUTES.CART}
						src={"/images/icons/cart.svg"}
						alt="cart icon"
						width="20px"
						height="20px"
					/>
					<Header.Span isCartEmpty={isCartEmpty}>{totalQuantity}</Header.Span>
				</Header.Group>
			</Header.Wrapper>
		</Header>
	)
}
