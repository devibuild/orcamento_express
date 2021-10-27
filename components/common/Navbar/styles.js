import styled from "styled-components";


export const NavContainer = styled.div`

    display: flex;

    position: absolute;
    top: 0px;
    left: 0px;

    z-index: 10;

    @media(max-width: ${({ theme }) => theme.breakpoints.md}) {
        // width: 100vw;
        position: relative;
    }
`

export const StyledNav = styled.nav`
    height: 50px;
    width: 550px;

    color: ${({ theme }) => theme.colors.primary.pink };
    background: ${({ theme }) => theme.colors.primary.darkPurple };
    // font-weight: 300;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
        // min-width: 100vw;
    }
    
`
    
export const NavItem = styled.div`

    cursor: pointer;
    
    font-size: 0.8rem;
    margin: 0 5px;
    color: ${({ theme }) => theme.colors.text.white };
   
    :hover {
        text-decoration: underline;
    }
`

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-style: inset;
    border-style: solid;
    border-width: 50px 15px 0 0;
    border-color: ${({ theme }) => theme.colors.primary.darkPurple } transparent transparent transparent;
    // border-color: #301934 transparent transparent transparent;

    @media(max-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: none;
    }

`

export const LogoIcon = styled.img`

    height: 20px;
    width: 20px;

    margin: 0 15px;

`