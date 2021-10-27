import styled from "styled-components";


export const StepContentContainer = styled.div`

    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin:  20px;
    width: 500px;
    padding: 15px;

    height: 100%;
    // max-height: calc(100vh - 200px);
    overflow: auto;

    // z-index: 0;

    ${(props) => props.isCheckout ? `
        width: 70%;
        align-items: center;
    ` : ''}

    ${(props) => props.small ? `
    
        width: 100%;
        max-width: 500px;
        overflow: visible;
        // overflow-x: auto;

    ` : ''}

    ${(props) => props.overflow ? `overflow: ${props.overflow};` : ''}

`

export const StepImageContainer = styled.div`

    // height: 100%;
    height: calc(100vh - 200px);
    // width: 500px;


`

export const MiddleContainer = styled.div`

    width: 100%;

    margin: 20px 0;


    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    // flex-wrap: wrap;

    // overflow: auto;

`

export const SlideContainer = styled.div`

    width: 100%;
    height: calc(100vh - 200px);
    // max-height: calc(100vh - 200px);

    // margin: 30px 0 0 0;

    display: flex;
    align-items: center;
    justify-content: center;
    
    ${(props) => props.small ? `
        height: 100%;
        margin-bottom: 30px;
        flex-direction: column;
        justify-content: flex-start;
        
        max-height: 80vh;
        overflow-y: auto;
        overflow-x: hidden;
    ` : ''}

`