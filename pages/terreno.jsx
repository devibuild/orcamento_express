import { Box, Flex, Layout, TitleContainer } from "../components/Containers"
import RadioIconButtons from '../components/common/RadioIconButtons'


const Resource = () => {

    const options = [
        {
            label: 'tenho todo o recurso para construir',
            value: 'own_resource',
            iconSrc: ''
        }
    ]


    return (
        <Layout>
            <Flex
                // width='calc(100% - 100px)'
                height='100%' //'calc(100% - 100px)'
                justifyContent='space-evenly'
                margin='0'
            >
                <Flex
                    column
                    textAlign='left'
                    width='100%'
                    // maxWidth='600px'
                    margin='0'
                    alignItems='flex-start'
                    padding='20px'
                >
                    <TitleContainer>
                        <h4>
                            VAMOS COMEÇAR?
                        </h4>
                        <h1>
                            Escolha o tipo de recurso financeiro que você pretende usar para construir
                        </h1>
                    </TitleContainer>
                    <RadioIconButtons options={options} />
                </Flex>
                <Box
                    width='100%'
                    maxWidth='500px'
                    height='100%'
                    padding='20px'
                >
                    <img src="/images/Pessoas/Pessoas 5.svg" width='100%' height='100%' alt="" />
                </Box>
            </Flex>
        </Layout>
    )
}

export default Resource