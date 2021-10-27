import styled from "styled-components";


export const DataDisplayContainer = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    
    div {
        width: 100%;
        
        margin: 0;
        padding: 5px;
        
        &:first-child {
            width: 50%;
            
            display: flex;
            align-items: center;
            justify-content: flex-end;
            
            // letter-spacing: 0.5px;
            font-size: 0.9rem;
            font-weight: 300;
            text-align: right;
        }
        &:last-child {
            
            width: 50%;
            
            display: flex;
            align-items: center;
            justify-content: flex-start;

            text-align: left;
            color: ${({ theme }) => theme.colors.primary.purple };
            font-size: 1.3rem;
            font-weight: 600;

            margin-left: 5px;
        }
    }
`