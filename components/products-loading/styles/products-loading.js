import styled from 'styled-components'
import { SHADOW } from '../../../constants/colors'


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3em 1em;
`
export const Group = styled.div`
    display: grid;
    width: 100%;
    padding: 0 1em;

    &.categoriesGroupShadow {
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1em;
        margin-bottom: 3em;
    }

    &.itemsGroupShadow {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1em;
        margin-bottom: 3em;
    }
`
export const ImageShadow = styled.div`
    background: ${SHADOW};
    margin: 0 auto;
    margin-bottom: 1em;

    &.categoryImageShadow {
        height: 240px;
        width: 200px;
    }
    &.imageShadow {
        height: 300px;
        width: 250px;
    }
`
export const TitleShadow = styled.div`
    height: 3em;
    width: 30%;
    margin: 0 auto;
    background: ${SHADOW};
    margin-bottom: 2em;
`