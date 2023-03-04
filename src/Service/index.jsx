import axios from 'axios'

const mainURL = 'https://zincubate.in/api/MovieTicketChecker' 

export const apiService = ({
    method,
    params,
    data
}) => {
    return new Promise((resolve, reject) => {
        axios({
            method,
            url: mainURL,
            params,
            data
        })
        .then(res => {
            if(res?.status === 200) {
                resolve({data: res?.data})
            } else {
                reject(res)
            }
        })
    })
}