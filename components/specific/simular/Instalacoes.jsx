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
import { ExplainingP } from "../../Text"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { RoomValuesContext } from "../../../contexts/RoomValues"
import { SimulationStatusContext } from "../../../contexts/SimulationStatus"
import { calculateInstalacoes, calculateInstalacoesPercentagem } from "../../../utils/calculate_room_value"


const InstalacoesSlide = ({ data, small }) => {

    // const [instalacoes, setInstalacoes] = useState({
    //     hidraulica: '',
    //     eletrica: '',
    // })
    // const [rows, setRows] = useState([1])

    const { simData, setSimData } = useContext(SimulationDataContext)
    const { simStatus } = useContext(SimulationStatusContext)
    const { setInstalations } = useContext(RoomValuesContext)

    const sizeOptions = [0, 4, 8, 12]

    useEffect(() => {
        // console.log('simData[slide].value', simData[slide].value)
        // console.log('simData.instalacoes', simData.instalacoes)
        if (simData.instalacoes.eletrica === 7) {
            setSimData({
                ...simData,
                instalacoes: {
                    ...simData.instalacoes,
                    eletrica: 6
                }
            })
        }
        if (simData.instalacoes.hidraulica !== '' && simData.instalacoes.pattern !== '') {
            const porcentagem = calculateInstalacoesPercentagem(simData.instalacoes, simStatus.funds.current)

            setInstalations(porcentagem)
        }
    }, [simData.instalacoes])

    const hidraulica = {
        title: 'Quarto',
        value: simData.instalacoes.hidraulica,
        onChange: newValue => setSimData({
            ...simData,
            instalacoes: {
                ...simData.instalacoes,
                hidraulica: newValue
            }
        }),
        options: [
            {
                value: 7,
                label: 'APENAS ÁGUA FRIA',
                // description: 'Chuveiro elétrico, sem quecimento nas torneiras'
            },
            {
                value: 9,
                label: 'ÁGUA FRIA E QUENTE*',
            },
        ]
    }

    const eletrica = {
        title: 'Quarto',
        value: simData.instalacoes.eletrica,
        onChange: newValue => setSimData({
            ...simData,
            instalacoes: {
                ...simData.instalacoes,
                eletrica: newValue
            }
        }),
        options: [
            {
                value: 5,
                label: '110',
            },
            // {
            //     value: 6,
            //     label: '220',
            // },
            {
                value: 6,
                label: '110 / 220',
            },
        ]
    }

    if (small) {
        return (
            <>
                <SlideContainer
                    key={'Hidráulicas'}
                    small
                >
                    <StepContentContainer
                        small
                        key={`${'Hidráulicas'}_step_content_container`}
                    >
                        <TitleContainer
                            key={`${'Hidráulicas'}_title_container`}
                        >
                            <h4>{'Escolha o tipo de instalações'.toUpperCase()}</h4>
                            <h2>{'Hidráulicas'.toUpperCase()}</h2>
                        </TitleContainer>
                        <RadioButtons
                            options={hidraulica.options}
                            onChange={hidraulica.onChange}
                            select={hidraulica.value}
                        />
                        <TitleContainer
                            key={`${'Elétrica'}_title_container`}
                            margin='20px 0 0'
                        >
                            <h4>{'Escolha qual será a voltagem'.toUpperCase()}</h4>
                            <h2>{'Elétrica*'.toUpperCase()}</h2>
                        </TitleContainer>
                        <Box
                            margin='0 0 20px'
                        >
                            <RadioButtons
                                options={eletrica.options}
                                onChange={eletrica.onChange}
                                select={eletrica.value}
                            />
                        </Box>
                        <>
                            <StatusBox />
                            <ExplainingP
                                fontSize='0.6rem'
                                margin='8px 0 0 0'
                            >
                                * não comtempla instalações de equipamentos como boiler, placas fotovoltaicas e etc.
                            </ExplainingP>
                            <ExplainingP
                                fontSize='0.6rem'
                                margin='0'
                            >
                                ** Considerado da entrada de energia até o quadro principal. Pontos por cômodo: 4 (quatro) pontos de tomada,
                                2 (dois) pontos de iluminação (somente plafon simples), enfiação, conduítes, quadro de energia de até 4
                                pontos de iluminação externa ao imóvel (arandela de parede simples).
                            </ExplainingP>
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
                key={'Hidráulicas'}
            >
                <StepImageContainer
                    key={`${'Hidráulicas'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes12.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Hidráulicas'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Hidráulicas'}_title_container`}
                    >
                        <h4>{'Escolha o tipo de instalações'.toUpperCase()}</h4>
                        <h2>{'Hidráulicas'.toUpperCase()}</h2>
                    </TitleContainer>
                    <RadioButtons
                        options={hidraulica.options}
                        onChange={hidraulica.onChange}
                        select={hidraulica.value}
                    />
                    <TitleContainer
                        key={`${'Elétrica'}_title_container`}
                        margin='20px 0 0'
                    >
                        <h4>{'Escolha qual será a voltagem'.toUpperCase()}</h4>
                        <h2>{'Elétrica*'.toUpperCase()}</h2>
                    </TitleContainer>
                    <Box
                        margin='0 0 20px'
                    >
                        <RadioButtons
                            options={eletrica.options}
                            onChange={eletrica.onChange}
                            select={eletrica.value}
                        />
                    </Box>
                    <>
                        <StatusBox />
                        <ExplainingP
                            fontSize='0.6rem'
                            margin='8px 0 0 0'
                        >
                            * não comtempla instalações de equipamentos como boiler, placas fotovoltaicas e etc.
                        </ExplainingP>
                        <ExplainingP
                            fontSize='0.6rem'
                            margin='0'
                        >
                            ** Considerado da entrada de energia até o quadro principal. Pontos por cômodo: 4 (quatro) pontos de tomada,
                            2 (dois) pontos de iluminação (somente plafon simples), enfiação, conduítes, quadro de energia de até 4
                            pontos de iluminação externa ao imóvel (arandela de parede simples).
                        </ExplainingP>
                    </>
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default InstalacoesSlide