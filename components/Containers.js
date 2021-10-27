import styled from "styled-components";


export const Layout = styled.div`

    height: calc(100% - 100px);
    width: calc(100% - 100px);
    // max-width: 900px;
    // margin: 50px;
    padding: min(50px, 10%);
    padding-top: 50px;
    // padding: 50px;

    ${(props) => props.width ? `width: ${props.width};` : ''}
    ${(props) => props.height ? `height: ${props.height};` : ''}

    min-height: calc(100vh - 100px);
    min-width: calc(100vw - 100px);

`

export const Flex = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${(props) => props.column ? 'flex-direction: column;' : ''}
    ${(props) => props.fullHeight ? 'height: 100%;' : ''}

    ${(props) => props.position ? `position: ${props.position};` : ''}
    ${(props) => props.top ? `top: ${props.top};` : ''}
    ${(props) => props.left ? `left: ${props.left};` : ''}
    ${(props) => props.bottom ? `bottom: ${props.bottom};` : ''}
    ${(props) => props.right ? `right: ${props.right};` : ''}
    ${(props) => props.flex ? `flex: ${props.flex};` : ''}
    ${(props) => props.wrap ? `flex-wrap: ${props.wrap};` : ''}
    ${(props) => props.transform ? `transform: ${props.transform};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    ${(props) => props.padding ? `padding: ${props.padding};` : ''}
    ${(props) => props.width ? `width: ${props.width};` : ''}
    ${(props) => props.height ? `height: ${props.height};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.minHeight ? `min-height: ${props.minHeight};` : ''}
    ${(props) => props.maxHeight ? `max-height: ${props.maxHeight};` : ''}
    ${(props) => props.textAlign ? `text-align: ${props.textAlign};` : ''}
    ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
    ${(props) => props.overflow ? `overflow: ${props.overflow};` : ''}
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
`


export const Box = styled.div`

${(props) => props.width ? `width: ${props.width};` : ''}
${(props) => props.height ? `height: ${props.height};` : ''}

    ${(props) => props.padding ? `padding: ${props.padding};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}

    ${(props) => props.textAlign ? `text-align: ${props.textAlign};` : ''}
    ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}

    ${(props) => props.maxHeight ? `max-height: ${props.maxHeight};` : ''}
    ${(props) => props.minHeight ? `min-height: ${props.minHeight};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.minWidth ? `min-width: ${props.minWidth};` : ''}

`

export const CarouselContainer = styled.div`

    

`

export const TitleContainer = styled.div`

    text-align: left;
    // height: 100px;

    color: ${({ theme }) => theme.colors.primary.purple};

    h4 {
        margin: 0;
        font-weight: 400;
        font-size: 0.75rem;
        letter-spacing: 2px;
    }
    
    h2 {
        margin: 0 0 10px;
        font-size: 2.2rem;
    }
    
    h1 {
        margin: 0 0 10px;
        font-size: 2.2rem;
    }
    
    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.text.main};
        font-weight: 400;
        font-size: 0.8rem;
    }

    ${(props) => props.margin ? `margin: ${props.margin};` : ''}

`

export const LogoMedium = styled.img`

    height: 55%;
    // width: 100%;
    ${(props) => props.width ? `width: ${props.width};` : ''}


`