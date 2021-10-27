import { Box, Flex, TitleContainer } from "../../Containers"
import { MiddleContainer, StepContentContainer, StepImageContainer, SlideContainer } from "../../common/StepContent/styles"
import { useContext, useEffect, useState } from "react"
import { useRouter } from 'next/router'
import DataDisplay from "../../common/DataDisplay"
import { ResourcesIndexColumn } from "../levantamento/styles"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import Button from '../../common/Button'

const ResumoImovelSlide = ({ data }) => {

    const [instalacoes, setInstalacoes] = useState('')

    const router = useRouter()

    const { simData } = useContext(SimulationDataContext)

    const resumoData = [
        {
            label: 'Estilo da casa',
            value: simData.estilo
        },
        {
            label: 'Pavimentos',
            value: simData.pavimentos
        },
        {
            label: 'Escadas',
            value: simData.escada
        },
        {
            label: 'Paredes',
            value: simData.paredes
        },
        {
            label: 'Telhas',
            value: simData.telhas
        },
        {
            label: 'Garagem',
            value: simData.garagem.value
        },
        {
            label: 'Sala',
            value: simData.sala.value
        },
        {
            label: 'Cozinha',
            value: simData.cozinha.value
        },

    ]

    return (
        <>
            <Box height='60px'></Box>
            <SlideContainer
                key={'Resumo do Imóvel'}
            >
                {/* <StepImageContainer
                    key={`${'Resumo do Imóvel'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes15.svg' alt="" />
                </StepImageContainer> */}
                {/* <StepContentContainer
                    key={`${'Resumo do Imóvel'}_step_content_container`}
                > */}
                {/* <TitleContainer
                        key={`${'Resumo do Imóvel'}_title_container`}
                    >
                        <h4>{'Veja como ficou o'.toUpperCase()}</h4>
                        <h2>{'Resumo do Imóvel'.toUpperCase()}</h2>
                        <p>Descrever as escolhas do cliente</p>
                    </TitleContainer>
                    <Button
                        margin='20px 0'
                        onClick={() => router.push('/final')}
                    >
                        Próximo passo
                    </Button> */}

                <Flex
                    column
                    overflow='auto'
                    justifyContent='flex-start'
                    height='100%'
                >
                    <TitleContainer
                        key={`${'Resumo do Imóvel'}_title_container`}
                    >
                        <h4>{'Veja como ficou o'.toUpperCase()}</h4>
                        <h2>{'Resumo do Imóvel'.toUpperCase()}</h2>
                        <p>Descrever as escolhas do cliente</p>
                    </TitleContainer>
                    <Flex
                        width='100%'
                        maxWidth='1050px'
                        margin='30px 0'
                    >
                        <ResourcesIndexColumn>

                            {resumoData.map((e, i) => (
                                <Box
                                    margin='0 0 20px 0'
                                    width='100%'
                                    key={e.label}

                                >
                                    <DataDisplay
                                        label={e.label}
                                        value={e.value}
                                    />
                                </Box>

                            ))}

                        </ResourcesIndexColumn>

                        <ResourcesIndexColumn>
                            <Box
                                margin='0 0 20px 0'
                                width='100%'
                            >
                                <DataDisplay
                                    label='Taxa de juros a.a (efetivo)'
                                    value='8%'
                                    key='Taxa de juros a.a (efetivo)'
                                />
                                <DataDisplay
                                    key='Taxa a.m'
                                    label='Taxa a.m'
                                    value='0,64%'
                                />
                                <DataDisplay
                                    label='Quantidade de parcelas'
                                    key='Quantidade de parcelas'
                                    value='360 meses'
                                />
                                <DataDisplay
                                    label='Seguros prestamista'
                                    key='Seguros prestamista'
                                    value='0,0381%'
                                />
                                <DataDisplay
                                    label='Taxa de administração'
                                    key='Taxa de administração'
                                    value='R$ 25,00'
                                />
                            </Box>
                            <Box
                                margin='0 0 20px 0'
                                width='100%'
                            >
                                <DataDisplay
                                    label='Valor da parcela (price)'
                                    value='R$ 3.336,67'
                                    key='Valor da parcela (price)'
                                />
                            </Box>
                            <Box
                                margin='0 0 20px 0'
                                width='100%'
                            >
                                <DataDisplay
                                    label='Valor inicial da prestação (SAC)'
                                    value='R$ 4.439,21'
                                    key='Valor inicial da prestação (SAC)'
                                />
                                <DataDisplay
                                    label='Valor final da prestação (SAC)'
                                    value='R$ 1.175,65'
                                    key='Valor final da prestação (SAC)'
                                />
                                <DataDisplay
                                    label='Amortização mensal'
                                    value='R$ 1.142,80'
                                    key='Amortização mensal'
                                />
                            </Box>
                        </ResourcesIndexColumn>
                    </Flex>
                    <Button
                        margin='20px 0'
                        onClick={() => router.push('/final')}
                    >
                        Próximo passo
                    </Button>
                </Flex>
                {/* </StepContentContainer> */}
            </SlideContainer>
        </>
    )
}

export default ResumoImovelSlide