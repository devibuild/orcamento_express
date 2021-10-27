// import MyCarousel from '../components/common/Carousel'
import { Flex } from '../components/Containers'
import dynamic from 'next/dynamic'
import Carousel from '../components/common/Carousel'



const Teste = () => {
    return (
        <Flex>
            <Carousel stepper />
        </Flex>
    )
}

export default Teste