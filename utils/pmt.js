

export const pmt = (rate, nper, pmt) => {
    let e = 1
    let cont = 1
    let value = pmt

    for (let i = 1; i <= nper; i++) {
        cont = cont * (1 + rate)
        e += cont
    }

    e = e - cont
    value = value * cont

    return value / e
}