import { useContext, useEffect } from "react"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { SimulationStatusContext } from "../../../contexts/SimulationStatus"
import { formatMoney } from "../../../utils/format"
import { Flex } from "../../Containers"
import { Status, StatusBoxContainer, StatusNumbers, StatusNumbersLabel, ValueBoxes } from "./styles"
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { breakpoints } from '../../../utils/breakpoints'

const StatusBox = () => {

    const {
        simStatus,
        setSimStatus,
        simArea,
    } = useContext(SimulationStatusContext)

    const { width } = useWindowDimensions()
    const small = width < breakpoints.md && width !== 0

    if (small) {
        // console.log('smaallll')
        return (
            <StatusBoxContainer>
                <Flex>
                    <StatusNumbersLabel>
                        VALORES
                    </StatusNumbersLabel>
                    <StatusNumbers>
                        <ValueBoxes>
                            <div className='valueTag'>
                                TOTAL
                            </div>
                            <div className='value'>
                                {formatMoney(simStatus.funds.total)}
                            </div>
                        </ValueBoxes>
                        <ValueBoxes>
                            <div className='valueTag'>
                                ATÉ AGORA
                            </div>
                            <div className='value'>
                                {formatMoney(simStatus.funds.current)}
                            </div>
                        </ValueBoxes>
                        <ValueBoxes last green>
                            <div className='valueTag'>
                                DISPONÍVEL
                            </div>
                            <div className='value'>
                                {formatMoney(simStatus.funds.available)}
                            </div>
                        </ValueBoxes>
                    </StatusNumbers>
                </Flex>
                <Flex>
                    <StatusNumbersLabel>
                        METROS
                    </StatusNumbersLabel>
                    <StatusNumbers>
                        <ValueBoxes>
                            <div className='valueTag'>
                                TOTAL
                            </div>
                            <div className='value'>
                                {simArea.total} m²
                            </div>
                        </ValueBoxes>
                        <ValueBoxes>
                            <div className='valueTag'>
                                ATÉ AGORA
                            </div>
                            <div className='value'>
                                {(simArea.current)} m²
                            </div>
                        </ValueBoxes>
                        <ValueBoxes last pink>
                            <div className='valueTag'>
                                DISPONÍVEL
                            </div>
                            <div className='value'>
                                {(simArea.available)} m²
                            </div>
                        </ValueBoxes>
    
                    </StatusNumbers>
                </Flex>
            </StatusBoxContainer>
        )
    }

    return (
        <StatusBoxContainer>
            <Flex>
                <StatusNumbersLabel>
                    VALORES
                </StatusNumbersLabel>
                <StatusNumbers>
                    <ValueBoxes>
                        <div className='valueTag'>
                            VALOR DISPONÍVEL
                        </div>
                        <div className='value'>
                            {formatMoney(simStatus.funds.total)}
                        </div>
                    </ValueBoxes>
                    <ValueBoxes>
                        <div className='valueTag'>
                            CUSTO DO IMÓVEL
                        </div>
                        <div className='value'>
                            {formatMoney(simStatus.funds.current)}
                        </div>
                    </ValueBoxes>
                    <ValueBoxes last green>
                        <div className='valueTag'>
                            VOCÊ AINDA PODE USAR
                        </div>
                        <div className='value'>
                            {formatMoney(simStatus.funds.available)}
                        </div>
                    </ValueBoxes>
                </StatusNumbers>
            </Flex>
            <Flex>
                <StatusNumbersLabel>
                    METROS
                </StatusNumbersLabel>
                <StatusNumbers>
                    <ValueBoxes>
                        <div className='valueTag'>
                            TAMANHO DISPONÍVEL
                        </div>
                        <div className='value'>
                            {(simArea.total)} m²
                        </div>
                    </ValueBoxes>
                    <ValueBoxes>
                        <div className='valueTag'>
                            TOTAL ATÉ AGORA
                        </div>
                        <div className='value'>
                            {(simArea.current)} m²
                        </div>
                    </ValueBoxes>
                    <ValueBoxes last pink>
                        <div className='valueTag'>
                            VOCÊ AINDA PODE USAR
                        </div>
                        <div className='value'>
                            {(simArea.available)} m²
                        </div>
                    </ValueBoxes>

                </StatusNumbers>
            </Flex>
            {/* <Status>
                SUA CASA ESTÁ DENTRO DO SEU CUSTO
            </Status> */}
        </StatusBoxContainer>
    )
}

export default StatusBox