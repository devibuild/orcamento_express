import Navbar from "../components/common/Navbar"
import Stepper from "../components/common/StepperBackground"
import { Box, Flex, Layout } from "../components/Containers"
import StepContent from '../components/common/StepContent'
import Carousel from "../components/common/Carousel"
import { useContext, useEffect, useState } from "react"
import { useRouter } from 'next/router'
import ResourcesIndex from "../components/specific/levantamento/ResumoDosRecursos"
import { ActiveIndexContext } from "../contexts/activeIndex"
import { FinancialSimContext } from '../contexts/FinancialSim'
import Personal from "../components/specific/levantamento/Personal"
import { formatMoney } from "../utils/format"
import Finance from "../components/specific/levantamento/Finance"
import { Body2, Parag, Title2 } from '../components/Text'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { breakpoints } from '../utils/breakpoints'
import { Background, ParagraphsContainer } from "../components/common/StepperBackground/styles"
import { PinkContainer } from "../components/specific/levantamento/styles"
import Button from "../components/common/Button"


const Levantamento = () => {

    const router = useRouter()

    const { setActiveIndex } = useContext(ActiveIndexContext)

    const [startPage, setStartPage] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)


    const { width } = useWindowDimensions()
    const small = width < breakpoints.md && width !== 0

    // useEffect(() => {
    //     console.log('formatMoney(parseFloat(resources.renda)): ', formatMoney(parseFloat(resources.renda)))
    //     console.log('resources.renda: ', resources.renda)
    //     console.log('parseFloat(resources.renda): ', parseFloat(resources.renda))
    // }, [])

    const {
        resources,
        setResources,
        summary,
    } = useContext(FinancialSimContext)

    const stepsTitles = [
        'Informações pessoais',
        'Recursos Financeiros',
        'Resumo',
    ]


    const items = [
        <Personal small={small} />,
        <Finance small={small} />,
        <ResourcesIndex small={small} />
    ]

    if (startPage) {
        if (small) {
            return (
                <>
                    <Navbar />
                    <PinkContainer>
                        {/* <Flex
                            width='100%'
                        > */}
                        {/* <Flex 
                                column
                                alignItems='center'
                                justifyContent='space-between'
                                // margin='40px 0 0 0'
                                // margin='auto'
                                padding='16px'
                                // transform='translate(120px, 50px)'
                                // maxWidth='650px'
                                textAlign='left'
                                // height='70%'
                            > */}
                        <Box
                            margin='10px 0 40px'
                            maxWidth='650px'
                        >
                            <Title2
                                fontSize='3rem'
                                margin='0'
                            >
                                Vamos fazer o levantamento dos seus recursos?
                            </Title2>
                            <ParagraphsContainer>
                                <Parag
                                    textColor='white'
                                >
                                    A partir de agora vamos fazer um levantamento para analisar a viabilidade financeira do seu imóvel. Preencha os próximos campos corretamente para conseguirmos simular o valor aproximado do seu imóvel.
                                </Parag>
                            </ParagraphsContainer>
                        </Box>
                        <div>
                            <Button
                                onClick={() => setStartPage(false)}
                            >
                                COMEÇAR
                            </Button>
                        </div>
                        {/* </Flex> */}
                        {/* </Flex> */}
                    </PinkContainer>
                </>
            )
        } else {
            return (
                <Flex
                    // alignItems='center'
                    justifyContent='flex-end'
                    height='100%'
                >
                    <Navbar />
                    <Stepper
                        pinkDisplay
                        title='Vamos fazer o levantamento dos seus recursos?'
                        parags={[
                            'A partir de agora vamos fazer um levantamento para analisar a viabilidade financeira do seu imóvel. Preencha os próximos campos corretamente para conseguirmos simular o valor aproximado do seu imóvel.',
                        ]}
                        onStart={() => setStartPage(false)}
                    />
                    <Flex
                        width='100%'
                        maxWidth='700px'
                        height='100%'
                        padding='20px'
                    >
                        <img src="/images/Pessoas/Pessoas 8.svg" width='80%' height='80%' alt="" />
                    </Flex>
                </Flex>
            )
        }
    }

    if (small) {
        return (
            <>
                <Navbar />
                {/* <Stepper
                    steps={stepsTitles}
                    title='levantamento de recursos'
                    page='levantamento'
                /> */}
                <Carousel
                    fullScreen
                    items={items}
                    page='levantamento'
                    lastSlideAction={() => {
                        // if (summary.valorImovel < 1) {
                            // setErrorMessage(true)
                        // } else {
                            router.push('/simular')
                        // }
                    }}
                />
                {/* summary.notFilled && */}
            </>
        )
    }

    return (
        <>
            <Flex
                // alignItems='center'
                justifyContent='flex-end'
                height='100%'
            >
                <Navbar />
                <Stepper
                    steps={stepsTitles}
                    title='levantamento de recursos'
                    page='levantamento'
                />
                <Carousel
                    items={items}
                    page='levantamento'
                    lastSlideAction={() => {
                        // if (summary.valorImovel < 1) {
                            // setErrorMessage(true)
                        // } else {
                            router.push('/simular')
                        // }
                    }}
                />
                {/* summary.notFilled && */}
            </Flex>
        </>
    )
}

export default Levantamento







// {errorMessage && (
//     <>
//         {/* { errorMessage } */}
//         Preencha todos os campos para continuar
//     </>
// )}