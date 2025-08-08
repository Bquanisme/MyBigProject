import React from "react"
import axios from "axios"
import axiosClient from "../../Redux/ReduxAuth/api/AxiosCilent"

const getAPIToken = async(url) => {
    const res = await axios.get(url, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },    
    params: {
        page: 1,
        perpage: 10
    }})
    return res.data
}

// const postAPIToken = async(url) => {
//     const res = await axios.post(url, {
//     headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`
//     }})
//     return res.data
// }
const postAPIToken = async(url) => {
    const res = await axiosClient.post(url)
    return res.data
}

export {getAPIToken, postAPIToken}