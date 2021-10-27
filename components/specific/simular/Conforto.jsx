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


const ConfortoSlide = ({ data }) => {

    const [conforto, setConforto] = useState('')
    // const [rows, setRows] = useState([1])

    const { simData, setSimData } = useContext(SimulationDataContext)

    const confortos = {
        title: 'Quarto',
        value: simData.conforto,
        onChange: newValue => setSimData({
            ...simData,
            conforto: newValue
        }),
        options: [
            {
                value: 'conforto_economy',
                label: 'ECONOMY',
                // description: 'Chuveiro elétrico, sem quecimento nas torneiras'
            },
            {
                value: 'conforto_standard',
                label: 'STANDARD',
            },
            {
                value: 'conforto_premium',
                label: 'PREMIUM',
            },
        ]
    }

    return (
        <>
            <Box height='50px'></Box>
            <SlideContainer
                key={'Conforto'}
            >
                <StepImageContainer
                    key={`${'Conforto'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes13.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Conforto'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Conforto'}_title_container`}
                    >
                        <h4>{'Escolha o tipo de instalações'.toUpperCase()}</h4>
                        <h2>{'Conforto'.toUpperCase()}</h2>
                        <p>
                            Passe o mouse sobre cada um dos padrões e entenda melhor como funciona o conforto que você pode ter na sua casa
                        </p>
                    </TitleContainer>
                    <Box
                        margin='20px 0'
                    >
                        <RadioButtons
                            options={confortos.options}
                            onChange={confortos.onChange}
                            select={confortos.value}
                        />
                    </Box>
                    <>
                        <StatusBox />
                    </>
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default ConfortoSlide