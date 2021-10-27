import { Box, Flex, TitleContainer } from "../../Containers"
import { ResourcesIndexColumn } from "./styles"
import DataDisplay from '../../common/DataDisplay'
import { useContext, useEffect, useState } from "react"
import { FinancialSimContext } from "../../../contexts/FinancialSim"
import { formatMoney } from "../../../utils/format"
import { SlideContainer, StepContentContainer } from "../../common/StepContent/styles"
import { SimulationStatusContext } from "../../../contexts/SimulationStatus"
import { round5 } from '../../../utils/round'


const ResourcesIndex = ({ small }) => {


    const { summary, resources, calculateSummary } = useContext(FinancialSimContext)
    const { setTotalFunds, simStatus } = useContext(SimulationStatusContext)

    const [valorImovel, setValorImovel] = useState(0)

    
    
    useEffect(() => {
        const valorConstrucao = Number(resources.valor_entrada) + Number(resources.valor_fgts) + Number(summary.valorFinanciamento) - Number(resources.valor_terreno)
        setValorImovel(valorConstrucao)
        // console.log('valorConstrucao: ', valorConstrucao)
        // console.log('summary: ', summary)
        calculateSummary()
        setTotalFunds(valorConstrucao)
    }, [resources.parcelas])

    if (small) {
        return (
            <SlideContainer
                // width='100%'
                // maxHeight='calc(100vh - 200px)'
                // justifyContent='space-evenly'
                small
                key={'resumo_recursos'}
            >

                <StepContentContainer
                    small
                    key={`${'resumo_recursos'}_step_content_container`}
                >

                    <TitleContainer>
                        <h4>RESUMO DOS</h4>
                        <h1>RECURSOS PARA CONSTRUÇÃO</h1>
                    </TitleContainer>
                    <Flex
                        width='100%'
                        maxWidth='1050px'
                    // margin='30px 0'
                    >
                        <div style={{ display: 'none' }}></div>
                        <ResourcesIndexColumn small>
                            <Box
                                margin='0 0 20px 0'
                                width='100%'
                            >
                                <DataDisplay
                                    label='Renda bruta mensal'
                                    value={resources.renda === '' ? formatMoney(0) : formatMoney(Number(resources.renda))}
                                    key='Renda bruta mensal'
                                />
                                <DataDisplay
                                    key='Valor limite da parcela'
                                    label='Valor limite da parcela'
                                    value={resources.renda === '' ? formatMoney(0) : formatMoney(Number(0.3 * resources.renda))}
                                />
                            </Box>
                            <Box
                                margin='0 0 20px 0'
                                width='100%'
                            >
                                <DataDisplay
                                    label='Valor da entrada'
                                    key='Valor da entrada'
                                    value={resources.valor_entrada === '' ? formatMoney(0) : formatMoney(Number(resources.valor_entrada))}
                                />
                                <DataDisplay
                                    label='Valor do FGTS'
                                    key='Valor da FGTS'
                                    value={resources.valor_fgts === '' ? formatMoney(0) : formatMoney(Number(resources.valor_fgts))}
                                />
                                <DataDisplay
                                    label='Valor da entrada + FGTS'
                                    key='Valor da entrada + FGTS'
                                    value={resources.valor_entrada === '' && resources.valor_fgts === '' ? formatMoney(0) : formatMoney(Number(resources.valor_entrada) + Number(resources.valor_fgts))}
                                />
                                <DataDisplay
                                    label='Valor do terreno'
                                    key='Valor do terreno'
                                    value={resources.valor_terreno === '' ? formatMoney(0) : formatMoney(Number(resources.valor_terreno))}
                                />
                            </Box>
                            <Box
                                margin='0 0 20px 0'
                                width='100%'
                            >
                                <DataDisplay
                                    label='Tamanho estimado do imóvel'
                                    value={`${round5(valorImovel / 3000)}m² - ${round5(valorImovel / 2300)}m²`}
                                    key='Tamanho estimado do imóvel'
                                />
                                <DataDisplay
                                    label='Crédito disponível para financiamento'
                                    value={summary.valorFinanciamento === '' ? formatMoney(0) : formatMoney(Number(summary.valorFinanciamento))}
                                    key='Crédito disponível para financiamento'
                                />
                                <DataDisplay
                                    label='Valor disponível para construção'
                                    value={formatMoney(valorImovel)}
                                    key='Valor disponível para construção'
                                />
                            </Box>
                            <Box
                                margin='0 0 20px 0'
                                width='100%'
                            >
                                <DataDisplay
                                    label='Taxa de juros a.a (efetivo)'
                                    key='Taxa de juros a.a (efetivo)'
                                    value={`${summary.jurosAA * 100}%`}
                                />
                                <DataDisplay
                                    key='Taxa a.m'
                                    label='Taxa a.m'
                                    value={`${(summary.jurosAM * 100).toFixed(2)}%`}
                                />
                                <DataDisplay
                                    label='Quantidade de parcelas'
                                    key='Quantidade de parcelas'
                                    value={resources.parcelas === '' ? '360 meses' : `${resources.parcelas} meses`}
                                />
                                <DataDisplay
                                    label='Seguros prestamista'
                                    key='Seguros prestamista'
                                    value={`${(summary.prestamista * 100).toFixed(4)}%`}
                                />
                                <DataDisplay
                                    label='Taxa de administração'
                                    key='Taxa de administração'
                                    value={formatMoney(summary.txAdm)}
                                />
                            </Box>
                            <Box
                                margin='0 0 20px 0'
                                width='100%'
                            >
                                <DataDisplay
                                    label='Valor da parcela (price)'
                                    value={summary.parcelaPrice === '' ? formatMoney(0) : formatMoney(Number(summary.parcelaPrice))}
                                    key='Valor da parcela (price)'
                                />
                            </Box>
                            <Box
                                margin='0 0 20px 0'
                                width='100%'
                            >
                                <DataDisplay
                                    label='Valor inicial da prestação (SAC)'
                                    value={summary.parcelaSAC[0] === '' ? formatMoney(0) : formatMoney(Number(summary.parcelaSAC[0]))}
                                    key='Valor inicial da prestação (SAC)'
                                />
                                <DataDisplay
                                    label='Valor final da prestação (SAC)'
                                    value={summary.parcelaSAC[1] === '' ? formatMoney(0) : formatMoney(Number(summary.parcelaSAC[1]))}
                                    key='Valor final da prestação (SAC)'
                                />
                                <DataDisplay
                                    label='Amortização mensal'
                                    value={summary.amortizacao === '' ? formatMoney(0) : formatMoney(Number(summary.amortizacao))}
                                    key='Amortização mensal'
                                />
                            </Box>
                        </ResourcesIndexColumn>
                    </Flex>
                </StepContentContainer>
            </SlideContainer>
        )
    }

    return (
        <Flex
            column
            height='calc(100vh - 200px)'
            justifyContent='flex-start'
            overflow='auto'
        >
            <TitleContainer>
                <h4>RESUMO DOS</h4>
                <h1>RECURSOS PARA CONSTRUÇÃO</h1>
            </TitleContainer>
            <Flex
                width='100%'
                maxWidth='1050px'
            // margin='30px 0'
            >
                <ResourcesIndexColumn>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Renda bruta mensal'
                            value={resources.renda === '' ? formatMoney(0) : formatMoney(Number(resources.renda))}
                            key='Renda bruta mensal'
                        />
                        <DataDisplay
                            key='Valor limite da parcela'
                            label='Valor limite da parcela'
                            value={resources.renda === '' ? formatMoney(0) : formatMoney(Number(0.3 * resources.renda))}
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor da entrada'
                            key='Valor da entrada'
                            value={resources.valor_entrada === '' ? formatMoney(0) : formatMoney(Number(resources.valor_entrada))}
                        />
                        <DataDisplay
                            label='Valor do FGTS'
                            key='Valor da FGTS'
                            value={resources.valor_fgts === '' ? formatMoney(0) : formatMoney(Number(resources.valor_fgts))}
                        />
                        <DataDisplay
                            label='Valor da entrada + FGTS'
                            key='Valor da entrada + FGTS'
                            value={resources.valor_entrada === '' && resources.valor_fgts === '' ? formatMoney(0) : formatMoney(Number(resources.valor_entrada) + Number(resources.valor_fgts))}
                        />
                        <DataDisplay
                            label='Valor do terreno'
                            key='Valor do terreno'
                            value={resources.valor_terreno === '' ? formatMoney(0) : formatMoney(Number(resources.valor_terreno))}
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Tamanho estimado do imóvel'
                            value={`${round5(valorImovel / 3000)}m² - ${round5(valorImovel / 2300)}m²`}
                            key='Tamanho estimado do imóvel'
                        />
                        <DataDisplay
                            label='Crédito disponível para financiamento'
                            value={summary.valorFinanciamento === '' ? formatMoney(0) : formatMoney(Number(summary.valorFinanciamento))}
                            key='Crédito disponível para financiamento'
                        />
                        <DataDisplay
                            label='Valor disponível para construção'
                            value={formatMoney(valorImovel)}
                            key='Valor disponível para construção'
                        />
                    </Box>
                </ResourcesIndexColumn>

                <ResourcesIndexColumn>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Taxa de juros a.a (efetivo)'
                            key='Taxa de juros a.a (efetivo)'
                            value={`${summary.jurosAA * 100}%`}
                        />
                        <DataDisplay
                            key='Taxa a.m'
                            label='Taxa a.m'
                            value={`${(summary.jurosAM * 100).toFixed(2)}%`}
                        />
                        <DataDisplay
                            label='Quantidade de parcelas'
                            key='Quantidade de parcelas'
                            value={resources.parcelas === '' ? '360 meses' : `${resources.parcelas} meses`}
                        />
                        <DataDisplay
                            label='Seguros prestamista'
                            key='Seguros prestamista'
                            value={`${(summary.prestamista * 100).toFixed(4)}%`}
                        />
                        <DataDisplay
                            label='Taxa de administração'
                            key='Taxa de administração'
                            value={formatMoney(summary.txAdm)}
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor da parcela (price)'
                            value={summary.parcelaPrice === '' ? formatMoney(0) : formatMoney(Number(summary.parcelaPrice))}
                            key='Valor da parcela (price)'
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor inicial da prestação (SAC)'
                            value={summary.parcelaSAC[0] === '' ? formatMoney(0) : formatMoney(Number(summary.parcelaSAC[0]))}
                            key='Valor inicial da prestação (SAC)'
                        />
                        <DataDisplay
                            label='Valor final da prestação (SAC)'
                            value={summary.parcelaSAC[1] === '' ? formatMoney(0) : formatMoney(Number(summary.parcelaSAC[1]))}
                            key='Valor final da prestação (SAC)'
                        />
                        <DataDisplay
                            label='Amortização mensal'
                            value={summary.amortizacao === '' ? formatMoney(0) : formatMoney(Number(summary.amortizacao))}
                            key='Amortização mensal'
                        />
                    </Box>
                </ResourcesIndexColumn>
            </Flex>
        </Flex>
    )
}

export default ResourcesIndex