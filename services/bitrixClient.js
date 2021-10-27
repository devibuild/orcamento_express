import axios from 'axios'

const bitrixClient = axios.create({
    baseURL: 'https://ibuild.bitrix24.com.br/rest/4/stwd1661o756mglv/crm.lead.add.json',
    timeout: 5000,
    headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

export const createLead = (lead) => {
    return bitrixClient({
        url: '',
        method: 'post',
        params: lead,
    })
        .then(res => {
            // console.log('bitrix res: ', res)
            return res
        })
}