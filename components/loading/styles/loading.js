import styled from 'styled-components'
import { SHADOW } from '../../../constants/colors'


export const Container = styled.section`
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3em 1em;
`
export const Group = styled.div`
    width: 50%;
    padding: 0 1em;
`
export const ImageShadow = styled.div`
    height: 500px;
    width: 400px;
    background: ${SHADOW};
    margin: 0 auto;
    margin-bottom: 1em;
`
export const ImagesShadow = styled.div`
    height: 200px;
    width: 500px;
    background: ${SHADOW};
    margin: 0 auto;
`
export const TitleShadow = styled.div`
    height: 4em;
    width: 100%;
    background: ${SHADOW};
    margin-bottom: 1em;
`
export const DescriptionShadow = styled.div`
    height: 5em;
    width: 100%;
    background: ${SHADOW};
    margin-bottom: 1em;
`
export const QuantityShadow = styled.div`
    height: 4em;
    width: 30%;
    background: ${SHADOW};
    margin-bottom: 1em;
`
export const PriceShadow = styled.div`
    height: 3em;
    width: 60%;
    background: ${SHADOW};
    margin-bottom: 1em;
    margin-left: auto;
`
export const ButtonShadow = styled.div`
    height: 3em;
    width: 100%;
    background: ${SHADOW};
    margin-bottom: 1em;
`
export const CalculatorShadow = styled.div`
    height: 10em;
    width: 100%;
    background: ${SHADOW};
    margin-bottom: 1em;
`


