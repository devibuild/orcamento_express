import Navbar from "../components/common/Navbar"
import Stepper from "../components/common/StepperBackground"
import { Box, Flex, Layout } from "../components/Containers"
import StepContent from '../components/common/StepContent'
import Carousel from "../components/common/Carousel"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"


const Montar = () => {

    const router = useRouter()

    return (
        <Flex
            // alignItems='center'
            justifyContent='flex-end'
            height='100%'
        >
            <Navbar />
            <Stepper
                pinkDisplay
                title='Agora, vamos montar a sua casa?'
                parags={[
                    'Se você ainda não possui o projeto arquitetônico, não tem problema, a seguir faremos um passo a passo onde você poderá montar a sua casa projetando os cômodos do seu jeito.',
                    'Se você já possuir o projeto arquitetônico, preencha normalmente as próximas etapas conforme seu projeto e ao final saiba quanto sua casa vai custar.',
                ]}
                onStart={() => router.push('/levantamento')}
            />
            <Box
                width='100%'
                maxWidth='700px'
                height='100%'
                padding='20px'
            >
                <img src="/images/Pessoas/Pessoas 8.svg" width='100%' height='100%' alt="" />
            </Box>
        </Flex>
    )
}

export default Montar