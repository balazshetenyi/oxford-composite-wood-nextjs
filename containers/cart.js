import React, { useContext, useState, useEffect } from 'react'
import Media from 'react-media'
import { useHistory } from 'react-router-dom'
import { PRODUCTS } from '../constants/routes'
import { Cart } from '../components'
import { ProductContext } from '../context/productContext'
import { Storefront } from '../context/shopify'

export function CartContainer() {
    const { cart, dispatch } = useContext(ProductContext)
    const [cartTotal, setCartTotal] = useState(null)
    const history = useHistory()

    useEffect(() => {
        getCartTotal()
    }, [cart])

    // Creating a checkout for shopify
    const checkout = (cart) => {
        let checkoutURL
        // Create an empty checkout
        Storefront.checkout.create().then((checkout) => {
            // Do something with the checkout
            checkoutURL = checkout.webUrl
            const checkoutId = checkout.id
            const itemsToAdd = cart.map(item => {
                return {
                    variantId: item.variants[0].id,
                    quantity: parseInt(item.quantity)
                }
            })
            // Add an item to the checkout
            Storefront.checkout.addLineItems(checkoutId, itemsToAdd).then((checkout) => {
                // Do something with the updated checkout
                redirect(checkoutURL)
            });
        })
    }
    // Redirect page to shopify's checkout page
    const redirect = (url) => {
        window.location.href = url
    }

    // Getting total values
    const getItemTotal = (item) => {
        const total = item.variants[0].price * item.quantity
        return total.toFixed(2)
    }

    const getCartTotal = () => {
        const itemsTotal = cart.map(item => item.variants[0].price * item.quantity)
        const totalValue = itemsTotal.reduce((acc, value) => { return acc + value }, 0).toFixed(2)
        setCartTotal(totalValue)
    }

    return (
        <Cart>
            <Cart.Title>Shopping Cart</Cart.Title>
            <Cart.Header>
                <Cart.Column className='product'>Product</Cart.Column>
                <Cart.Column>Price</Cart.Column>
                <Cart.Column>Quantity</Cart.Column>
                <Cart.Column>Total</Cart.Column>
            </Cart.Header>
            {/* -------------------------- */}
            {/* Show this on small screens */}
            {cart && <Media query="(max-width: 599px)" render={() => (
                cart.map(item => (
                    <Cart.Row key={item.id}>
                        <Cart.Column className='image'>
                            <Cart.Image src={item.images[0].src} alt={item.title} />
                        </Cart.Column>
                        <Cart.Column className='details'>
                            <Cart.Text>{item.title}</Cart.Text>
                            <Cart.Quantity type='number' onChange={({ target }) => dispatch({ type: 'SET_QUANTITY', value: { id: item.id, quantity: target.value } })} value={item.quantity} />
                            <Cart.Image src={'/images/icons/trash.svg'} className='trash' onClick={() => dispatch({ type: 'REMOVE_ITEM', value: { id: item.id } })} />
                            <Cart.Text className='price'>Price: £{item.variants[0].price}/board</Cart.Text>
                            <Cart.Text className='item-total'>Total: £{getItemTotal(item)}</Cart.Text>
                        </Cart.Column>
                    </Cart.Row>
                ))
            )}
            />
            }
            {/* -------------------------------------  */}
            {/* Show this on medium and large screens */}
            {cart && <Media query="(min-width: 600px)" render={() => (
                cart.map(item => (
                    <Cart.Row key={item.id}>
                        <Cart.Column className='product'>
                            <Cart.Image src={item.images[0].src} alt={item.title} />
                            <Cart.Text>{item.title}</Cart.Text>
                        </Cart.Column>
                        <Cart.Column>
                            <Cart.Text>£{item.variants[0].price}</Cart.Text>
                        </Cart.Column>
                        <Cart.Column>
                            <Cart.Quantity type='number' onChange={({ target }) => dispatch({ type: 'SET_QUANTITY', value: { id: item.id, quantity: target.value } })} value={item.quantity} />
                        </Cart.Column>
                        <Cart.Column className='itemTotal'>
                            <Cart.Text>£{getItemTotal(item)}</Cart.Text>
                            <Cart.Image src={'/images/icons/trash.svg'} className='trash' onClick={() => dispatch({ type: 'REMOVE_ITEM', value: { id: item.id } })} />
                        </Cart.Column>
                    </Cart.Row>
                ))
            )}
            />
            }

            <Cart.Total>Subtotal: £{cartTotal}</Cart.Total>
            <Cart.Small>Tax included. Shipping calculated at checkout.</Cart.Small>
            <Cart.Checkout onClick={() => checkout(cart)}>Checkout</Cart.Checkout>
            <Cart.Text className='goBack' onClick={() => history.push(PRODUCTS)}>Back to products</Cart.Text>
        </Cart>
    )
}