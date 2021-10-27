import { useContext, useEffect, useState } from "react"
import { Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../../common/RadioButtons"
import StatusBox from "../../common/StatusBox"
// import Select from "./Select"
import { MiddleContainer, StepContentContainer, StepImageContainer } from "../../common/StepContent/styles"
import Input from '../../form/Input'
import FinishingPattern from "../../common/FinishingPattern"
import StepContent from "../../common/StepContent"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { baseObraBranca } from "../../../utils/base_obra_branca"


const Telhas = ({ small }) => {

    // const [telhas, setTelhas] = useState('')
    const [counter, setCounter] = useState(0)

    const {
        simData,
        setSimData,
        // simStatus,
        // setSimStatus,
        baseSqMtr,
        setBaseSqMtr,
        baseSqrMtrValueCalculator,
    } = useContext(SimulationDataContext)

    const options = [
        {
            label: 'TERMOACÚSTICA',
            value: 'termoacustica',
        },
        {
            label: 'FIBROCIMENTO',
            value: 'fibrocimento',
        },
        {
            label: 'CERÂMICA',
            value: 'ceramica',
        },
    ]

    useEffect(() => {
        if (simData.telhas !== '') {
            if (counter === 0) {
                const baseSqMtrWithRoof = baseSqMtr.value + baseObraBranca.cobertura[simData.telhas] + baseObraBranca.cobertura.calhas
                setBaseSqMtr({
                    ...baseSqMtr,
                    value: baseSqMtrWithRoof
                })
            } else {
                const restartedBaseSqrMtrValue = baseSqrMtrValueCalculator(baseSqMtr.category)
                const baseSqMtrWithRoof = restartedBaseSqrMtrValue + baseObraBranca.cobertura[simData.telhas] + baseObraBranca.cobertura.calhas
                setBaseSqMtr({
                    ...baseSqMtr,
                    value: baseSqMtrWithRoof
                })
            }
        }
        setCounter(counter + 1)
    }, [simData.telhas])

    const inputs = null

    return (
        <StepContent
            data={{
                caption: 'Escolha o tipo de',
                title: 'Telha',
                // subtitle: 'Escolha o tipo das telhas da casa',
                imageSrc: '/images/Ambientes/Ambientes15.svg',
                value: simData.telhas,
                onChange: (newValue) => setSimData({
                    ...simData,
                    telhas: newValue
                }),
                options: [
                    {
                        label: 'TERMOACÚSTICA',
                        value: 'termoacustica',
                    },
                    {
                        label: 'FIBROCIMENTO',
                        value: 'fibrocimento',
                    },
                    {
                        label: 'CERÂMICA',
                        value: 'ceramica',
                    },
                ]
            }}
            noStatusBox
            small={small}
        />
    )
}

export default Telhas