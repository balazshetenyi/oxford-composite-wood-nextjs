import styled from 'styled-components'
import { DARK, LIGHT } from '../../../constants/colors'


export const Container = styled.section`
    background-color: ${LIGHT};
    padding: 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(77,77,77, 20%);
`
export const Title = styled.h2`
    color: ${DARK};
    font-size: 1.6rem;

    @media(max-width: 1200px) {
        font-size: 1.4rem;
    }

    @media(max-width: 500px) {
        font-size: 1.2rem;
    }
`
export const SubTitle = styled.p`
    color: ${DARK};
    margin-top: 0;
    font-size: 1.125rem;

    @media(max-width: 1200px) {
        font-size: 1rem;
    }
`
export const Form = styled.form`
    padding: 1.25em 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;

    @media(max-width: 500px) {
        display: block;
    }
`

export const Input = styled.input`
    font-size: 1rem;
    padding: .5em 1.5em;
    border: 1px solid ${DARK};
    border-radius: 3px 0 0 3px;
    width: 20%;
    height: 3em;
    color: ${DARK};

    @media(max-width: 1200px) {
        font-size: 1rem;
        width: unset;
        height: 2.3em;
    }

    @media(max-width: 500px) {
        width: 100%;
    }
`
export const Button = styled.button`
    background-color: ${DARK};
    border: 1px solid ${DARK};
    border-radius: 0 3px 3px 0;
    padding: .5em 1.5em;
    margin: 0;
    color: ${LIGHT};
    font-size: 1.125rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
        color: ${DARK};
        background-color: ${LIGHT};
        border: 1px solid ${DARK};
        -webkit-box-shadow: 5px 4px 10px 0px rgba(143,143,143,1);
        -moz-box-shadow: 5px 4px 10px 0px rgba(143,143,143,1);
        box-shadow: 5px 4px 10px 0px rgba(143,143,143,1);
    }
    &:active {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        outline: 1px solid ${LIGHT};
    }

    @media(max-width: 1200px) {
        font-size: 1.2rem;
        padding: 0 1em;
    }

    @media(max-width: 500px) {
        width: 100%;
        padding: .3em;
    }
`