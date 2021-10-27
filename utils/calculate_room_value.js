import { baseAcabamentos } from "./base_acabamentos"
import { baseObraBranca } from "./base_obra_branca"


export const calculateGarage = (garagem, baseSqMtr) => {
    const area = garagem.value
    // console.log('garagem area: ', area)
    const areaPiso = area * 1.1
    const areaParede = area * 2.33

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.garagem[garagem.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.garagem[garagem.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.garagem[garagem.pattern].forro * area
    const telheiros = 42 *  baseObraBranca[garagem.pattern].foundation_superficial + baseObraBranca[garagem.pattern].finishing + (baseObraBranca[garagem.pattern].slab_wet / 2)

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + telheiros
        
    if (garagem.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro


    // console.log('valorAmbiente: ', valorAmbiente)

    return valorAmbiente
}

export const calculateSala = (sala, baseSqMtr) => {
    const area = sala.value
    const areaPiso = area * 1.1
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.sala[sala.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.sala[sala.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.sala[sala.pattern].forro * area
    const peitoril = baseAcabamentos.sala[sala.pattern].peitoril
    const porta = baseAcabamentos.sala[sala.pattern].porta
    const esquadria = baseAcabamentos.sala[sala.pattern].esquadria

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria
        
    if (sala.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateCozinha = (cozinha, baseSqMtr) => {
    const area = cozinha.value
    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.cozinha[cozinha.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.cozinha[cozinha.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.cozinha[cozinha.pattern].forro * area
    const peitoril = baseAcabamentos.cozinha[cozinha.pattern].peitoril
    const porta = baseAcabamentos.cozinha[cozinha.pattern].porta
    const esquadria = baseAcabamentos.cozinha[cozinha.pattern].esquadria
    const loucas = baseAcabamentos.cozinha[cozinha.pattern].loucas
    const marmore = baseAcabamentos.cozinha[cozinha.pattern].marmore

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (cozinha.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateAreaGourmet = (areaGourmet, baseSqMtr) => {
    const area = areaGourmet.value
    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.areaGourmet[areaGourmet.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.areaGourmet[areaGourmet.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.areaGourmet[areaGourmet.pattern].forro * area
    const peitoril = baseAcabamentos.areaGourmet[areaGourmet.pattern].peitoril
    const porta = baseAcabamentos.areaGourmet[areaGourmet.pattern].porta
    const esquadria = baseAcabamentos.areaGourmet[areaGourmet.pattern].esquadria
    const loucas = baseAcabamentos.areaGourmet[areaGourmet.pattern].loucas
    const marmore = baseAcabamentos.areaGourmet[areaGourmet.pattern].marmore

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (areaGourmet.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateAreaServico = (areaServico, baseSqMtr) => {
    const area = areaServico.value
    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.areaServico[areaServico.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.areaServico[areaServico.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.areaServico[areaServico.pattern].forro * area
    const peitoril = baseAcabamentos.areaServico[areaServico.pattern].peitoril
    const porta = baseAcabamentos.areaServico[areaServico.pattern].porta
    const esquadria = baseAcabamentos.areaServico[areaServico.pattern].esquadria
    const loucas = baseAcabamentos.areaServico[areaServico.pattern].loucas
    const marmore = baseAcabamentos.areaServico[areaServico.pattern].marmore

    console.log('area: ', area)
    console.log('valorBase: ', valorBase)
    console.log('paredesInternas: ', paredesInternas)
    console.log('piso: ', piso)
    console.log('pinturaParedes: ', pinturaParedes)
    console.log('pinturaForro: ', pinturaForro)
    console.log('peitoril: ', peitoril)
    console.log('porta: ', porta)
    console.log('esquadria: ', esquadria)
    console.log('loucas: ', loucas)
    console.log('marmore: ', marmore)

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (areaServico.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateDespensa = (despensa, baseSqMtr) => {
    const area = despensa.value
    const areaPiso = area 
    const areaParede = area * 2.93
    
    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.despensa[despensa.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.despensa[despensa.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.despensa[despensa.pattern].forro * area
    const porta = baseAcabamentos.despensa[despensa.pattern].porta
    
    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro +  porta
    
    if (despensa.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }
    
    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro
    
    return valorAmbiente
}

export const calculateEscritorio = (escritorio, baseSqMtr) => {
    const area = escritorio.value
    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.escritorio[escritorio.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.escritorio[escritorio.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.escritorio[escritorio.pattern].forro * area
    const peitoril = baseAcabamentos.escritorio[escritorio.pattern].peitoril
    const porta = baseAcabamentos.escritorio[escritorio.pattern].porta
    const esquadria = baseAcabamentos.escritorio[escritorio.pattern].esquadria

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria
        
    if (escritorio.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateQuartos = (quartos, baseSqMtr) => {
    let area = calculateQuartosArea(quartos)
    // console.log('area: ', area)
    // const numSuites

    // let area = [...quartos.value]
    // // console.log('area: ', area)
    // area = area.map((e, i) => {
    //     let thisRoomArea = 0
    //     // console.log(`quartos.value[${i}]: `, e)
    //     for (let prop in e) {
    //         thisRoomArea += e[prop]
    //     }
    //     return thisRoomArea
    // })

    let numSuites = [...quartos.value]

    numSuites = numSuites.map((e, i) => {
        if (parseFloat(e.suite) > 0) {
            return 1
        } else {
            return 0
        }
    })

    numSuites = numSuites.reduce((acc, curr) => acc + curr)

    console.log('numSuites: ', numSuites)

    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.quartos[quartos.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.quartos[quartos.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.quartos[quartos.pattern].forro * area
    const peitoril = baseAcabamentos.quartos[quartos.pattern].peitoril
    const porta = baseAcabamentos.quartos[quartos.pattern].porta
    const esquadria = baseAcabamentos.quartos[quartos.pattern].esquadria
    const suite = baseAcabamentos.quartos[quartos.pattern].suite * numSuites


    // console.log('valor m2: ', valorBase)
    // console.log('valor paredes internas: ', paredesInternas)
    // console.log('valor piso: ', piso)
    // console.log('valor pintura paredes internas: ', pinturaParedes)
    // console.log('valor pintura forro: ', pinturaForro)
    // console.log('peitoril: ', peitoril)
    // console.log('porta: ', porta)
    // console.log('esquadria: ', esquadria)

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + suite
        
    if (quartos.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateLavabos = (lavabos, baseSqMtr) => {
    let area = calculateBathroomArea(lavabos)

    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.lavabos[lavabos.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.lavabos[lavabos.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.lavabos[lavabos.pattern].forro * area
    const peitoril = baseAcabamentos.lavabos[lavabos.pattern].peitoril
    const porta = baseAcabamentos.lavabos[lavabos.pattern].porta
    const esquadria = baseAcabamentos.lavabos[lavabos.pattern].esquadria
    const loucas = baseAcabamentos.lavabos[lavabos.pattern].loucas
    const marmore = baseAcabamentos.lavabos[lavabos.pattern].marmore

    

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (lavabos.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateBanheiros = (banheiros, baseSqMtr) => {
    let area = calculateBathroomArea(banheiros)

    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.banheiros[banheiros.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.banheiros[banheiros.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.banheiros[banheiros.pattern].forro * area
    const peitoril = baseAcabamentos.banheiros[banheiros.pattern].peitoril
    const porta = baseAcabamentos.banheiros[banheiros.pattern].porta
    const esquadria = baseAcabamentos.banheiros[banheiros.pattern].esquadria
    const loucas = baseAcabamentos.banheiros[banheiros.pattern].loucas
    const marmore = baseAcabamentos.banheiros[banheiros.pattern].marmore

    // console.log('valor m2: ', valorBase)
    // console.log('valor paredes internas: ', paredesInternas)
    // console.log('valor piso: ', piso)
    // console.log('valor pintura paredes internas: ', pinturaParedes)
    // console.log('valor pintura forro: ', pinturaForro)
    // console.log('peitoril: ', peitoril)
    // console.log('porta: ', porta)
    // console.log('esquadria: ', esquadria)

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (banheiros.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateInstalacoesPercentagem = (instalacoes, houseValue) => {
    let housePercentage = 0
    for (let prop in instalacoes) {
        housePercentage += instalacoes[prop]
    }

    // let valorAmbiente = houseValue * (housePercentage / 100)

    // return valorAmbiente
    return housePercentage
}


export const calculateQuartosArea = (quartos) => {
    let area = [...quartos.value]
    // console.log('area: ', area)
    area = area.map((e, i) => {
        let thisRoomArea = 0
        // console.log(`quartos.value[${i}]: `, e)
        for (let prop in e) {
            thisRoomArea += Number(e[prop])
        }
        return thisRoomArea
    })
    area = area.reduce((acc, curr) => acc + curr)
    // console.log('area: ', area)
    return area
}

export const calculateBathroomArea = (bathroom) => {
    let area = [...bathroom.value]
    // console.log('area: ', area)
    area = area.reduce((acc, curr) => acc + curr)
    // console.log('area: ', area)
    return area
}


























// const area = simData[slide].value
// const areaPiso = area * 1.1
// const areaParede = area * 2.33

// // console.log('valor m2: ', baseSqMtr.value * area)
// const valorBase = baseSqMtr.value * area
// // console.log('valor paredes internas: ', (areaParede * baseObraBranca.fechamento_interno.paredes))
// const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
// // console.log('valor piso: ', (baseAcabamentos[slide][simData[slide].pattern].piso * areaPiso))
// const piso = baseAcabamentos[slide][simData[slide].pattern].piso * areaPiso
// // console.log('valor pintura paredes internas: ', (baseAcabamentos[slide][simData[slide].pattern].pintura * areaParede))
// const pinturaParedes = baseAcabamentos[slide][simData[slide].pattern].pintura * areaParede
// // console.log('valor pintura forro: ', (baseAcabamentos[slide][simData[slide].pattern].forro * area))
// const pinturaForro = baseAcabamentos[slide][simData[slide].pattern].forro * area

// let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro
    
// if (simData[slide].confort === 'sim') {
//     valorAmbiente += baseObraBranca.conforto_interno * areaParede
// }

// const margemLucro = 1.3
// valorAmbiente = valorAmbiente * margemLucro

// return valorAmbiente