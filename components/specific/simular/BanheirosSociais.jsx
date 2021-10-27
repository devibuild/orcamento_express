import { Box, Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../../common/RadioButtons"
import StatusBox from "../../common/StatusBox"
import { MiddleContainer, StepContentContainer, StepImageContainer, SlideContainer } from "../../common/StepContent/styles"
import Input from '../../form/Input'
import FinishingPattern from "../../common/FinishingPattern"
import { useContext, useEffect, useState } from "react"
import { Parag } from "../../Text"
import Button from "../../common/Button"
import RadioButtonsList from "../../common/RadioButtons/RadioButtonsList"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { RoomValuesContext } from "../../../contexts/RoomValues"
import { calculateBanheiros, calculateBathroomArea } from "../../../utils/calculate_room_value"


const BanheirosSociaisSlide = ({ data, small }) => {

    const [quartos, setQuartos] = useState([])
    // const [rows, setRows] = useState([1])

    const { simData, setSimData, baseSqMtr } = useContext(SimulationDataContext)
    const {
        rooms,
        setRooms,
        area,
        setArea
    } = useContext(RoomValuesContext)

    const sizeOptions = [0, 4, 8, 12]

    useEffect(() => {
        // console.log('simData[slide].value', simData[slide].value)
        // console.log('simData.banheiros.value', simData.banheiros.value) 
        if (simData.banheiros.value !== '' && simData.banheiros.pattern !== '') {
            const valorAmbiente = calculateBanheiros(simData.banheiros, baseSqMtr)
            setRooms({
                ...rooms,
                banheiros: valorAmbiente
            })
            const areaAmbiente = calculateBathroomArea(simData.banheiros)
            setArea({
                ...area,
                banheiros: areaAmbiente
            })
        }
    }, [simData.banheiros])

    if (small) {
        return (
            <>
                <SlideContainer
                    key={'Banheiros Sociais'}
                    small
                >
                    <StepContentContainer
                        small
                        key={`${'Banheiros Sociais'}_step_content_container`}
                    >
                        <TitleContainer
                            key={`${'Banheiros Sociais'}_title_container`}
                        >
                            <h4>{'Escolha a quantidade e o tamanho dos'.toUpperCase()}</h4>
                            <h2>{'Banheiros Sociais'.toUpperCase()}</h2>
                        </TitleContainer>
    
                        <MiddleContainer
                            key={`${'Banheiros Sociais'}_middle_container`}
                        >
                            <Flex
                                width='100%'
                                margin='15px 0'
                                justifyContent='flex-start'
                            >
                                <RadioButtonsList
                                    labels={[
                                        'NÃO QUERO',
                                        'PEQUENO (APROX. 4 M2)',
                                        'MÉDIO (APROX. 8 M2)',
                                        'GRANDE (APROX. 12 M2)'
                                    ]}
                                    options={sizeOptions}
                                    entity={simData.banheiros.value}
                                    setEntity={newValue => setSimData({
                                        ...simData,
                                        banheiros: {
                                            ...simData.banheiros,
                                            value: newValue
                                        }
                                    })}
                                />
                            </Flex>
                        </MiddleContainer>
                        <>
                            <FinishingPattern
                                confort={simData.banheiros.confort}
                                setConfort={newValue => setSimData({
                                    ...simData,
                                    banheiros: {
                                        ...simData.banheiros,
                                        confort: newValue
                                    }
                                })}
                                pattern={simData.banheiros.pattern}
                                setPattern={newValue => setSimData({
                                    ...simData,
                                    banheiros: {
                                        ...simData.banheiros,
                                        pattern: newValue
                                    }
                                })}
                            />
                            <StatusBox />
                        </>
                    </StepContentContainer>
                </SlideContainer>
            </>
        )
    }

    return (
        <>
            <Box height='50px'></Box>
            <SlideContainer
                key={'Banheiros Sociais'}
            >
                <StepImageContainer
                    key={`${'Banheiros Sociais'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes9.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Banheiros Sociais'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Banheiros Sociais'}_title_container`}
                    >
                        <h4>{'Escolha a quantidade e o tamanho dos'.toUpperCase()}</h4>
                        <h2>{'Banheiros Sociais'.toUpperCase()}</h2>
                    </TitleContainer>

                    <MiddleContainer
                        key={`${'Banheiros Sociais'}_middle_container`}
                    >
                        <Flex
                            width='100%'
                            margin='15px 0'
                            justifyContent='flex-start'
                        >
                            <RadioButtonsList
                                labels={[
                                    'NÃO QUERO',
                                    'PEQUENO (APROX. 4 M2)',
                                    'MÉDIO (APROX. 8 M2)',
                                    'GRANDE (APROX. 12 M2)'
                                ]}
                                options={sizeOptions}
                                entity={simData.banheiros.value}
                                setEntity={newValue => setSimData({
                                    ...simData,
                                    banheiros: {
                                        ...simData.banheiros,
                                        value: newValue
                                    }
                                })}
                            />
                        </Flex>
                    </MiddleContainer>
                    <>
                        <FinishingPattern
                            confort={simData.banheiros.confort}
                            setConfort={newValue => setSimData({
                                ...simData,
                                banheiros: {
                                    ...simData.banheiros,
                                    confort: newValue
                                }
                            })}
                            pattern={simData.banheiros.pattern}
                            setPattern={newValue => setSimData({
                                ...simData,
                                banheiros: {
                                    ...simData.banheiros,
                                    pattern: newValue
                                }
                            })}
                        />
                        <StatusBox />
                    </>
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default BanheirosSociaisSlide