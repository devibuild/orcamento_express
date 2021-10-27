import styled from "styled-components";


export const ResourcesIndexColumn = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    // margin: 20px;
    padding: 15px 35px;

    ${(props) => props.small ? 'padding: 15px 0;' : ''}

    width: 100%;

    &:first-child {
        border-right: solid 1px ${({ theme }) => theme.colors.text.neutral200 };
    }

`

export const PinkContainer = styled.div`

    background: ${({ theme }) => theme.colors.primary.pink};
    color: ${({ theme }) => theme.colors.text.white};

    width: 100%;

    // min-width: 100vw;
    min-height: 100vh;
    
    padding: 1rem;
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;

    transform: translateY(-50px);
    
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-top: 4rem;
        
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        min-height: calc(100vh - 50px);
        transform: translateY(0);
    }
`