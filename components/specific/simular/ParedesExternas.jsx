import { useContext, useEffect, useState } from "react"
import { Box, Flex, TitleContainer } from "../../Containers"
import {
    ColouredBox,
    // ExternalWallImg,
    ExternalWallItem,
    WallCompositionContainer,
    CompositionListItem,
    CompositionListItemTag,
    SelectedIconContainer,
    // ExternalWallImgContainer,
} from "./styles"
import { Circle, List, SketchLogo } from 'phosphor-react'
import { SimulationDataContext } from "../../../contexts/SimulationData"
import Image from 'next/image'
import { SimulationStatusContext } from "../../../contexts/SimulationStatus"
import { round5 } from "../../../utils/round"
// import paredeEconomyImg from '../../../public/images/Paredes/Pa'


const ParedesExternas = ({ small }) => {

    const { simData, setSimData } = useContext(SimulationDataContext)
    const { setTotalArea, simStatus } = useContext(SimulationStatusContext)

    useEffect(() => {
        const totalFunds = simStatus.funds.total
        let divisor = 2300
        console.log('totalFunds: ', totalFunds)
        console.log('simData.paredes: ', simData.paredes)
        if ((totalFunds || totalFunds === 0) && simData.paredes) {
            switch (simData.paredes) {
                case 'economy':
                    divisor = 2300
                    break;
                case 'standard':
                    divisor = 2700
                    break;
                case 'premium':
                    divisor = 3000
                    break;
                default:
                    divisor = 2300
                    break;
            }
            const totalArea = round5(totalFunds / divisor)
            console.log('totalArea: ', totalArea)
            setTotalArea(totalArea)
        }
    }, [simData.paredes])

    const paredes = [
        {
            value: 'economy',
            label: 'PAREDE ECONOMY',
            boxes: [
                {
                    label: 'Conforto térmico',
                    value: 'até 3c'
                },
                {
                    label: 'Conforto acústico',
                    value: 'até 40db'
                },
            ],
            composition: [
                'STEEL FRAME',
                'MEMBRANA HIDRÓFUGA',
                'PLACA CIMENTÍCIA',
                'BASECOAT',
                'ACABAMENTO',
            ],
            color: 'pink',
            imageSrc: "/images/Paredes/paredeeconomy.jpeg"
        },
        {
            value: 'standard',
            label: 'PAREDE STANDARD',
            boxes: [
                {
                    label: 'Conforto térmico',
                    value: 'até 3c'
                },
                {
                    label: 'Conforto acústico',
                    value: 'até 40db'
                },
            ],
            composition: [
                'STEEL FRAME',
                'OSB 9,5 MM',
                'MEMBRANA HIDRÓFUGA',
                'PLACA CIMENTÍCIA',
                'BASECOAT',
                'ACABAMENTO',
            ],
            color: 'purple',
            imageSrc: "/images/Paredes/Parede-Standard.png"
        },
        {
            value: 'premium',
            label: 'PAREDE PREMIUM',
            boxes: [
                {
                    label: 'Conforto térmico',
                    value: 'até 3c'
                },
                {
                    label: 'Conforto acústico',
                    value: 'até 40db'
                },
            ],
            composition: [
                'STEEL FRAME',
                'OSB 9,5 MM',
                'MEMBRANA HIDRÓFUGA',
                'PLACA CIMENTÍCIA',
                'BASECOAT',
                'ACABAMENTO',
            ],
            color: 'darkPurple',
            imageSrc: "/images/Paredes/Parede-Premium.jpeg"
        },
    ]

    if (small) {
        return (
            <Flex
                column
            // alignItems='flex-start'
            // transform='translateX(200px)'
            // margin='20px 0 0 100px'
            >
                <TitleContainer>
                    <h4>ESCOLHA O PADRÃO DAS</h4>
                    <h1>PAREDES EXTERNAS</h1>
                </TitleContainer>
                <Flex
                    // column
                    width='100%'
                    // maxWidth='1050px'
                    margin='0 0 30px'
                    justifyContent='flex-start'
                    overflow='auto'
                >
                    {paredes && paredes.map((e, i) => (
                        <ExternalWallItem
                            small
                            primaryColor={e.color}
                            selected={simData.paredes === e.value}
                            onClick={() => setSimData({
                                ...simData,
                                paredes: e.value
                            })}
                            key={`parede_externa_padrao_${e.value}`}
                        >
                            <Flex
                                width='100%'
                                column
                            >
                                <Flex>
                                    {i === 0 ? (
                                        <List size={24} />
                                    ) : (i === 1 ? (
                                        <Circle size={24} />
                                    ) : (
                                        <SketchLogo size={24} />
                                    ))}
                                    <h3>
                                        {e.label.toUpperCase()}
                                    </h3>
                                </Flex>
                                <Flex
                                    width='100%'
                                >
                                    {e.boxes.map((el, index) => (
                                        <ColouredBox
                                            primaryColor={e.color}
                                        >
                                            <div className="label">
                                                {el.label.toUpperCase()}
                                            </div>
                                            <div className="value">
                                                {el.value.toUpperCase()}
                                            </div>
                                        </ColouredBox>
                                    ))}
                                </Flex>
                                <Flex
                                    width='100%'
                                    alignItems='flex-start'
                                >
                                    {/* alt={`Padrão de parede ${i + 1}`} */}
                                    {/* <Box
                                        width='100%'
                                    > */}
                                    <Box margin='16px 8px'>
                                        <img src={e.imageSrc} alt={e.label} height='240px' width='155px' />
                                    </Box>
                                    {/* </Box> */}
                                    {/* <Image src={e.imageSrc} height={254} width={180} alt='Padrão de parede' key={`padrao_parede_${i + 1}`} /> */}
                                    <WallCompositionContainer>
                                        <h4>
                                            COMPOSIÇÃO DA PAREDE:
                                        </h4>
                                        {e.composition.map((elem, ind) => (
                                            <Flex
                                                className='compositionItem'
                                                justifyContent='space-between'
                                                alignItems='flex-start'
                                                key={elem}
                                                width='100%'
                                            >
                                                <CompositionListItemTag
                                                    primaryColor={e.color}
                                                >
                                                    [{ind + 1}]
                                                </CompositionListItemTag>
                                                <CompositionListItem>
                                                    {elem}
                                                </CompositionListItem>
                                            </Flex>
                                        ))}
                                    </WallCompositionContainer>
                                </Flex>
                            </Flex>
                            <SelectedIconContainer
                                selected={simData.paredes === e.value}
                            >
                                <img src="/images/Ícones/Ícones 11.svg" alt="" />
                            </SelectedIconContainer>
                        </ExternalWallItem>
                    ))}
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex
            column
            // alignItems='flex-start'
            // transform='translateX(200px)'
            margin='20px 0 0 100px'
        >
            <TitleContainer>
                <h4>ESCOLHA O PADRÃO DAS</h4>
                <h1>PAREDES EXTERNAS</h1>
            </TitleContainer>
            <Flex
            // column
            // width='100%'
            // maxWidth='1050px'
            // margin='30px 0'
            >
                {paredes && paredes.map((e, i) => (
                    <ExternalWallItem
                        primaryColor={e.color}
                        selected={simData.paredes === e.value}
                        onClick={() => setSimData({
                            ...simData,
                            paredes: e.value
                        })}
                    >
                        <Flex
                            width='100%'
                            column
                        >
                            <Flex>
                                {i === 0 ? (
                                    <List size={24} />
                                ) : (i === 1 ? (
                                    <Circle size={24} />
                                ) : (
                                    <SketchLogo size={24} />
                                ))}
                                <h3>
                                    {e.label.toUpperCase()}
                                </h3>
                            </Flex>
                            <Flex
                                width='100%'
                            >
                                {e.boxes.map((el, index) => (
                                    <ColouredBox
                                        primaryColor={e.color}
                                    >
                                        <div className="label">
                                            {el.label.toUpperCase()}
                                        </div>
                                        <div className="value">
                                            {el.value.toUpperCase()}
                                        </div>
                                    </ColouredBox>
                                ))}
                            </Flex>
                            <Flex
                                width='100%'
                                alignItems='flex-start'
                            >
                                <Box margin='16px 8px'>
                                    <img src={e.imageSrc} alt={e.label} height='240px' width='155px' />
                                </Box>
                                <WallCompositionContainer>
                                    <h4>
                                        COMPOSIÇÃO DA PAREDE:
                                    </h4>
                                    {e.composition.map((elem, ind) => (
                                        <Flex
                                            className='compositionItem'
                                            justifyContent='space-between'
                                            alignItems='flex-start'
                                            key={elem}
                                            width='100%'
                                        >
                                            <CompositionListItemTag
                                                primaryColor={e.color}
                                            >
                                                [{ind + 1}]
                                            </CompositionListItemTag>
                                            <CompositionListItem>
                                                {elem}
                                            </CompositionListItem>
                                        </Flex>
                                    ))}
                                </WallCompositionContainer>
                            </Flex>
                        </Flex>
                        <SelectedIconContainer
                            selected={simData.paredes === e.value}
                        >
                            <img src="/images/Ícones/Ícones 11.svg" alt="" />
                        </SelectedIconContainer>
                    </ExternalWallItem>
                ))}
            </Flex>
        </Flex>
    )
}

export default ParedesExternas