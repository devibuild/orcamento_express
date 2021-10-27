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
import { StandardBox, CooktopContainer } from "./styles"
import RadioIconButtons from '../../common/RadioIconButtons'
import { SimulationDataContext } from "../../../contexts/SimulationData"


const AcabamentoSlide = ({ data }) => {

    const [marmore, setMarmore] = useState('')
    // const [rows, setRows] = useState([1])

    const { simData, setSimData } = useContext(SimulationDataContext)

    const marmores = {
        title: 'Quarto',
        value: simData.acabamento,
        onChange: newValue => setSimData({
            ...simData,
            acabamento: newValue
        }),
        options: [
            {
                value: 'placa_granito_1',
                label: 'ECONOMY',
                // description: 'Chuveiro elétrico, sem quecimento nas torneiras'
            },
            {
                value: 'placa_granito_2',
                label: 'STANDARD',
            },
            {
                value: 'placa_granito_3',
                label: 'PREMIUM',
            },
        ]
    }

    const patterns = [
        {
            label: 'economy',
            color: 'pink',
        },
        {
            label: 'standard',
            color: 'purple',
        },
        {
            label: 'premium',
            color: 'darkPurple',
        },
    ]

    return (
        <>
            <Box height='50px'></Box>
            <SlideContainer
                key={'Acabamento'}
            >
                <StepImageContainer
                    key={`${'Acabamento'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes14.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Acabamento'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Acabamento'}_title_container`}
                    >
                        <h4>{'Escolha o tipo de'.toUpperCase()}</h4>
                        <h2>{'Acabamento'.toUpperCase()}</h2>
                        <p>
                            Seguindo os mesmos padrões de conforto, selecione os padrões de acabamento que mais tem a ver com o seu estilo.
                        </p>
                    </TitleContainer>
                    <Box
                        margin='20px 0'
                        width='100%'
                    >
                        <Flex
                            width='100%'
                        >
                            {patterns.map((e, i) => (
                                <StandardBox
                                    key={`${e.label}_finishing_pattern`}
                                    color={e.color}
                                    active
                                >
                                    {e.label.toUpperCase()}
                                </StandardBox>
                            ))}
                        </Flex>
                        <CooktopContainer>
                            MÁRMORES E GRANITOS
                        </CooktopContainer>
                        <RadioIconButtons
                            options={marmores.options}
                            active={marmores.value}
                            setActive={marmores.onChange}
                        />
                    </Box>
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default AcabamentoSlide