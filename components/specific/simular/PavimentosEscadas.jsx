import { Box, Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../../common/RadioButtons"
// import Select from "./Select"
import { MiddleContainer, StepContentContainer, StepImageContainer } from "../../common/StepContent/styles"
import { useContext, useEffect, useState } from "react"
import { HomeStylePicContainer } from "./styles"
import { SimulationDataContext } from "../../../contexts/SimulationData"
// import Input from '../../form/Input'


const PavimentosEscadas = ({ small }) => {

    const [active, setActive] = useState(null)

    const pavimentosOptions = [
        {
            label: '1 (Térrea)',
            value: 1
        },
        {
            label: '2 (Sobrado ou mezanino)',
            value: 2
        },
        {
            label: '3 (Sobrado ou mezanino)',
            value: 3
        },
    ]

    const escadas = [
        {
            id: 'escada_inferior_fechada',
            imageSrc: '/images/escadas/1.jpg',
            label: 'PARTE INFERIOR FECHADA'
        },
        {
            id: 'escada_vigas_laterais',
            imageSrc: '/images/escadas/2.jpg',
            label: 'COM VIGAS LATERAIS'
        },
        {
            id: 'escada_viga_central',
            imageSrc: '/images/escadas/3.jpg',
            label: 'COM VIGA CENTRAL'
        },
        {
            id: 'escada_flutuante',
            imageSrc: '/images/escadas/4.jpg',
            label: 'ESCADA FLUTUANTE'
        },
    ]

    // useEffect(() => {
    //     console.log('pavimentos: ', pavimentos)
    // }, [pavimentos])

    // const [pavimentos, setPavimentos] = useState('')
    const { simData, setSimData } = useContext(SimulationDataContext)

    
    if (small) {
        return (
            <Flex
            // column
            //     width='100%'
                key='pavimentos_escadas'
            // maxHeight='95vh'
            // overflow='auto'

            column
                justifyContent='flex-start'
                // alignItems='flex-start'
                // transform='translateX(200px)'
                margin='0 0 30px'
                maxHeight='80vh'
                overflow='auto'
            >
                {/* <StepContentContainer
                    small
                    overflow='auto'
                > */}
                    <TitleContainer
                        key='pavimentos_title'
                        >
                        <h4>ESCOLHA A QUANTIDADE DE</h4>
                        <h2>PAVIMENTOS</h2>
                        {/* <p>{data.subtitle}</p> */}
                    </TitleContainer>
                   
                            <RadioButtons
                                options={pavimentosOptions}
                                onChange={(newValue) => {
                                    console.log('newValue: ', newValue)
                                    setSimData({
                                        ...simData,
                                        pavimentos: newValue
                                    })
                                }}
                                select={simData.pavimentos}
                                key='pavimentos_e_escadas_radio_buttons'
                                />
                    <TitleContainer
                        margin='50px 0 0'
                        key='escadas_title'
                    >
                        <h4>ESCOLHA O MODELO DA</h4>
                        <h2>Escada</h2>
                        <p>Apesar das ilustrações das escadas estarem retas, elas podem ter qualquer caminho, RETA, L ou U</p>
                    </TitleContainer>
                    <Flex
                        // justifyContent='flex-start'
                        // alignItems='flex-start'
                        wrap='wrap'
                    >
                        { escadas && escadas.map((e, i) => (
                                <HomeStylePicContainer
                                    width='130px'
                                    height='100px'
                                    imageSrc={e.imageSrc}
                                    key={e.id}
                                    active={simData.escada === e.id}
                                    onClick={() => setSimData({
                                        ...simData,
                                        escada: e.id
                                    })}
                                    >
                                    <div>
                                        <div>{ simData.escada === e.id ? <img src='/images/Ícones/Ícones 11.svg' /> : null}</div>
                                    </div>
                                    <p>{ e.label }</p>
                                </HomeStylePicContainer>
                            ))}
                    </Flex>
                {/* </StepContentContainer> */}
            </Flex>
        )
    }

    return (
        <Flex
            width='100%'
            justifyContent='space-evenly'
            key='pavimentos_escadas'
            // margin='50px 0 0'
        >
            <StepImageContainer>
                <img style={{ height: '100%' }} src="/images/Ambientes/Ambientes10.svg" alt="" />
            </StepImageContainer>
            <StepContentContainer>
                <TitleContainer
                    key='pavimentos_title'
                    >
                    <h4>ESCOLHA A QUANTIDADE DE</h4>
                    <h2>PAVIMENTOS</h2>
                    {/* <p>{data.subtitle}</p> */}
                </TitleContainer>
                        <RadioButtons
                            options={pavimentosOptions}
                            onChange={(newValue) => {
                                console.log('newValue: ', newValue)
                                setSimData({
                                    ...simData,
                                    pavimentos: newValue
                                })
                            }}
                            select={simData.pavimentos}
                            key='pavimentos_e_escadas_radio_buttons'
                            />
                <TitleContainer
                    margin='50px 0 0'
                    key='escadas_title'
                >
                    <h4>ESCOLHA O MODELO DA</h4>
                    <h2>Escada</h2>
                    <p>Apesar das ilustrações das escadas estarem retas, elas podem ter qualquer caminho, RETA, L ou U</p>
                </TitleContainer>
                <Flex
                    alignItems='flex-start'
                >
                    { escadas && escadas.map((e, i) => (
                            <HomeStylePicContainer
                                width='130px'
                                height='100px'
                                imageSrc={e.imageSrc}
                                key={e.id}
                                active={simData.escada === e.id}
                                onClick={() => setSimData({
                                    ...simData,
                                    escada: e.id
                                })}
                                >
                                <div>
                                    <div>{ simData.escada === e.id ? <img src='/images/Ícones/Ícones 11.svg' /> : null}</div>
                                </div>
                                <p>{ e.label }</p>
                            </HomeStylePicContainer>
                        ))}
                </Flex>
                {/* <Flex>
                    { escadas && escadas.map((e, i) => i > 1 ? (
                            <HomeStylePicContainer
                                width='130px'
                                height='100px'
                                imageSrc={e.imageSrc}
                                key={e.id}
                                active={active === i}
                                onClick={() => setActive(i)}
                                >
                                <div>
                                    <div>{ active === i ? <img src='/images/Ícones/Ícones 11.svg' /> : null}</div>
                                </div>
                                <p>{ e.label }</p>
                            </HomeStylePicContainer>
                        ) : null)}
                </Flex> */}
            </StepContentContainer>
        </Flex>
    )
}

export default PavimentosEscadas