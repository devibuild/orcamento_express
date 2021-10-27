import { useContext, useEffect, useState } from "react"
import Button from "../components/common/Button"
import Navbar from "../components/common/Navbar"
import { Box, Flex, LogoMedium, TitleContainer } from "../components/Containers"
import Input from "../components/form/Input"
import Select from "../components/form/Select"
import { ExplainingP } from "../components/Text"
import { useRouter } from 'next/router'
import { UserContext } from '../contexts/UserContext'
import { createLead } from "../services/bitrixClient"
import { getCityByUF, getUFs } from "../services/geoClient"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { breakpoints } from "../utils/breakpoints"

const Cadastro = () => {

    const router = useRouter()

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [cpf, setCpf] = useState('')
    // const [phone, setPhone] = useState('')
    // const [state, setState] = useState('')
    // const [city, setCity] = useState('')
    const initialSelect = []

    const [states, setStates] = useState(initialSelect)
    const [cities, setCities] = useState(initialSelect)

    const { user, setUser } = useContext(UserContext)

    const handleCreateLead = () => {
        if (user) {
            const lead = {
                // LOGIN: 'diego@ibuildconstrutora.com.br',
                // PASSWORD: 'DgfDvpC!',
                // TITLE: 'Lead Orçamento Express',
                // NAME: user.name,
                // PHONE_WORK: user.phone,
                // EMAIL_WORK: user.email,
                NAME: user.name,
                EMAIL: user.email,
                CPF: user.cpf,
                PHONE: user.phone,
                UF: user.uf,
                CITY: user.city


            }
            createLead(lead)
                .then(res => {
                    console.log('res: ', res)
                    router.push('/final')
                })
                .catch(err => {
                    // router.push('/simular')
                    console.error(err)
                })
        }
    }

    useEffect(() => {
        getUFs()
            .then(res => {
                // console.log('res: ', res)
                if (res && res.data) {
                    const data = [...res.data]
                    const newOptions = data.map((e, i) => ({
                        label: e.sigla,
                        value: e.sigla
                    }))
                    // newOptions.unshift({
                    //     label: 'Selecione',
                    //     value: 'placeholder',
                    //     disabled: true,
                    // })
                    setStates(newOptions)
                }
            })
    }, [])

    useEffect(() => {
        if (user && user?.uf !== 'placeholder') {
            getCityByUF(user.uf)
                .then(res => {
                    // console.log('res: ', res)
                    if (res && res.data) {
                        const data = [...res.data]
                        const newOptions = data.map((e, i) => ({
                            label: e.nome,
                            value: e.nome
                        }))
                        // newOptions.unshift({
                        //     label: 'Selecione',
                        //     value: 'placeholder',
                        //     disabled: true,
                        // })
                        setCities(newOptions)
                    }
                })
        }
    }, [user.uf])

    const { width } = useWindowDimensions()
    const small = width < breakpoints.md && width !== 0

    if (small) {
        return (
            <>
                <Navbar />
            <Flex
                width='100%'
                column
                >
                <Flex
                    column
                    textAlign='left'
                    width='100%'
                    maxWidth='600px'
                    margin='0'
                    alignItems='flex-start'
                    padding='20px'
                    justifyContent='flex-start'
                    // height='calc(100vh - 60px)'
                    overflow='auto'
                    >
                    <TitleContainer>
                        <h4>
                            QUER SIMULAR COMO A SUA CASA VAI FICAR?
                            </h4>
                        <h1>
                            Monte a sua casa do seu jeito e veja em tempo real quanto ela pode custar
                            </h1>
                    </TitleContainer>
                    <Flex
                        column
                        width='calc(100% - 50px)'
                        margin='25px 25px 10px'
                        >
                        <Input
                            label='NOME COMPLETO'
                            placeholder='Insira o seu nome completo'
                            value={user.name}
                            onChange={newValue => setUser({
                                ...user,
                                name: newValue.target.value
                            })}
                            key='nome_completo'
                            small
                            margin='10px 0'
                            />
                        <Input
                            label='E-MAIL'
                            placeholder='Insira o seu email'
                            value={user.email}
                            onChange={newValue => setUser({
                                ...user,
                                email: newValue.target.value
                            })}
                            key='email_input'
                            small
                            margin='10px 0'
                            />
                        <Flex
                            width='100%'
                            justifyContent='space-evenly'
                            >
                            <Input
                                label='CPF'
                                placeholder='Insira o seu cpf'
                                value={user.cpf}
                                onChange={newValue => setUser({
                                    ...user,
                                    cpf: newValue.target.value
                                })}
                                key='cpf_input'
                                small
                                margin='10px 10px 10px 0'
                                mask='cpf'
                                />
                            <Input
                                label='TELEFONE'
                                placeholder='Insira o telefone com DDD'
                                value={user.phone}
                                onChange={newValue => setUser({
                                    ...user,
                                    phone: newValue.target.value
                                })}
                                key='phone_input'
                                small
                                margin='10px 0 10px 10px'
                                mask='phone'
                                />
                        </Flex>
                        <Flex
                            width='100%'
                            justifyContent='space-evenly'
                            >
                            <Select
                                label='UF'
                                placeholder='UF'
                                value={user.uf}
                                onChange={newValue => setUser({
                                    ...user,
                                    uf: newValue.target.value
                                })}
                                options={states}
                                key='uf_input'
                                small
                                margin='10px 10px 10px 0'
                                width='25%'
                                />
                            <Select
                                label='CIDADE'
                                placeholder='Selecione a cidade'
                                value={user.city}
                                onChange={newValue => setUser({
                                    ...user,
                                    city: newValue.target.value
                                })}
                                options={cities}
                                key='city_input'
                                small
                                margin='10px 0 10px 10px'
                                width='75%'
                                />
                        </Flex>
                    </Flex>
                    <Flex
                        width='100%'
                        height='50px'
                        // margin='15px 0 0'
                        justifyContent='space-evenly'
                        >
                        <Button
                            // onClick={() =>  router.push('/simular')}
                            onClick={() =>  handleCreateLead()}
                            margin='0 10px 10px 10px'
                            fontSize='0.8rem'
                            fullWidth
                            >
                            {/* FAZER CADASTRO */}
                            CONTINUAR
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </>
        )
    }

    return (
        <Flex
            // alignItems='center'
            justifyContent='space-evenly'
            height='100%'
            width='100%'
            // position='absolute'
            // top='50px'
            >
            <Navbar />
            <Box
                width='100%'
                maxWidth='700px'
                // height='100%'
                padding='20px'
            >
                <img src="/images/Pessoas/Pessoas 3.svg" width='100%' height='100%' alt="" />
            </Box>
            <Flex
                column
                textAlign='left'
                width='100%'
                maxWidth='600px'
                margin='0'
                alignItems='flex-start'
                padding='20px'
                justifyContent='flex-start'
                height='calc(100vh - 100px)'
                overflow='auto'
            >
                <TitleContainer>
                    <h4>
                        QUER SIMULAR COMO A SUA CASA VAI FICAR?
                        </h4>
                    <h1>
                        Monte a sua casa do seu jeito e veja em tempo real quanto ela pode custar
                        </h1>
                </TitleContainer>
                <Flex
                    column
                    width='calc(100% - 50px)'
                    margin='25px 25px 10px'
                >
                    <Input
                        label='NOME COMPLETO'
                        placeholder='Insira o seu nome completo'
                        value={user.name}
                        onChange={newValue => setUser({
                            ...user,
                            name: newValue.target.value
                        })}
                        key='nome_completo'
                        small
                        margin='10px 0'
                    />
                    <Input
                        label='E-MAIL'
                        placeholder='Insira o seu email'
                        value={user.email}
                        onChange={newValue => setUser({
                            ...user,
                            email: newValue.target.value
                        })}
                        key='email_input'
                        small
                        margin='10px 0'
                    />
                    <Flex
                        width='100%'
                        justifyContent='space-evenly'
                    >
                        <Input
                            label='CPF'
                            placeholder='Insira o seu cpf'
                            value={user.cpf}
                            onChange={newValue => setUser({
                                ...user,
                                cpf: newValue.target.value
                            })}
                            key='cpf_input'
                            small
                            margin='10px 10px 10px 0'
                            mask='cpf'
                        />
                        <Input
                            label='TELEFONE'
                            placeholder='Insira o telefone com DDD'
                            value={user.phone}
                            onChange={newValue => setUser({
                                ...user,
                                phone: newValue.target.value
                            })}
                            key='phone_input'
                            small
                            margin='10px 0 10px 10px'
                            mask='phone'
                        />
                    </Flex>
                    <Flex
                        width='100%'
                        justifyContent='space-evenly'
                    >
                        <Select
                            label='UF'
                            placeholder='Insira o seu telefone com DDD'
                            value={user.uf}
                            onChange={newValue => setUser({
                                ...user,
                                uf: newValue.target.value
                            })}
                            options={states}
                            key='uf_input'
                            small
                            margin='10px 10px 10px 0'
                            width='25%'
                        />
                        <Select
                            label='CIDADE'
                            placeholder='Insira o telefone com DDD'
                            value={user.city}
                            onChange={newValue => setUser({
                                ...user,
                                city: newValue.target.value
                            })}
                            options={cities}
                            key='city_input'
                            small
                            margin='10px 0 10px 10px'
                            width='75%'
                        />
                    </Flex>
                </Flex>
                <Flex
                    width='100%'
                    height='50px'
                    // margin='15px 0 0'
                    justifyContent='space-evenly'
                >
                    <Button
                        // onClick={() =>  router.push('/simular')}
                        onClick={() =>  handleCreateLead()}
                        margin='0 10px 10px 10px'
                        fontSize='0.8rem'
                        fullWidth
                    >
                        {/* FAZER CADASTRO */}
                        CONTINUAR
                    </Button>
                    {/* <Button
                        secondary
                        margin='10px'
                        fontSize='0.8rem'
                        // onClick={() => router.push('/recursos')}
                    >
                        JÁ SOU CADASTRADO
                    </Button> */}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Cadastro