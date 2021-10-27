import { createContext, useContext, useEffect, useState } from "react";
import { FinancialSimContext } from "./FinancialSim";
import { RoomValuesContext } from "./RoomValues";
import { SimulationDataContext } from "./SimulationData";


export const SimulationStatusContext = createContext()

export const SimulationStatusContextProvider = ({ children }) => {

    const [simStatus, setSimStatus] = useState({
        funds: {
            total: 0,
            current: 0,
            previous: 0,
            available: 0,
        }
    })

    const [simArea, setSimArea] = useState({
        total: 0,
        current: 0,
        available: 0,
    })

    const {
        rooms,
        setRooms,
        instalations,
        area,
        // setArea
    } = useContext(RoomValuesContext)

    const { summary } = useContext(FinancialSimContext)

    const [sumRoomValues, setSumRoomValues] = useState(0)
    const [sumRoomAreas, setSumRoomAreas] = useState(0)
    const [instalationValues, setInstalationValues] = useState(0)

    // room values:

    useEffect(() => {
        let allRoomValues = 0
        for (let prop in rooms) {
            if ((Number(rooms[prop]))) {
                allRoomValues += Number(rooms[prop])
            }
        }
        setSumRoomValues(allRoomValues)
    }, [rooms])

    useEffect(() => {
        const newInstalationValues = instalations * sumRoomValues / 100
        // console.log('%: ', instalations / 100)
        setInstalationValues(newInstalationValues)
    }, [instalations, sumRoomValues])

    useEffect(() => {

        const currentFunds = sumRoomValues + instalationValues
        const availableFunds = simStatus.funds.total - currentFunds

        setSimStatus({
            ...simStatus,
            funds: {
                ...simStatus.funds,
                current: currentFunds,
                available: availableFunds,
            }
        })

    }, [sumRoomValues, instalationValues])


    // rooms areas:

    useEffect(() => {
        let allRoomsAreas = 0
        for (let room in area) {
            if ((Number(area[room]))) {
                allRoomsAreas += Number(area[room])
                // console.log('area[room]: ', area[room])
                // console.log('room: ', room)
            }
        }
        setSumRoomAreas(allRoomsAreas)
    }, [area])


    useEffect(() => {
        // console.log('sumRoomAreas: ', sumRoomAreas)

        const currentArea = sumRoomAreas
        const availableArea = simArea.total - currentArea

        setSimArea({
            ...simArea,
            current: currentArea,
            available: availableArea
        })
    }, [sumRoomAreas])


    // update total funds:
    useEffect(() => {
        if ((Number(summary.valorImovel))) {
            setSimStatus({
                funds: {
                    ...simStatus.funds,
                    total: Number(summary.valorImovel)
                }
            })
        }
    }, [summary.valorImovel])

    const setTotalArea = (area) => {
        setSimArea({
            ...simArea,
            total: area,
            available: area
        })
    }

    const setTotalFunds = (totalFunds) => {
        setSimStatus({
            // ...simStatus,
            funds: {
                ...simStatus.funds,
                total: totalFunds,
                available: totalFunds
            }
        })
    }

    return (
        <SimulationStatusContext.Provider value={{
            simStatus,
            setSimStatus,
            simArea,
            setSimArea,
            setTotalArea,
            setTotalFunds
        }}>
            {children}
        </SimulationStatusContext.Provider>
    )
}