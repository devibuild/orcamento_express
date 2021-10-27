import styled from "styled-components";


export const StandardBox = styled.div`

    cursor: pointer;

    // background: ${(props) => props.color ? props.theme.colors.primary[props.color] : props.theme.colors.primary.pink };
    border: solid 2px ${({ theme }) => theme.colors.text.main };
    color: ${({ theme }) => theme.colors.text.main };
    font-size: 0.85rem;
    
    width: 100%;
    
    padding: 8px;
    margin: 0 3px 0 0;
    
    &:last-child {
        margin: 0;
    }

    &:hover {
        ${(props) => props.color ? `
        background: ${props.theme.colors.primary[props.color]};
        border: solid 2px ${props.theme.colors.primary[props.color]};
        color: ${(props.theme.colors.text.white)};
        opacity: 0.8;
        * {
            opacity: 1;
        }
    ` : ``}
    }
    
    
    ${(props) => props.active && props.color ? `
        background: ${props.theme.colors.primary[props.color]};
        border: solid 2px ${props.theme.colors.primary[props.color]};
        color: ${props.theme.colors.text.white };
    ` : ``}

    ${(props) => props.small ? `
        width: calc(100% - 5px);
        padding: 5px 2px;
    ` : ''}

`

export const FinishingPatternContainer = styled.div`
    border-top: dashed 1px ${({ theme }) => theme.colors.text.neutral200 };
    padding-top: 10px;
    // margin-top: 30px;

    text-align: left;
`