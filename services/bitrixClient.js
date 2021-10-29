import axios from 'axios'

const bitrixClient = axios.create({
    baseURL: '',
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