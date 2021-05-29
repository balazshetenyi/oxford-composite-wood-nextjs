import styled from 'styled-components'
import { LIGHT, DARK } from '../../../constants/colors'

export const Container = styled.section`
    background-color: ${LIGHT};
    color: ${DARK};
    text-align: center;
    padding: 4em 0 2.5em;
    flex: auto;

    @media(max-width: 1000px) {
        height: fit-content;
    }
`
export const Pane = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 1.5em;
    font-size: 2.2rem;

    @media(max-width: 500px) {
        font-size: 1.8rem;
    }
`
export const Text = styled.p`
    font-size: 1.2rem;
    cursor: pointer;
    width: fit-content;

    &:hover {
        text-decoration: underline;
    }
`
export const Base = styled.form`
    width: 30%;
    text-align: left;
    padding: 0 .5em;

    @media(max-width: 1000px) {
        width: 80%;
        padding: 0;
    }
`
export const Label = styled.label`
    font-size: 1.2rem;
    width: 100%;
    display: block;
`
export const Input = styled.input`
    display: block;
    font-size: 1rem;
    width: 100%;
    padding: .5em;
    margin: .5em 0 1.5em 0;
    border: 0;
`
export const Message = styled.textarea`
    display: block;
    font-size: 1rem;
    width: 100%;
    height: 6em;
    padding: .5em;
    margin: .5em 0 1.5em 0;
    border: 0;
`
export const Submit = styled.button`
    display: inline-block;
    background-color: ${DARK};
    color: ${LIGHT};
    font-size: 1rem;
    padding: .5em 1.5em;
    border: 1px solid ${DARK};
    border-radius: 3px;
    text-transform: uppercase;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: ${LIGHT};
        color: ${DARK};
        border: 1px solid ${DARK};
        cursor: pointer;
    }
`
