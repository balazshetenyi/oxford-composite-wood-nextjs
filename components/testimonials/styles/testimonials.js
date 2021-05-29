import styled from 'styled-components'
import { LIGHT } from '../../../constants/colors'

export const Container = styled.div`
    background-color: ${LIGHT};
    opacity: .6;
    padding: 0 1em;
    height: 22vh;
    overflow: scroll;
`
export const Wrapper = styled.div`
    width: 30%;
    margin: 0 auto 1em;
    
    &.outer {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 1em;
        
        @media(max-width: 850px) {
            flex-direction: column;
            width: 100%;
        }
    }
    
    @media(max-width: 1200px) {
        width: 50%;
        padding: .5em 1em 0 1em;
    }

    @media(max-width: 630px) {
        width: 70%;
    }
    @media(max-width: 460px) {
        width: 100%;
    }
`
export const Quote = styled.img`
    aspect-ratio: attr(3vh) / attr(auto);
    width: 3vh;
`
export const Text = styled.p`
    color: #00000;
    font-size: 2vh;
    font-weight: 600;
    letter-spacing: .5px;
    font-family: 'Kaushan Script', cursive;
    margin-top: .3em;
`
export const Cite = styled.cite`
    font-family: 'Kaushan Script', cursive;
`