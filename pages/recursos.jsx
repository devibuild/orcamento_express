import { useContext, useEffect, useState } from "react"
import RadioIconButtons from "../components/common/RadioIconButtons"
import RadioButtons from "../components/common/RadioButtons"
import { Box, Flex, Layout, TitleContainer } from "../components/Containers"
import { ExplainingP } from "../components/Text"
import Carousel from "../components/common/Carousel"
import First from "../components/specific/recursos/First"
import Second from "../components/specific/recursos/Second"
import { useRouter } from 'next/router'
import { ActiveIndexContext } from "../contexts/activeIndex"
import { SimulationDataContext } from "../contexts/SimulationData"
import useWindowDimensions from '../hooks/useWindowDimensions'
import { breakpoints } from "../utils/breakpoints"


const Resources = () => {

    const { width } = useWindowDimensions()
    const small = width < breakpoints.md && width !== 0

    const carouselItems = [
        <First key='resources_slide_1' small={small} />,
        <Second key='fist_2' small={small} />,
    ]

    const router = useRouter()

    const { setActiveIndex } = useContext(ActiveIndexContext)


    return (
        <Flex
            // height='calc(100% - 40px)'
        >
            <Carousel
                fullScreen
                items={carouselItems}
                page='recursos'
                lastSlideAction={() => {
                    router.push('/levantamento')
                }}
            />
        </Flex>
    )
}

export default Resources