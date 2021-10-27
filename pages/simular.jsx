import Navbar from "../components/common/Navbar"
import Stepper from "../components/common/StepperBackground"
import { Box, Flex, Layout } from "../components/Containers"
import StepContent from '../components/common/StepContent'
import Carousel from "../components/common/Carousel"
import { useContext, useEffect, useState } from "react"
import EstiloCasa from "../components/specific/simular/EstiloCasa"
import PavimentosEscadas from "../components/specific/simular/PavimentosEscadas"
import ParedesExternas from "../components/specific/simular/ParedesExternas"
import Telhas from "../components/specific/simular/Telhas"
import QuartosESuitesSlide from "../components/specific/simular/QuartosESuites"
import LavabosSlide from "../components/specific/simular/Lavabos"
import BanheirosSociaisSlide from "../components/specific/simular/BanheirosSociais"
import InstalacoesSlide from "../components/specific/simular/Instalacoes"
import { SimulationDataContext } from "../contexts/SimulationData"
import ResumoImovelSlide from "../components/specific/simular/ResumoImovel"
import { calculateAreaGourmet, calculateAreaServico, calculateCozinha, calculateDespensa, calculateEscritorio, calculateGarage, calculateSala } from "../utils/calculate_room_value"
import { RoomValuesContext } from '../contexts/RoomValues'
import router from "next/router"
import { breakpoints } from "../utils/breakpoints"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { PinkContainer } from "../components/specific/levantamento/styles"
import { Parag, Title2 } from "../components/Text"
import { ParagraphsContainer } from "../components/common/StepperBackground/styles"
import Button from "../components/common/Button"


const Simular = () => {

    const [initial, setInitial] = useState(true)

    const {
        simData,
        setSimData,
        // resources,
        // setResources,
        // simStatus,
        // setSimStatus,
        baseSqMtr,
        // setBaseSqMtr,
        // baseSqrMtrValueCalculator,
    } = useContext(SimulationDataContext)

    const {
        rooms,
        setRooms,
        area,
        setArea,
    } = useContext(RoomValuesContext)

    const stepsTitles = [
        'Estilo da sua casa',
        'Pavimentos e Escadas',
        'Paredes Externas',
        // 'Área Total',
        'Telhas',
        'Garagem',
        'Sala',
        'Cozinha',
        'Área Gourmet',
        'Área de Serviço',
        'Despensa',
        'Escritório',
        'Quartos',
        'Lavabos',
        'Banheiros Sociais',
        'Int. Hid./Ele.',
        // 'Conforto',
        // 'Acabamentos',
        // 'Resumo',
    ]

    const steps = [
        {
            caption: 'Escolha o tamanho da',
            title: 'Garagem',
            // subtitle: 'Escolha o padrão de acabamento da garagem',
            imageSrc: '/images/Ambientes/Ambientes11.svg',
            withFinishingPattern: {
                pattern: simData.garagem.pattern,
                setPattern: (newValue) => setSimData({
                    ...simData,
                    garagem: {
                        ...simData.garagem,
                        pattern: newValue
                    }
                }),
                confort: simData.garagem.confort,
                setConfort: (newValue) => setSimData({
                    ...simData,
                    garagem: {
                        ...simData.garagem,
                        confort: newValue
                    }
                }),
            },
            value: simData.garagem.value,
            onChange: (newValue) => setSimData({
                ...simData,
                garagem: {
                    ...simData.garagem,
                    value: newValue
                }
            }),
            options: [
                {
                    label: 'NÃO QUERO',
                    value: 0,
                },
                {
                    label: 'PEQUENA (1 CARRO - APROX. 10M²)',
                    value: 10,
                },
                {
                    label: 'MÉDIA (2 CARROS - APROX. 20M²)',
                    value: 20,
                },
                {
                    label: 'GRANDE (ATÉ 4 CARROS - APROX. 35M²)',
                    value: 35,
                },
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Sala',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes1.svg',
            withFinishingPattern: {
                pattern: simData.sala.pattern,
                setPattern: (newValue) => setSimData({
                    ...simData,
                    sala: {
                        ...simData.sala,
                        pattern: newValue
                    }
                }),
                confort: simData.sala.confort,
                setConfort: (newValue) => setSimData({
                    ...simData,
                    sala: {
                        ...simData.sala,
                        confort: newValue
                    }
                }),
            },
            value: simData.sala.value,
            onChange: newValue => setSimData({
                ...simData,
                sala: {
                    ...simData.sala,
                    value: newValue,
                },
            }),
            options: [
                {
                    label: 'NÃO QUERO',
                    value: 0,
                },
                {
                    label: 'Pequena (Aprox. 10 m²)',
                    value: 10,
                },
                {
                    label: 'Média (Aprox. 25 m²)',
                    value: 25,
                },
                {
                    label: 'Grande (Aprox. 40 m²)',
                    value: 40,
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.sala.value,
                    onChange: newValue => setSimData({
                        ...simData,
                        sala: {
                            ...simData.sala,
                            value: newValue,
                        },
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Cozinha',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes2.svg',
            withFinishingPattern: {
                pattern: simData.cozinha.pattern,
                setPattern: (newValue) => setSimData({
                    ...simData,
                    cozinha: {
                        ...simData.cozinha,
                        pattern: newValue
                    }
                }),
                confort: simData.cozinha.confort,
                setConfort: (newValue) => setSimData({
                    ...simData,
                    cozinha: {
                        ...simData.cozinha,
                        confort: newValue
                    }
                }),
            },
            value: simData.cozinha.value,
            onChange: newValue => setSimData({
                ...simData,
                cozinha: {
                    ...simData.cozinha,
                    value: newValue
                }
            }),
            options: [
                {
                    label: 'NÃO QUERO',
                    value: 0,
                },
                {
                    label: 'Pequena (Aprox. 10 m²)',
                    value: 10,
                },
                {
                    label: 'Média (Aprox. 20 m²)',
                    value: 20,
                },
                {
                    label: 'Grande (Aprox. 30 m²)',
                    value: 30,
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.cozinha.value,
                    onChange: newValue => setSimData({
                        ...simData,
                        cozinha: {
                            ...simData.cozinha,
                            value: newValue
                        }
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Área gourmet',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes3.svg',
            withFinishingPattern: {
                pattern: simData.areaGourmet.pattern,
                setPattern: (newValue) => setSimData({
                    ...simData,
                    areaGourmet: {
                        ...simData.areaGourmet,
                        pattern: newValue
                    }
                }),
                confort: simData.areaGourmet.confort,
                setConfort: (newValue) => setSimData({
                    ...simData,
                    areaGourmet: {
                        ...simData.areaGourmet,
                        confort: newValue
                    }
                }),
            },
            value: simData.areaGourmet.value,
            onChange: newValue => setSimData({
                ...simData,
                areaGourmet: {
                    ...simData.areaGourmet,
                    value: newValue
                },
            }),
            options: [
                {
                    label: 'Não quero',
                    value: 0,
                },
                {
                    label: 'Pequena (Aprox. 10 m²)',
                    value: 10,
                },
                {
                    label: 'Média (Aprox. 20 m²)',
                    value: 20,
                },
                {
                    label: 'Grande (Aprox. 30 m²)',
                    value: 30,
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.areaGourmet.value,
                    onChange: newValue => setSimData({
                        ...simData,
                        areaGourmet: {
                            ...simData.areaGourmet,
                            value: newValue
                        },
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Área de serviço',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes4.svg',
            withFinishingPattern: {
                pattern: simData.areaServico.pattern,
                setPattern: (newValue) => setSimData({
                    ...simData,
                    areaServico: {
                        ...simData.areaServico,
                        pattern: newValue
                    }
                }),
                confort: simData.areaServico.confort,
                setConfort: (newValue) => setSimData({
                    ...simData,
                    areaServico: {
                        ...simData.areaServico,
                        confort: newValue
                    }
                }),
            },
            value: simData.areaServico.value,
            onChange: newValue => setSimData({
                ...simData,
                areaServico: {
                    ...simData.areaServico,
                    value: newValue
                }
            }),
            options: [
                {
                    label: 'NÃO QUERO',
                    value: 0,
                },
                {
                    label: 'Pequena (Aprox. 3,5 m²)',
                    value: 3.5,
                },
                {
                    label: 'Média (Aprox. 6 m²)',
                    value: 6,
                },
                {
                    label: 'Grande (Aprox. 9 m²)',
                    value: 9,
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.areaServico.value,
                    onChange: newValue => setSimData({
                        ...simData,
                        areaServico: {
                            ...simData.areaServico,
                            value: newValue
                        }
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Despensa',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes5.svg',
            withFinishingPattern: {
                pattern: simData.despensa.pattern,
                setPattern: (newValue) => setSimData({
                    ...simData,
                    despensa: {
                        ...simData.despensa,
                        pattern: newValue
                    }
                }),
                confort: simData.despensa.confort,
                setConfort: (newValue) => setSimData({
                    ...simData,
                    despensa: {
                        ...simData.despensa,
                        confort: newValue
                    }
                }),
            },
            value: simData.despensa.value,
            onChange: newValue => setSimData({
                ...simData,
                despensa: {
                    ...simData.despensa,
                    value: newValue
                }
            }),
            options: [
                {
                    label: 'NÃO QUERO',
                    value: 0,
                },
                {
                    label: 'Pequena (Aprox. 3 m²)',
                    value: 3,
                },
                {
                    label: 'Média (Aprox. 6 m²)',
                    value: 6,
                },
                {
                    label: 'Grande (Aprox. 9 m²)',
                    value: 9,
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.despensa.value,
                    onChange: newValue => setSimData({
                        ...simData,
                        despensa: {
                            ...simData.despensa,
                            value: newValue
                        }
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho do',
            title: 'Escritório',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes6.svg',
            withFinishingPattern: {
                pattern: simData.escritorio.pattern,
                setPattern: (newValue) => setSimData({
                    ...simData,
                    escritorio: {
                        ...simData.escritorio,
                        pattern: newValue
                    }
                }),
                confort: simData.escritorio.confort,
                setConfort: (newValue) => setSimData({
                    ...simData,
                    escritorio: {
                        ...simData.escritorio,
                        confort: newValue
                    }
                }),
            },
            value: simData.escritorio.value,
            onChange: newValue => setSimData({
                ...simData,
                escritorio: {
                    ...simData.escritorio,
                    value: newValue
                }
            }),
            options: [
                {
                    label: 'NÃO QUERO',
                    value: 0,
                },
                {
                    label: 'Pequeno (Aprox. 8 m²)',
                    value: 8,
                },
                {
                    label: 'Médio (Aprox. 12 m²)',
                    value: 12,
                },
                {
                    label: 'Grande (Aprox. 20 m²)',
                    value: 20,
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.escritorio.value,
                    onChange: newValue => setSimData({
                        ...simData,
                        escritorio: {
                            ...simData.escritorio,
                            value: newValue
                        }
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
    ]

    const { width } = useWindowDimensions()
    const small = width < breakpoints.md && width !== 0



    const items = steps.map((e, i) => e.customComponent ? e.customComponent : (
        <StepContent key={`${e.title}_step_content_vai`} data={e} small={small} />
    ))

    items.unshift(<Telhas key='telhas_slide' small={small} />)
    items.unshift(<ParedesExternas key='paredes_externas_slide' small={small} />)
    items.unshift(<PavimentosEscadas key='pavimentos_e_escadas_slide' small={small} />)
    items.unshift(<EstiloCasa key='estilo_casa_slide' small={small} />)

    items.push(<QuartosESuitesSlide small={small} />)
    items.push(<LavabosSlide small={small} />)
    items.push(<BanheirosSociaisSlide small={small} />)
    items.push(<InstalacoesSlide small={small} />)
    // items.push(<ConfortoSlide small={small} />)
    // items.push(<AcabamentoSlide small={small} />)
    // items.push(<ResumoImovelSlide small={small} />)

    useEffect(() => {
        updateValues('garagem')
    }, [simData.garagem])

    useEffect(() => {
        updateValues('sala')
    }, [simData.sala])

    useEffect(() => {
        updateValues('cozinha')
    }, [simData.cozinha])

    useEffect(() => {
        updateValues('areaGourmet')
    }, [simData.areaGourmet])

    useEffect(() => {
        updateValues('areaServico')
    }, [simData.areaServico])

    useEffect(() => {
        updateValues('despensa')
    }, [simData.despensa])

    useEffect(() => {
        updateValues('escritorio')
    }, [simData.escritorio])

    const updateValues = (slide) => {
        // console.log('simData[slide].value', simData[slide].value)
        // console.log('simData[slide].pattern', simData[slide].pattern)

        if (simData[slide].pattern !== '') {

            let valorAmbiente = 0
            switch (slide) {
                case 'garagem':
                    valorAmbiente = calculateGarage(simData.garagem, baseSqMtr)
                    // console.log('simData.garagem: ', simData.garagem)
                    setRooms({
                        ...rooms,
                        garagem: valorAmbiente
                    })
                    break;

                case 'sala':
                    valorAmbiente = calculateSala(simData.sala, baseSqMtr)
                    setRooms({
                        ...rooms,
                        sala: valorAmbiente
                    })
                    break;

                case 'cozinha':
                    valorAmbiente = calculateCozinha(simData.cozinha, baseSqMtr)
                    setRooms({
                        ...rooms,
                        cozinha: valorAmbiente
                    })
                    break;

                case 'areaGourmet':
                    valorAmbiente = calculateAreaGourmet(simData.areaGourmet, baseSqMtr)
                    setRooms({
                        ...rooms,
                        areaGourmet: valorAmbiente
                    })
                    break;

                case 'areaServico':
                    valorAmbiente = calculateAreaServico(simData.areaServico, baseSqMtr)
                    setRooms({
                        ...rooms,
                        areaServico: valorAmbiente
                    })
                    break;

                case 'despensa':
                    valorAmbiente = calculateDespensa(simData.despensa, baseSqMtr)
                    setRooms({
                        ...rooms,
                        despensa: valorAmbiente
                    })
                    break;

                case 'escritorio':
                    valorAmbiente = calculateEscritorio(simData.escritorio, baseSqMtr)
                    setRooms({
                        ...rooms,
                        escritorio: valorAmbiente
                    })
                    break;



                default:
                    break;
            }
            const roomArea = simData[slide].value
            // console.log('roomArea: ', roomArea)
            setArea({
                ...area,
                [slide]: roomArea
            })
        }
    }


    if (initial) {
        if (small) {
            return (
                <>
                    <Navbar />
                    <PinkContainer>
                        <Box
                            margin='10px 0 40px'
                            maxWidth='650px'
                        >
                            <Title2
                                fontSize='3rem'
                                margin='0'
                            >
                                Agora, vamos montar a sua casa?
                            </Title2>
                            <ParagraphsContainer>
                                <Parag
                                    textColor='white'
                                >
                                    Se você ainda não possui o projeto arquitetônico, não tem problema, a seguir faremos um passo a passo onde você poderá montar a sua casa projetando os cômodos do seu jeito.
                                </Parag>
                                <Parag
                                    textColor='white'
                                >
                                    Se você já possuir o projeto arquitetônico, preencha normalmente as próximas etapas conforme seu projeto e ao final saiba quanto sua casa vai custar.
                                </Parag>
                            </ParagraphsContainer>
                        </Box>
                        <div>
                            <Button
                                onClick={() => setInitial(false)}
                            >
                                COMEÇAR
                            </Button>
                        </div>
                    </PinkContainer>
                </>
            )
        }

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
                    onStart={() => setInitial(false)}
                />
                <Box
                    width='100%'
                    maxWidth='700px'
                    height='100%'
                    padding='20px'
                >
                    <img src="/images/Pessoas/Pessoas 6.svg" width='100%' height='100%' alt="" />
                </Box>
            </Flex>
        )
    }

    if (small) {
        return (
            <>
                <Navbar />
                <Carousel
                    fullScreen
                    items={items}
                    page='simular'
                    lastSlideAction={() => router.push('/cadastro')}
                />
            </>
        )
    }

    return (
        <Flex
            // alignItems='center'
            justifyContent='flex-end'
            height='100%'
        >
            <Navbar />
            <Stepper
                steps={stepsTitles}
                title='Monte Sua Casa'
                page='simular'
            />
            <Carousel
                items={items}
                page='simular'
                lastSlideAction={() => router.push('/cadastro')}
            />
        </Flex>
    )
}

export default Simular