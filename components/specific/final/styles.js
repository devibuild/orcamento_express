import styled from "styled-components";


export const InfoBadgeContainer = styled.div`

    height: 210px;
    width: 210px;

    margin: 1rem;
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    background: ${({ theme }) => theme.colors.primary.lightGrey };
    color: ${({ theme }) => theme.colors.primary.purple };

`