import { useContext, useEffect, useState } from "react"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { Box, Flex, TitleContainer } from "../../Containers"
import { HomeStylePic, HomeStylePicContainer } from "./styles"


const EstiloCasa = ({ small }) => {

    const [active, setActive] = useState(null)

    const { simData, setSimData } = useContext(SimulationDataContext)

    // useEffect(() => {
    //     console.log('active: ', active)
    // }, [active])

    const estilos = [
        {
            id: 'Clássico',
            imageSrc: '/images/EstilosCasa/classica.jpg',
            label: 'CLÁSSICO'
        },
        {
            id: 'Neoclássico',
            imageSrc: '/images/EstilosCasa/neoClassica.jpg',
            label: 'NEO-CLÁSSICO'
        },
        {
            id: 'Mediterrâneo',
            imageSrc: '/images/EstilosCasa/mediterranea.jpg',
            label: 'MEDITERRÂNEO'
        },
        {
            id: 'Brasileiro',
            imageSrc: '/images/EstilosCasa/brasileira.png',
            label: 'BRASILEIRO'
        },
        {
            id: 'Minimalista',
            imageSrc: '/images/EstilosCasa/minimalista.jpg',
            label: 'MINIMALISTA'
        },
        {
            id: 'Contemporâneo',
            imageSrc: '/images/EstilosCasa/contemporanea.png',
            label: 'CONTEMPORÂNEO'
        },
        {
            id: 'Americano',
            imageSrc: '/images/EstilosCasa/americana.jpg',
            label: 'AMERICANO'
        },
        {
            id: 'Europeu',
            imageSrc: '/images/EstilosCasa/europeia.jpg',
            label: 'EUROPEU'
        },
    ]

    if (small) {
        return (
            <Flex
                column
                justifyContent='flex-start'
                // alignItems='flex-start'
                // transform='translateX(200px)'
                // margin='0 0 30px'
                maxHeight='85vh'
                overflow='auto'
            >
                <TitleContainer>
                    <h4>ESCOLHA O</h4>
                    <h1>ESTILO DA SUA CASA</h1>
                </TitleContainer>
                <Flex
                    column
                    // width='100%'
                    maxWidth='1050px'
                    margin='30px 0'
    
                >
                    <Flex
                        wrap='wrap'
                    >
                        { estilos && estilos.map((e, i) => i < 4 ? (
                            <HomeStylePicContainer
                                imageSrc={e.imageSrc}
                                key={e.id}
                                active={simData.estilo === e.id}
                                onClick={() => setSimData({
                                    ...simData,
                                    estilo: e.id
                                })}
                                >
                                <div>
                                    <div>{ simData.estilo === e.id ? <img src='/images/Ícones/Ícones 11.svg' /> : null}</div>
                                </div>
                                <p>{ e.label }</p>
                            </HomeStylePicContainer>
                        ) : null)}
                    </Flex>
                    <Flex
                        wrap='wrap'
                        >
                        { estilos && estilos.map((e, i) => i >= 4 ? (
                            <HomeStylePicContainer
                                imageSrc={e.imageSrc}
                                key={e.id}
                                active={simData.estilo === e.id}
                                onClick={() => setSimData({
                                    ...simData,
                                    estilo: e.id
                                })}
                                >
                                <div>
                                    <div>{ simData.estilo === e.id ? <img src='/images/Ícones/Ícones 11.svg' /> : null}</div>
                                </div>
                                <p>{ e.label }</p>
                            </HomeStylePicContainer>
                        ) : null)}
                    </Flex>
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex
            column
            // alignItems='flex-start'
            // transform='translateX(200px)'
            margin='0 0 0 100px'
        >
            <TitleContainer>
                <h4>ESCOLHA O</h4>
                <h1>ESTILO DA SUA CASA</h1>
            </TitleContainer>
            <Flex
                column
                // width='100%'
                maxWidth='1050px'
                margin='30px 0'

            >
                <Flex
                    wrap='wrap'
                >
                    { estilos && estilos.map((e, i) => i < 4 ? (
                        <HomeStylePicContainer
                            imageSrc={e.imageSrc}
                            key={e.id}
                            active={simData.estilo === e.id}
                            onClick={() => setSimData({
                                ...simData,
                                estilo: e.id
                            })}
                            >
                            <div>
                                <div>{ simData.estilo === e.id ? <img src='/images/Ícones/Ícones 11.svg' /> : null}</div>
                            </div>
                            <p>{ e.label }</p>
                        </HomeStylePicContainer>
                    ) : null)}
                </Flex>
                <Flex
                    wrap='wrap'
                    >
                    { estilos && estilos.map((e, i) => i >= 4 ? (
                        <HomeStylePicContainer
                            imageSrc={e.imageSrc}
                            key={e.id}
                            active={simData.estilo === e.id}
                            onClick={() => setSimData({
                                ...simData,
                                estilo: e.id
                            })}
                            >
                            <div>
                                <div>{ simData.estilo === e.id ? <img src='/images/Ícones/Ícones 11.svg' /> : null}</div>
                            </div>
                            <p>{ e.label }</p>
                        </HomeStylePicContainer>
                    ) : null)}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default EstiloCasa