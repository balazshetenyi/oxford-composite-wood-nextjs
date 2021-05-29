import styled from 'styled-components'
import { DARK } from '../../../constants/colors'


export const Container = styled.div`
    display: block;
    border: 1px solid ${DARK};
    padding: .5em;
    font-size: 1rem;
`
export const Title = styled.p`
    margin-top: 0;
    letter-spacing: .5px;
    line-height: 1.3;
    font-weight: 600;
`
export const Description = styled.p`
    margin: 0;
    letter-spacing: .5px;
    line-height: 1.3;
    font-size: .8rem;
`
export const Result = styled.p`
    
`
export const InputField = styled.input`
    width: 4em;
    font-size: 1rem;
    padding: .5em;
    margin: 0 .5em 1em;
    border: 1px solid ${DARK};
    color: ${DARK};
`
export const Submit = styled.button`
    display: block;
    font-size: 1.2rem;
    font-family: inherit;
    font-weight: 600;
    border: none;
    background-color: #FFC300;
    color: #fff;
    padding: .5em 1.5em;
    letter-spacing: .5px;
    margin-bottom: 1em;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        opacity: .6;
        -webkit-box-shadow: 5px 4px 10px 0px rgba(143,143,143,1);
        -moz-box-shadow: 5px 4px 10px 0px rgba(143,143,143,1);
        box-shadow: 5px 4px 10px 0px rgba(143,143,143,1);
    }
    &:active {
        opacity: .6;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
    &:focus {
        outline: none;
    }
`