import { Box, Flex, Layout, LogoMedium, TitleContainer } from "../components/Containers"
import { ExplainingP, H1, H2, H3 } from "../components/Text"
import { CaretRight } from 'phosphor-react'
import { useRouter } from 'next/router'
import Button from '../components/common/Button'
import useWindowDimensions from "../hooks/useWindowDimensions"
import { breakpoints } from "../utils/breakpoints"
import InfoBadge from "../components/specific/final/InfoBadge"
import { useContext, useEffect } from "react"
import { SimulationDataContext } from "../contexts/SimulationData"
import { SimulationStatusContext } from "../contexts/SimulationStatus"
import { capitalizeFirstLetter } from "../utils/format"

const Final = () => {

    const router = useRouter()

    const { simData } = useContext(SimulationDataContext)
    const { simArea } = useContext(SimulationStatusContext)

    const { width } = useWindowDimensions()
    const small = width < breakpoints.md && width !== 0

    if (small) {
        return (
            <Flex width='100%'>
                <Flex
                    column
                    textAlign='left'
                    width='100%'
                    maxWidth='800px'
                    // height='80%'
                    margin='0'
                    // alignItems='flex-start'
                    // justifyContent='space-between'
                    padding='20px'
                    // overflow='auto'
                >
                    <Box>
                    <TitleContainer>
                        <h4>
                            VIU COMO FOI FÁCIL, AGORA VAMOS VER O
                        </h4>
                        <h1>
                            RESUMO DA SUA CASA
                        </h1>
                    </TitleContainer>
                    <Flex
                        width='100%'
                        wrap='wrap'
                        margin='32px 0 0'
                        // justifyContent='flex-start'
                    >
                        <InfoBadge
                            key='Área Total'
                            label='Área Total'
                            value={`${simArea.current} m²`}
                            iconSrc='/images/Ícones/Ícones 8.svg'
                        />
                        <InfoBadge
                            key='Estilo Arquitetônico'
                            label='Estilo Arquitetônico'
                            value={simData.estilo}
                            iconSrc='/images/Ícones/Ícones 6.svg'
                        />
                        <InfoBadge
                            key='Pavimentos'
                            label='Pavimentos'
                            value={simData.pavimentos}
                            iconSrc='/images/Ícones/Ícones 7.svg'
                        />
                        <InfoBadge
                            key='Padrão Paredes Externas'
                            label='Padrão Paredes Externas'
                            value={capitalizeFirstLetter(simData.paredes)}
                            iconSrc='/images/Ícones/Ícones 8.svg'
                        />
                        <InfoBadge
                            key='Tipo de Telha'
                            label='Tipo de Telha'
                            value={capitalizeFirstLetter(simData.telhas)}
                            iconSrc='/images/Ícones/Ícones 8.svg'
                        />
                        <InfoBadge
                            key='Sistema Elétrico/Hidráulico'
                            label='Sistema Elétrico/Hidráulico'
                            value={`${simData.instalacoes.eletrica === 6 ? '110/220' : '110'} V - ${simData.instalacoes.hidraulica === 9 ? 'Água Quente e Fria' : 'Somente Água fria'}`}
                            iconSrc='/images/Ícones/Ícones 8.svg'
                        />
                    </Flex>
                </Box>
                        <Button
                            fontWeight='600'
                        margin='1rem'

                        // onClick={() => router.push('/recursos')}
                        >
                            QUERO VER A PROPOSTA DETALHADA
                        </Button>
                        {/* <LogoMedium src='/images/Logo.svg' /> */}
                </Flex>
            </Flex>
        )
    }

    return (
        // <Layout>
        <Flex
            // width='calc(100% - 100px)'
            height='100%' //'calc(100% - 100px)'
            // justifyContent='space-evenly'
            margin='0'
        >
            <Flex
                column
                textAlign='left'
                width='100%'
                maxWidth='800px'
                height='80%'
                margin='0'
                alignItems='flex-start'
                justifyContent='space-between'
                padding='20px'
                overflow='auto'
            >
                <Box>
                    <TitleContainer>
                        <h4>
                            VIU COMO FOI FÁCIL, AGORA VAMOS VER O
                        </h4>
                        <h1>
                            RESUMO DA SUA CASA
                        </h1>
                    </TitleContainer>
                    <Flex
                        width='100%'
                        wrap='wrap'
                        margin='32px 0 0'
                        // justifyContent='flex-start'
                    >
                        <InfoBadge
                            key='Área Total'
                            label='Área Total'
                            value={`${simArea.current} m²`}
                            iconSrc='/images/Ícones/Ícones 8.svg'
                        />
                        <InfoBadge
                            key='Estilo Arquitetônico'
                            label='Estilo Arquitetônico'
                            value={simData.estilo}
                            iconSrc='/images/Ícones/Ícones 6.svg'
                        />
                        <InfoBadge
                            key='Pavimentos'
                            label='Pavimentos'
                            value={simData.pavimentos}
                            iconSrc='/images/Ícones/Ícones 7.svg'
                        />
                        <InfoBadge
                            key='Padrão Paredes Externas'
                            label='Padrão Paredes Externas'
                            value={capitalizeFirstLetter(simData.paredes)}
                            iconSrc='/images/Ícones/Ícones 8.svg'
                        />
                        <InfoBadge
                            key='Tipo de Telha'
                            label='Tipo de Telha'
                            value={capitalizeFirstLetter(simData.telhas)}
                            iconSrc='/images/Ícones/Ícones 8.svg'
                        />
                        <InfoBadge
                            key='Sistema Elétrico/Hidráulico'
                            label='Sistema Elétrico/Hidráulico'
                            value={`${simData.instalacoes.eletrica === 6 ? '110/220' : '110'} V - ${simData.instalacoes.hidraulica === 9 ? 'Água Quente e Fria' : 'Somente Água fria'}`}
                            iconSrc='/images/Ícones/Ícones 8.svg'
                        />
                    </Flex>
                </Box>

                <Flex
                    width='100%'
                    height='50px'
                    margin='15px 0 0'
                    // justifyContent='space-between'
                >
                    <Button
                        fontWeight='600'
                    // onClick={() => router.push('/recursos')}
                    >
                        QUERO VER A PROPOSTA DETALHADA
                    </Button>
                    {/* <LogoMedium src='/images/Logo.svg' /> */}
                </Flex>
            </Flex>
            <Box
                width='100%'
                maxWidth='700px'
                height='80%'
                padding='20px'
            >
                <img src="/images/Pessoas/Pessoas 2.svg" width='100%' height='100%' alt="" />
            </Box>
        </Flex>
        // </Layout>
    )
}

export default Final