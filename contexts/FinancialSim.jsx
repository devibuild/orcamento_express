import { createContext, useEffect, useState } from "react";
import { calculateLastSac } from "../utils/calculate_SAC";
import { pmt } from '../utils/pmt'
import { round5 } from "../utils/round";


export const FinancialSimContext = createContext()

export const FinancialSimContextProvider = ({ children }) => {

    const [resources, setResources] = useState({
        // first page:
        resourcesSelect: '',
        financed_before: '',
        land_status: '',
        project_status: '',

        // step 0:
        renda: '',
        dob: '',
        estado_civil: '',
        local_construcao: '',
        //  step 1:
        valor_terreno: '',
        valor_entrada: '',
        valor_fgts: '',
        num_pis: '',
        mod_financiamento: '',
        parcelas: 'placeholder',
    })

    const [summary, setSummary] = useState({
        jurosAA: 0.08,
        jurosAM:  Math.pow(1.08, (1 / 12)) - 1,
        prestamista: 0.00038128125,
        txAdm: 25,
        valorFinanciamento: 0,
        valorImovel: 0,

        parcelaPrice: 0,
        parcelaSAC: [
            0,
            0
        ],
        amortizacao: 0,

        notFilled: true,
    })


    useEffect(() => {
        calculateValorImovel(summary)
    }, [resources.valor_entrada])

    useEffect(() => {
        calculateSummary(summary)
    }, [resources.parcelas])

    // useEffect(() => {
    //     calculateParcelaSAC(summary)
    // }, [summary.valorFinanciamento, summary.amortizacao])

    const calculateValorFinanciamento = () => {
        const rendaMensal = Number(resources.renda)
        const marlonIndex = 0.009274
        if (rendaMensal > 0) {
            const valorFinanciamento = round5(0.3 * rendaMensal / marlonIndex)
            const valorImovel = valorFinanciamento + Number(resources.valor_entrada) + Number(resources.valor_fgts) - Number(resources.valor_terreno)
            setSummary({
                ...summary,
                valorFinanciamento,
                valorImovel
            })
            return {
                ...summary,
                valorFinanciamento,
                valorImovel
            }
            // console.log('valorFinanciamento: ', valorFinanciamento)
            // console.log('typeof valorFinanciamento: ', typeof valorFinanciamento)
        }
        return {...summary}
    }

    const calculateValorImovel = () => {
        if (resources.valor_entrada > 0 && !isNaN(Number(resources.valor_entrada))) {
            const valorImovel = Number(resources.valor_entrada) / 0.2
            // const valorFinanciado = valorImovel - Number(resources.valor_entrada)
            setSummary({
                ...summary,
                // valorFinanciamento: valorFinanciado,
                valorImovel
            })
            return {
                ...summary,
                // valorFinanciamento: valorFinanciado,
                valorImovel
            }
        }
        // console.log('erro valor imovel')
        return {...summary}
    }

    const calculateParcelaPrice = (summary) => {
        if (!isNaN(Number(resources.parcelas)) && !isNaN(Number(summary.valorFinanciamento)) && !isNaN(Number(summary.jurosAM))) {
            const pPrice = pmt(summary.jurosAM, resources.parcelas, summary.valorFinanciamento) + summary.txAdm
            setSummary({
                ...summary,
                parcelaPrice: pPrice,
                amortizacao: summary.valorFinanciamento / resources.parcelas
            })
            return {
                ...summary,
                parcelaPrice: pPrice,
                amortizacao: summary.valorFinanciamento / resources.parcelas
            }
        }
        // console.log('erro parcela Price')
        return {...summary}
    }

    const calculateParcelaSAC = (summary) => {
        if (summary.valorFinanciamento > 0 && resources.parcelas !== '') {
            const jurosCalculados = summary.valorFinanciamento * summary.jurosAM
            const seguroPrestamista =  summary.valorFinanciamento * summary.prestamista
            
            // console.log('jurosCalculados: ', jurosCalculados)
            // console.log('seguroPrestamista: ', seguroPrestamista)
            // console.log('amortizacao: ', summary.amortizacao)

            
            const primeiraParcela = jurosCalculados + summary.amortizacao + seguroPrestamista + summary.txAdm
            const ultimaParcela = calculateLastSac(summary.valorFinanciamento, resources.parcelas, summary.amortizacao)
            const parcelas = [...summary.parcelaSAC]
            parcelas[0] = primeiraParcela
            parcelas[1] = ultimaParcela
            // console.log('parcelas: ', parcelas)
            setSummary({
                ...summary,
                parcelaSAC: parcelas
            })
            return {
                ...summary,
                parcelaSAC: parcelas
            }
        }
        // console.log('erro parcela SAC')
        return {...summary}
    }

    const calculateSummary = () => {
        let finalSummary = calculateValorFinanciamento(summary)
        finalSummary = calculateParcelaPrice(finalSummary)
        finalSummary = calculateParcelaSAC(finalSummary)
        // setSummary({ ...finalSummary })
        // console.log('calculateSummary!')
        // console.log('finalSummary: ', finalSummary)
        // console.log('summary: ', summary)
    }


    return (
        <FinancialSimContext.Provider value={{
            resources,
            setResources,
            summary,
            setSummary,
            calculateSummary,
            calculateValorFinanciamento
        }}>
            { children }
        </FinancialSimContext.Provider>
    )
}