import styled from 'styled-components'
import { DARK, LIGHT } from '../../../constants/colors'


export const Container = styled.section` 
    width: 80%;
    margin: 0 auto;
    letter-spacing: .5px;
    flex: auto;
    display: flex;
    flex-direction: column;
    color: ${DARK};
    padding-top: 1em;

    @media(max-width: 800px) {
        width: 100%;
        padding: 1em;
    }
`
export const Title = styled.h1`
    text-align: center;
    margin: 0 0 2em 0;
    font-size: 2rem;
`
export const Header = styled.div`
    display: flex;
    border-bottom: 1px solid ${DARK};
    padding: .5em;
    font-weight: 600;

    @media(max-width: 599px) {
        display: none;
    }
`
export const Row = styled.div`
    display: flex;
    border-bottom: 1px solid ${DARK};
    padding: .5em;

    &:last-of-type {
        margin-bottom: 2em;
    }
`
export const Column = styled.div`
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    flex: 2;

    &.product {
        flex: 6;
        padding-right: 1em;
    }

    &.itemTotal {
        justify-content: space-between;
    }

    @media(max-width: 599px) {
        width: 50%;
        padding: .6em;

        &.details {
            flex-flow: row wrap;
        }
    }
`
export const Image = styled.img`
    max-width: 50px;
    margin-right: 2em;

    &.trash {
        width: 18px;
        height: 18px;
        margin-right: unset;
        
        &:hover {
            cursor: pointer;
        }

        @media(max-width: 599px) {
            width: 20px;
            height: 20px;
            margin-bottom: 1em;
        }
    }

    @media(max-width: 599px) {
        max-width: -webkit-fill-available;
        margin: 0 auto;
    }
`
export const Text = styled.p`

    &.goBack {
        width: -webkit-fit-content;
        padding-bottom: 2px;
        border-bottom: 1px solid ${DARK};
        cursor: pointer;
    }

    @media(max-width: 599px) {
        margin-top: 0;
        width: 100%;
    }

    &.item-total {
        font-weight: 600;
    }
    &.price {
        width: 100%;
    }
`
export const Quantity = styled.input`
    font-size: 1.125rem;
    color: ${DARK};
    padding: .5em;
    width: 80px;

    @media(max-width: 599px) {
        margin-bottom: 1em;
        border: 0;
        width: 50px;
    }
`
export const Total = styled.p`
    text-align: right;
    margin-bottom: .5em;
    font-size: 1.125rem;
    font-weight: 600;
`
export const Small = styled.small`
    display: block;
    text-align: right;
    margin-bottom: 2em;
`
export const Checkout = styled.button`
    display: block;
    align-self: flex-end;
    padding: .6em 2em;
    margin-bottom: 2em;
    font-family: inherit;
    font-size: 1.2rem;
    text-transform: uppercase;
    cursor: pointer;
    background-color: ${DARK};
    border: 1px solid ${DARK};
    color: ${LIGHT};
    transition: all 200ms ease-in-out;
    
    &:hover {
        background-color: #FFC300;
        border: 1px solid #FFC300;
        color: #fff;
        -webkit-box-shadow: 5px 4px 10px 0px rgba(143,143,143,1);
        -moz-box-shadow: 5px 4px 10px 0px rgba(143,143,143,1);
        box-shadow: 5px 4px 10px 0px rgba(143,143,143,1);
    }
    &:active {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
    &:focus {
        outline: none;
    }
`