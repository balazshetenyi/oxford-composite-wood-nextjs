import styled from 'styled-components'
import { LIGHT, DARK } from '../../../constants/colors'


export const Container = styled.section`
    background: ${LIGHT};
    max-width: 1200px;
    margin: 0 auto;
    letter-spacing: .5px;
    line-height: 1.3;
`
export const Row = styled.div`
    display: flex;
    width: 100%;
    height: 320px;
    background-color: ${({ bg }) => bg ? bg : '#fff'};

    @media(max-width: 740px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        height: 600px;
    }
`
export const Column = styled.div`
    width: 50%;

    @media(max-width: 740px) {
        width: 100%;

        &.picture {
            grid-row: 1 / 2;
        }
        &.text {
            grid-row: 2 / 3;
        }
    }
`
export const Title = styled.h1`
    margin-top: 0;
    font-size: 1.8rem;

    @media(max-width: 1200px) {
        font-size: 1.4rem;
    }
`
export const SubTitle = styled.p`
    font-size: 1.125rem;

    @media(max-width: 1200px) {
        font-size: 1rem;
    }
`
export const TextBox = styled.div`
    height: 100%;
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ color }) => color ? color : DARK}
`

export const Image = styled.div`
    background: url(${({ src }) => (src ? `/images/bg/${src}.jpg` : '/images/bg/bg-nature01.jpg')}) top left / cover no-repeat;
    height: 100%;
`