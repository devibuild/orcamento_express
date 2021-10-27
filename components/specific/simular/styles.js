import styled from "styled-components";


export const TrapezoidsContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;


    // position: absolute;

`

export const HomeStylePic = styled.img`

    width: 220px;
    height: 190px;

    border: solid 2px #fff;
    margin: 10px;

    &:hover {
        border: solid 2px ${({ theme }) => theme.colors.primary.lightGreen };
    }

`

export const HomeStylePicContainer = styled.div`

    // display: flex;
    // flex-direction: column;
    // align-items: center;

    P {
        width: 100%;
    }

    ${(props) => props.imageSrc ? `
    
        div {
            width: ${(props) => props.width ? `${props.width}` : '200px'};
            height: ${(props) => props.height ? `${props.height}` : '170px'};
            // border: solid 2px #fff;
            margin: 10px;
            background-image: url(${props.imageSrc});

            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
        }
    
    
    ` : ''}
    
    div > div {
        cursor: pointer;

        width: ${(props) => props.width ? `${props.width}` : '200px'};
        height: ${(props) => props.height ? `${props.height}` : '200px'};
        margin: 0 0 10px;
        // transform: translateX(-10px);
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
            background: ${({ theme }) => theme.colors.primary.fadedLightGreen };
        }
        ${(props) => !props.active ? `` : `
        background: ${props.theme.colors.primary.fadedGreen };
        &:hover {
            background: ${props.theme.colors.primary.fadedGreen };
        }
        `}
        
        img {
            height: 25px;
            width: 25px;
            color: #fff;
        }

    }

    // img {
    //     width: ${(props) => props.width ? `${props.width}` : '200px'};
    //     height: ${(props) => props.height ? `${props.height}` : '200px'};

    //     border: solid 2px #fff;
    //     margin: 10px;

    //     transition-duration: 0.2s;

    //     &:hover {
    //         // border: solid 2px ${({ theme }) => theme.colors.primary.lightGreen };
    //         margin: 0;
    //     }
    // }

`

// export const ExternalWallImg = styled.img`

//     width: 150px;

//     margin: 10px;
// `

// export const ExternalWallImgContainer = styled.div`

//     height: 100%;

// `
// export const ExternalWallImg = styled.div`

// ${(props) => props.src ?  `
//     width: 190px;
//     height: 260px;

//     margin: 10px 10px 0 0;

//         background-image: url(${props.src});

//         background-position: center;
//         background-repeat: no-repeat;
//         background-size: cover;
//         position: relative;
//     ` : ''}

// `

export const ExternalWallItem= styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: #f8f8f8;

    cursor: pointer;

    width: 320px;
    height: 460px;

    padding: 10px;
    margin: 10px;

    border: solid 3px #fff;
    
    &:hover {
        border: solid 3px ${({ theme }) => theme.colors.primary.lightGreen };
    }
    
    ${(props) => props.primaryColor ? `
        color: ${props.theme.colors.primary[props.primaryColor]};
        // border: solid 3px ${ props.theme.colors.primary[props.primaryColor] };
        
        ` : ''}
        
    h3 {
        // color: ${({ theme }) => theme.colors.primary.pink };
        font-weight: 300;
        margin-left: 5px;
    }
        
    ${(props) => props.selected ? `
        border: solid 3px ${ props.theme.colors.primary.green };

        &:hover {
            border: solid 3px ${props.theme.colors.primary.green };
        }
    ` : ''}

    ${(props) => props.small ? `
    
        min-height: 200px;
        // width: 80%;
    
    ` : ''}
        
`

export const ColouredBox = styled.div`

    background: ${(props) => props.primaryColor ? props.theme.colors.primary[props.primaryColor] : props.theme.colors.primary.pink };
    color: #fff;
    margin: 0 5px;
    padding: 5px;
    
    width: ${(props) => props.width ? `${props.width}` : '100%'};
    height: ${(props) => props.height ? `${props.height}` : '50px'};
    
    &:last-child {
        margin: 0;
    }

    .label {
        font-size: 0.7rem;
        font-weight: 300;
    }
    
    .value {
        font-size: 1.1rem;
        font-weight: 700;
    }

    
`
    
export const WallTitle = styled.h3`
    
    color: ${({ theme }) => theme.colors.primary.pink };
    font-weight: 300;

`

export const WallCompositionContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    text-align: left;

    color: ${({ theme }) => theme.colors.text.main };


    h4 {
        font-weight: 700;
        font-size: 0.7rem;
    }
    
    .compositionItem {
        font-weight: 300;
        font-size: 0.65rem;

        
    }

`

export const CompositionListItem = styled.div`

    width: 100%;
    padding: 0 0 0 5px;
    text-align: left;
`

export const CompositionListItemTag = styled.div`

    ${(props) => props.primaryColor ? `
        color: ${props.theme.colors.primary[props.primaryColor]};
    ` : ''}

    font-weight: 700;
    margin: 0 0 8px;
`

export const SelectedIconContainer = styled.div`

    bottom: 0;
    height: 40px;
    width: 100%;

    // margin-top: 15px;

    ${(props) => props.selected ? `
        display: flex;
        align-items: center;
        justify-content: flex-end;
    ` : 'display: none;'}


    img {
        height: 100%;
    }

`

export const StandardBox = styled.div`

    cursor: pointer;

    // background: ${(props) => props.color ? props.theme.colors.primary[props.color] : props.theme.colors.primary.pink };
    border: solid 2px ${({ theme }) => theme.colors.text.main };
    color: ${({ theme }) => theme.colors.text.main };
    font-size: 0.85rem;
    
    width: 100%;
    
    padding: 8px;
    // margin: 0 3px 0 0;
    
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
`

export const CooktopContainer = styled.div`
    background: ${({ theme }) => theme.colors.primary.lightGrey };
    padding: 5px;

    font-size: 0.85rem;
    font-weight: 700;
`