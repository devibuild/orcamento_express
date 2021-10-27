import { createContext, useState } from "react";


export const ActiveIndexContext = createContext()

export const ActiveIndexProvider = ({ children }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const [activeIndexRecursos, setActiveIndexRecursos] = useState(0)
    const [activeIndexLevantamento, setActiveIndexLevantamento] = useState(0)
    const [activeIndexSimular, setActiveIndexSimular] = useState(0)

    return (
        <ActiveIndexContext.Provider value={{
            activeIndex,
            setActiveIndex,

            activeIndexRecursos,
            setActiveIndexRecursos,
            activeIndexLevantamento,
            setActiveIndexLevantamento,
            activeIndexSimular,
            setActiveIndexSimular,
        }}>
            { children }
        </ActiveIndexContext.Provider>
    )
}