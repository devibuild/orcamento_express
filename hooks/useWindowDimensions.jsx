import { useEffect, useState } from "react"


function getWindowDimensions() {
    const {
        innerWidth: width,
        innerHeight: height
    } = window

    return {
        width,
        height
    }

}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({
        height: 0,
        width: 0
    })
    
    function handleResize() {
        setWindowDimensions(getWindowDimensions())
    }

    useEffect(() => {
        if (window && windowDimensions.width === 0) {
            handleResize()
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}