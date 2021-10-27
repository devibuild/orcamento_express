import { Box, Flex, Layout, LogoMedium, TitleContainer } from "../components/Containers"
import { ExplainingP, H1, H2, H3 } from "../components/Text"
import { CaretRight } from 'phosphor-react'
import { useRouter } from 'next/router'
import Button from '../components/common/Button'
import useWindowDimensions from "../hooks/useWindowDimensions"
import { breakpoints } from "../utils/breakpoints"

const Main = () => {

    const router = useRouter()

    const { width } = useWindowDimensions()

    if (width < breakpoints.md && width !== 0) {
        return (
            <Flex
                column
                textAlign='left'
                width='100%'
                maxWidth='800px'
                // height='90%'
                // margin='auto'
                alignItems='center'
                justifyContent='center'
                padding='20px'
            // overflow='auto'
            >
                <Box
                    width='100%'
                >
                    <TitleContainer>
                        <h4>
                            CHEGOU A HORA DE TER A SUA CASA!
                        </h4>
                        <h1>
                            Saiba agora mesmo quanto sua casa vai custar e como ela pode ficar.
                        </h1>
                    </TitleContainer>
                    <ExplainingP>
                        Sabemos que construir um imóvel é um grande passo na vida de qualquer pessoa, por isso desenvolvemos essa ferramenta,
                        para te ajudar a se organizar e tirar o seu sonho do papel
                    </ExplainingP>
                    <ExplainingP>
                        As vezes o difícil é começar, mas fica tranquilo(a) você acaba de dar o primeiro passo e já está mais perto do seu sonho do que antes.
                    </ExplainingP>
                    <ExplainingP>
                        A partir de agora, <strong>deixa com a gente</strong>, vamos te guiar nessa jornada. Você vai ver como construir é bem mais simples do
                        que você imagina.
                    </ExplainingP>
                    <ExplainingP>
                        Para começar, vamos te ajudar a:
                    </ExplainingP>
                    <ExplainingP>
                        <strong>
                            1 - LEVANTAR OS RECURSOS PARA CONSTRUÇÃO
                        </strong>
                    </ExplainingP>
                    <ExplainingP>
                        <strong>
                            2 - MONTAR A SUA CASA, DO JEITINHO QUE VOCÊ SEMPRE SONHOU
                        </strong>
                    </ExplainingP>
                    <ExplainingP>
                        Tudo de forma bem simples e descomplicada, vamos começar?
                    </ExplainingP>
                    <Flex
                        column
                        width='100%'
                        margin='25px 0'
                    >
                        <Button
                            fontWeight='600'
                            onClick={() => router.push('/recursos')}
                            pink
                            margin='0 0 50px'
                        >
                            EU QUERO A MINHA CASA!
                        </Button>
                        <LogoMedium width='150px' src='/images/Logo.svg' />
                    </Flex>
                </Box>
            </Flex>
        )
    }

    return (
        // <Layout>
        <Flex
            // width='calc(100% - 100px)'
            height='100%' //'calc(100% - 100px)'
            justifyContent='space-evenly'
            margin='0'
        >
            <Box
                width='100%'
                maxWidth='700px'
                height='100%'
                padding='20px'
            >
                <img src="/images/Pessoas/Pessoas 7.svg" width='100%' height='100%' alt="" />
            </Box>
            <Flex
                column
                textAlign='left'
                width='100%'
                maxWidth='600px'
                // height='90%'
                margin='0'
                alignItems='flex-start'
                padding='20px'
            // overflow='auto'
            >
                <TitleContainer>
                    <h4>
                        CHEGOU A HORA DE TER A SUA CASA!
                    </h4>
                    <h1>
                        Saiba agora mesmo quanto sua casa vai custar e como ela pode ficar.
                    </h1>
                </TitleContainer>
                <ExplainingP>
                    Sabemos que construir um imóvel é um grande passo na vida de qualquer pessoa, por isso desenvolvemos essa ferramenta,
                    para te ajudar a se organizar e tirar o seu sonho do papel
                </ExplainingP>
                <ExplainingP>
                    As vezes o difícil é começar, mas fica tranquilo(a) você acaba de dar o primeiro passo e já está mais perto do seu sonho do que antes.
                </ExplainingP>
                <ExplainingP>
                    A partir de agora, <strong>deixa com a gente</strong>, vamos te guiar nessa jornada. Você vai ver como construir é bem mais simples do
                    que você imagina.
                </ExplainingP>
                <ExplainingP>
                    Para começar, vamos te ajudar a:
                </ExplainingP>
                <ExplainingP>
                    <strong>
                        1 - LEVANTAR OS RECURSOS PARA CONSTRUÇÃO
                    </strong>
                </ExplainingP>
                <ExplainingP>
                    <strong>
                        2 - MONTAR A SUA CASA, DO JEITINHO QUE VOCÊ SEMPRE SONHOU
                    </strong>
                </ExplainingP>
                <ExplainingP>
                    Tudo de forma bem simples e descomplicada, vamos começar?
                </ExplainingP>
                {/* <H1>
                        Orçamento Express
                    </H1>
                    <H2>
                        Se vc chegou até aqui é porque daqui a pouco você estará realizando uma das maiores conquistas da sua vida:
                    </H2>
                    <H2 fontSize='3rem'>
                        Morar na casa dos seu sonhos!
                    </H2>
                    <H3 fontSize='1.3rem'>
                        Simule o custo da sua casa e conte com a iBuild para entregar ela pronta pra você!
                    </H3> */}
                <Flex
                    width='100%'
                    height='50px'
                    margin='15px 0 0'
                    justifyContent='space-between'
                >
                    <Button
                        fontWeight='600'
                        onClick={() => router.push('/recursos')}
                        pink
                    >
                        EU QUERO A MINHA CASA!
                    </Button>
                    <LogoMedium src='/images/Logo.svg' />
                </Flex>
            </Flex>
        </Flex>
        // </Layout>
    )
}

export default Main