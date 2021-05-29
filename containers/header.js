import React, { useContext, useState, useEffect } from "react"
import * as ROUTES from "../constants/routes"
import { Header } from "../components"
import { ShopContext } from "../context/shopContext"

export function HeaderContainer() {
	const { cart } = useContext(ShopContext)
	const isCartEmpty = true
	const [isDroppedDown, setIsDroppedDown] = useState(false)
	const [searchTerm, setSearchTerm] = useState("")
	const [searchResults, setSearchResults] = useState(null)

	// useEffect(() => {
	//     // Search engine
	//     const results = products && products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()))
	//     const links = results && results.map(item => {
	//         return (
	//             <NextLink to={`/products/${item.id}`} key={item.id} onClick={() => setSearchTerm('')}>
	//                 <Header.SearchResultsWrapper>
	//                     <Header.SearchResultsImage src={item.images[0].src} />
	//                     <Header.SearchResultsTitle>{item.title}</Header.SearchResultsTitle>
	//                 </Header.SearchResultsWrapper>
	//             </NextLink>
	//         )
	//     })
	//     setSearchResults(links)
	// }, [searchTerm, products])

	return (
		<Header>
			<Header.Pane>
				<Header.Contact>Oxford Composite Wood</Header.Contact>
				<Header.Contact>Tel: (+44)7543499917</Header.Contact>
				<Header.Contact
					as="a"
					className="email"
					href="mailto: oxfordcompositewood@gmail.com"
				>
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
					onClick={() => setIsDroppedDown(false)}
					alt="cart icon"
					width="20px"
					height="20px"
				/>
				<Header.Span isCartEmpty={isCartEmpty}>{cart.length}</Header.Span>
				<Header.Nav>
					<Header.HeaderLink href={ROUTES.HOME} onClick={() => setIsDroppedDown(false)}>
						Home
					</Header.HeaderLink>
					<Header.HeaderLink
						href={ROUTES.PRODUCTS}
						onClick={() => setIsDroppedDown(false)}
					>
						Products
					</Header.HeaderLink>
					<Header.HeaderLink href={ROUTES.ABOUT} onClick={() => setIsDroppedDown(false)}>
						About
					</Header.HeaderLink>
					<Header.HeaderLink
						href={ROUTES.CONTACT}
						onClick={() => setIsDroppedDown(false)}
					>
						Contact us
					</Header.HeaderLink>
					<Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					<Header.SearchResults>{searchTerm && searchResults}</Header.SearchResults>
				</Header.Nav>
			</Header.Dropdown>

			{/* On large screens */}
			<Header.Wrapper dontShowOnSmallScreen>
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
						onClick={() => setIsDroppedDown(false)}
						width="20px"
						height="20px"
					/>
					<Header.Span isCartEmpty={isCartEmpty}>{cart.length}</Header.Span>
				</Header.Group>
			</Header.Wrapper>
		</Header>
	)
}
