import { useContext, useState } from "react";
import { SimulationDataContext } from "../contexts/SimulationData";
import { baseAcabamentos } from "../utils/base_acabamentos";
import { baseObraBranca } from "../utils/base_obra_branca";


const useCalculateCurrent = (slide) => {

    const [current, setCurrent] = useState(0)
    const { simData, baseSqMtr } = useContext(SimulationDataContext)

    switch (slide) {
        case 'garagem':
            const area = simData[slide].value
           

            setCurrent(valorAmbiente)
            break;
    
        default:
            break;
    }

    return current
}

export default useCalculateCurrent