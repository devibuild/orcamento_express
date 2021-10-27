import { Box, Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../../common/RadioButtons"
import StatusBox from "../../common/StatusBox"
import { MiddleContainer, StepContentContainer, StepImageContainer, SlideContainer } from "../../common/StepContent/styles"
import Input from '../../form/Input'
import FinishingPattern from "../../common/FinishingPattern"
import { useContext, useEffect, useState } from "react"
import { Parag } from "../../Text"
import Button from "../../common/Button"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { RoomValuesContext } from "../../../contexts/RoomValues"
import { calculateQuartosArea, calculateQuartos } from "../../../utils/calculate_room_value"


const QuartosESuitesSlide = ({ data, small }) => {

    const [quartos, setQuartos] = useState([])
    const [rows, setRows] = useState([1])

    const { simData, setSimData, baseSqMtr } = useContext(SimulationDataContext)
    const {
        rooms,
        setRooms,
        area,
        setArea, } = useContext(RoomValuesContext)

    const room = [
        'quarto',
        'suite',
        'closet'
    ]

    const roomOptions = [
        {
            value: 0,
            label: 'NÃO QUERO',
        },
        {
            value: 12,
            label: 'PEQUENO (APROX. 12 m²)',
        },
        {
            value: 24,
            label: 'MÉDIO (APROX. 24 m²)',
        },
        {
            value: 36,
            label: 'GRANDE (APROX. 36 m²)',
        },
    ]

    const suiteOptions = [
        {
            value: 0,
            label: 'NÃO QUERO',
        },
        {
            value: 4,
            label: 'PEQUENO (APROX. 4 m²)',
        },
        {
            value: 8,
            label: 'MÉDIO (APROX. 8 m²)',
        },
        {
            value: 12,
            label: 'GRANDE (APROX. 12 m²)',
        },
    ]

    const closetOptions = [
        {
            value: 0,
            label: 'NÃO QUERO',
        },
        {
            value: 2.5,
            label: 'PEQUENO (APROX. 2,5 M2)',
        },
        {
            value: 8,
            label: 'MÉDIO (APROX. 8 M2)',
        },
        {
            value: 12,
            label: 'GRANDE (APROX. 12 M2)',
        },
    ]

    useEffect(() => {
        // console.log('simData[slide].value', simData[slide].value)
        // console.log('simData.quartos.value', simData.quartos.value) 
        if (simData.quartos.value[0].quarto !== '' && simData.quartos.value[0].quarto !== 0 &&simData.quartos.pattern !== '') {
            const valorAmbiente = calculateQuartos(simData.quartos, baseSqMtr)
            setRooms({
                ...rooms,
                quartos: valorAmbiente
            })
            const areaAmbiente = calculateQuartosArea(simData.quartos)
            setArea({
                ...area,
                quartos: areaAmbiente
            })
        }
    }, [simData.quartos])

    if (small) {
        return (
            <>
                {/* <Box height='50px'></Box> */}
                <SlideContainer
                    key={'Quartos/Suítes'}
                    small
                >
                    {/* <StepImageContainer
                        key={`${'Quartos/Suítes'}_step_image_container`}
                    >
                        <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes6.svg' alt="" />
                    </StepImageContainer> */}
                    <StepContentContainer
                        small
                        key={`${'Quartos/Suítes'}_step_content_container`}
                    >
                        <TitleContainer
                            key={`${'Quartos/Suítes'}_title_container`}
                        >
                            <h4>{'Escolha a quantidade e o tamanho dos'.toUpperCase()}</h4>
                            <h2>{'Quartos/Suítes'.toUpperCase()}</h2>
                        </TitleContainer>
    
                        <MiddleContainer
                            key={`${'Quartos/Suítes'}_middle_container`}
                        >
                            {/* {data?.options && (
                                <RadioButtons
                                    options={data.options}
                                    onChange={data.onChange}
                                    select={data.value}
                                    key={`${'Quartos/Suítes'}_radio_buttons`}
                                />
                            )} */}
                            {rows?.map((el, idx) => (
                                <Flex
                                    width='100%'
                                    margin='15px 0'
                                    alignItems='flex-start'
                                >
                                    {room.map((e, i) => (
                                        <Flex
                                            column
                                            alignItems='flex-start'
                                        >
                                            <Parag
                                                margin='0 0 10px'
                                            >
                                                <strong>
                                                    {`${e.toUpperCase()} ${idx + 1}`}
                                                </strong>
                                            </Parag>
                                            {/* { console.log(returnRoom(idx))} */}
                                            <RadioButtons
                                                small
                                                options={i === 0 ? roomOptions : (i === 1 ? suiteOptions : closetOptions)}
                                                onChange={(newValue) => {
                                                    const previousQuartos = [...simData.quartos.value]
                                                    // console.log('previousQuartos: ', previousQuartos)
                                                    const previousQuartosRow = { ...previousQuartos[idx] }
                                                    previousQuartosRow[e] = newValue
                                                    previousQuartos[idx] = { ...previousQuartosRow }
                                                    // console.log('previousQuartos: ', previousQuartos)
                                                    return setSimData({
                                                        ...simData,
                                                        quartos: {
                                                            ...simData.quartos,
                                                            value: previousQuartos
                                                        }
                                                    })
                                                }} //onChange(returnRoom(idx).value)
                                                select={simData && simData.quartos && simData.quartos.value && simData.quartos.value[idx][e]}
                                                key={`${'Quartos/Suítes'}_${idx}_radio_buttons`}
                                            />
                                        </Flex>
                                    ))}
                                </Flex>
                            ))}
                            <Button
                                fullWidth
                                fontSize='0.8rem'
                                margin='15px 0 0'
                                onClick={() => {
                                    const currentRows = rows.length
                                    setRows(new Array(currentRows + 1).fill(1))
                                    const oneMoreRow = [...simData.quartos.value]
                                    oneMoreRow.push({
                                        quarto: '',
                                        suite: '',
                                        closet: ''
                                    })
                                    setSimData({
                                        ...simData,
                                        quartos: {
                                            ...simData.quartos,
                                            value: oneMoreRow
                                        }
                                    })
                                }}
                            >
                                [+] ADICIONAR MAIS QUARTOS
                            </Button>
                        </MiddleContainer>
                        <>
                            <FinishingPattern
                                confort={simData.quartos.confort}
                                setConfort={newValue => setSimData({
                                    ...simData,
                                    quartos: {
                                        ...simData.quartos,
                                        confort: newValue
                                    }
                                })}
                                pattern={simData.quartos.pattern}
                                setPattern={newValue => setSimData({
                                    ...simData,
                                    quartos: {
                                        ...simData.quartos,
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
                key={'Quartos/Suítes'}
            >
                <StepImageContainer
                    key={`${'Quartos/Suítes'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes6.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Quartos/Suítes'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Quartos/Suítes'}_title_container`}
                    >
                        <h4>{'Escolha a quantidade e o tamanho dos'.toUpperCase()}</h4>
                        <h2>{'Quartos/Suítes'.toUpperCase()}</h2>
                    </TitleContainer>

                    <MiddleContainer
                        key={`${'Quartos/Suítes'}_middle_container`}
                    >
                        {/* {data?.options && (
                            <RadioButtons
                                options={data.options}
                                onChange={data.onChange}
                                select={data.value}
                                key={`${'Quartos/Suítes'}_radio_buttons`}
                            />
                        )} */}
                        {rows?.map((el, idx) => (
                            <Flex
                                width='100%'
                                margin='15px 0'
                                alignItems='flex-start'
                            >
                                {room.map((e, i) => (
                                    <Flex
                                        column
                                        alignItems='flex-start'
                                    >
                                        <Parag
                                            margin='0 0 10px'
                                        >
                                            <strong>
                                                {`${e.toUpperCase()} ${idx + 1}`}
                                            </strong>
                                        </Parag>
                                        {/* { console.log(returnRoom(idx))} */}
                                        <RadioButtons
                                            small
                                            options={i === 0 ? roomOptions : (i === 1 ? suiteOptions : closetOptions)}
                                            onChange={(newValue) => {
                                                const previousQuartos = [...simData.quartos.value]
                                                // console.log('previousQuartos: ', previousQuartos)
                                                const previousQuartosRow = { ...previousQuartos[idx] }
                                                previousQuartosRow[e] = newValue
                                                previousQuartos[idx] = { ...previousQuartosRow }
                                                // console.log('previousQuartos: ', previousQuartos)
                                                return setSimData({
                                                    ...simData,
                                                    quartos: {
                                                        ...simData.quartos,
                                                        value: previousQuartos
                                                    }
                                                })
                                            }} //onChange(returnRoom(idx).value)
                                            select={simData && simData.quartos && simData.quartos.value && simData.quartos.value[idx][e]}
                                            key={`${'Quartos/Suítes'}_${idx}_radio_buttons`}
                                        />
                                    </Flex>
                                ))}
                            </Flex>
                        ))}
                        <Button
                            fullWidth
                            fontSize='0.8rem'
                            margin='15px 0 0'
                            onClick={() => {
                                const currentRows = rows.length
                                setRows(new Array(currentRows + 1).fill(1))
                                const oneMoreRow = [...simData.quartos.value]
                                oneMoreRow.push({
                                    quarto: '',
                                    suite: '',
                                    closet: ''
                                })
                                setSimData({
                                    ...simData,
                                    quartos: {
                                        ...simData.quartos,
                                        value: oneMoreRow
                                    }
                                })
                            }}
                        >
                            [+] ADICIONAR MAIS QUARTOS
                        </Button>
                    </MiddleContainer>
                    <>
                        <FinishingPattern
                            confort={simData.quartos.confort}
                            setConfort={newValue => setSimData({
                                ...simData,
                                quartos: {
                                    ...simData.quartos,
                                    confort: newValue
                                }
                            })}
                            pattern={simData.quartos.pattern}
                            setPattern={newValue => setSimData({
                                ...simData,
                                quartos: {
                                    ...simData.quartos,
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

export default QuartosESuitesSlide