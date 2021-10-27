import styled from "styled-components";


export const StyledSelect = styled.select`
    width: 100%;
    height: 40px;

    color: inherit;

    font: inherit;
    font-size: 16px;
    // padding: 1px;

    border: inherit;
    border-left: none;
    border-right: none;

    // prevent safari bug::
    -webkit-appearance: none;
    
    &:focus {
        border: 0.5px solid ${({ theme }) => theme.colors.primary.purple};
        border-left: none;
        border-right: none;
        
        outline: none;
        color: inherit;


        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: ${({ theme }) => theme.colors.primary.purple};
            opacity: 1; /* Firefox */
          }
          
          &:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: ${({ theme }) => theme.colors.primary.purple};
          }
          
          &::-ms-input-placeholder { /* Microsoft Edge */
            color: ${({ theme }) => theme.colors.primary.purple};
          }
    }

`


export const SelectContainer = styled.div`
    background: inherit;

    width: 100%;
    height: 60px;
    padding: 19px;

    // border-radius: 8px;
    border: 0.5px solid ${({ theme }) => theme.colors.primary.dark};

    font: inherit;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.neutral400};

    
    display: flex;
    align-items: center;
    
    &:focus-within {
        border: 0.5px solid ${({ theme }) => theme.colors.primary.purple};
        color: ${({ theme }) => theme.colors.primary.purple};
        
        &:children {
            border: 0.5px solid ${({ theme }) => theme.colors.primary.purple};
        }
    }

    button {
        color: ${({ theme }) => theme.colors.text.neutral600};
    }
    
    ${(props) => props.error ? `
        border: 0.5px solid ${props.theme.colors.status.destructive};
        color: ${props.theme.colors.text.neutral600};
    ` : ''}

    ${(props) => props.success ? `
        border: 0.5px solid ${props.theme.colors.status.success};
        color: ${props.theme.colors.text.neutral600};
    ` : ''}

    ${(props) => props.small ? `
        height: 40px;
        input {
            height: 40px !important;
        }
    ` : ''}
`

export const AssistentP = styled.p`

    font-size: 0.75rem;
    margin-left: 18px;
    margin-top: 4px;

    max-width: 85%;

    // color: ${({ theme }) => theme.colors.status.destructive };

    ${(props) => props.error ? `
        color: ${props.theme.colors.status.destructive};
    ` : ''}

    // ${(props) => props.success ? `
    //     border: 0.5px solid ${props.theme.colors.status.success};
    //     color: ${props.theme.colors.text.neutral600};
    // ` : ''}
`