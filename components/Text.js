import styled from "styled-components";


export const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.primary.purple };

    font-size: 4rem;
    font-weight: 300;
`

export const H2 = styled.h2`
    color: ${({ theme }) => theme.colors.text.neutral600 };

    font-size: 2rem;
    font-weight: 300;

    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
    ${(props) => props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
`

export const H3 = styled.h3`
    color: ${({ theme }) => theme.colors.text.neutral600 };

    font-weight: 700;

    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
`

export const Title2 = styled.h2`
${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
${(props) => props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}
`

export const Title3 = styled.h3`
${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
${(props) => props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}
`

export const Parag = styled.p`

color: ${({ theme }) => theme.colors.text.neutral600 };
${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}

font-weight: 400;

${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}

${(props) => props.margin ? `margin: ${props.margin};` : ''}
${(props) => props.width ? `width: ${props.width};` : ''}
`

export const ExplainingP = styled.p`

    color: ${({ theme }) => theme.colors.text.main};
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 2;
    text-align: left;
    margin: 8px 0;
    

    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}

    `