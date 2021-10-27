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
import { calculateBathroomArea, calculateLavabos } from "../../../utils/calculate_room_value"


const LavabosSlide = ({ data, small }) => {

    // const [quartos, setQuartos] = useState([])
    // const [rows, setRows] = useState([1])

    const { simData, setSimData, baseSqMtr } = useContext(SimulationDataContext)
    const {
        rooms,
        setRooms,
        area,
        setArea,
    } = useContext(RoomValuesContext)

    const sizeOptions = [0, 3.5, 6, 8]

    useEffect(() => {
        // console.log('simData[slide].value', simData[slide].value)
        console.log('simData.lavabos.value', simData.lavabos.value) 
        if (simData.lavabos.value !== '' && simData.lavabos.pattern !== '') {
            const valorAmbiente = calculateLavabos(simData.lavabos, baseSqMtr)
            setRooms({
                ...rooms,
                lavabos: valorAmbiente
            })
        }
        const areaAmbiente = calculateBathroomArea(simData.lavabos)
        setArea({
            ...area,
            lavabos: areaAmbiente
        })

    }, [simData.lavabos])

    if (small) {
        return (
            <>
                {/* <Box height='50px'></Box> */}
                <SlideContainer
                    key={'Lavabos'}
                    small
                >
                    <StepContentContainer
                        small
                        key={`${'Lavabos'}_step_content_container`}
                    >
                        <TitleContainer
                            key={`${'Lavabos'}_title_container`}
                        >
                            <h4>{'Escolha a quantidade e o tamanho dos'.toUpperCase()}</h4>
                            <h2>{'Lavabos'.toUpperCase()}</h2>
                        </TitleContainer>
    
                        <MiddleContainer
                            key={`${'Lavabos'}_middle_container`}
                        >
                            <Flex
                                width='100%'
                                margin='15px 0'
                                justifyContent='flex-start'
                            >
                                <RadioButtonsList
                                    options={sizeOptions}
                                    entity={simData.lavabos.value}
                                    setEntity={newValue => setSimData({
                                        ...simData,
                                        lavabos: {
                                            ...simData.lavabos,
                                            value: newValue
                                        }
                                    })}
                                />
                            </Flex>
                        </MiddleContainer>
                        <>
                            <FinishingPattern
                                confort={simData.lavabos.confort}
                                setConfort={newValue => setSimData({
                                    ...simData,
                                    lavabos: {
                                        ...simData.lavabos,
                                        confort: newValue
                                    }
                                })}
                                pattern={simData.lavabos.pattern}
                                setPattern={newValue => setSimData({
                                    ...simData,
                                    lavabos: {
                                        ...simData.lavabos,
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
                key={'Lavabos'}
            >
                <StepImageContainer
                    key={`${'Lavabos'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes8.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Lavabos'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Lavabos'}_title_container`}
                    >
                        <h4>{'Escolha a quantidade e o tamanho dos'.toUpperCase()}</h4>
                        <h2>{'Lavabos'.toUpperCase()}</h2>
                    </TitleContainer>

                    <MiddleContainer
                        key={`${'Lavabos'}_middle_container`}
                    >
                        <Flex
                            width='100%'
                            margin='15px 0'
                            justifyContent='flex-start'
                        >
                            <RadioButtonsList
                                options={sizeOptions}
                                entity={simData.lavabos.value}
                                setEntity={newValue => setSimData({
                                    ...simData,
                                    lavabos: {
                                        ...simData.lavabos,
                                        value: newValue
                                    }
                                })}
                            />
                        </Flex>
                    </MiddleContainer>
                    <>
                        <FinishingPattern
                            confort={simData.lavabos.confort}
                            setConfort={newValue => setSimData({
                                ...simData,
                                lavabos: {
                                    ...simData.lavabos,
                                    confort: newValue
                                }
                            })}
                            pattern={simData.lavabos.pattern}
                            setPattern={newValue => setSimData({
                                ...simData,
                                lavabos: {
                                    ...simData.lavabos,
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

export default LavabosSlide