import axios from 'axios'

const geoClient = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
})

export const getUFs = () => {
    return geoClient.get('/')
}

export const getCityByUF = (UF) => {
    return geoClient.get(`/${UF}/municipios`)
}