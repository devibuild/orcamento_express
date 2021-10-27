

export const calculateLastSac = (total, parcelas = 240, amortizacao, parcelaAtual = 0) => {
    // const jurosAM = Math.pow(1.08, (1 / 12)) - 1
    // const jurosCalculados = total * jurosAM
    // const seguroPrestamista = total * 0.00038128125
    // const txAdm = 25

    // const valorParcela = jurosCalculados + amortizacao + seguroPrestamista + txAdm

    // const novaParcela = parcelaAtual++

    // if (novaParcela === parcelas - 1) {
    //     return valorParcela
    // }

    // return calculateLastSac(total - amortizacao, parcelas, amortizacao, novaParcela)
    // let parcelaAtual = 0
    let valorRestante = total

    while (valorRestante > amortizacao) {
        valorRestante = valorRestante - amortizacao
    }

    valorRestante += amortizacao

    // console.log('valorRestante: ', valorRestante)

    const jurosAM = Math.pow(1.08, (1 / 12)) - 1
    const jurosCalculados = valorRestante * jurosAM
    const seguroPrestamista = valorRestante * 0.00038128125
    const txAdm = 25

    const valorParcela = jurosCalculados + amortizacao + seguroPrestamista + txAdm
    return valorParcela
}