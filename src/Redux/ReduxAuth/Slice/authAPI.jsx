import React from 'react'
import axiosClient from '../api/AxiosCilent'

export const loginAPI = (credentials) => {
  return axiosClient.post('/auth/login', credentials)
}

export const registerAPI = (userInfo) => {
  return axiosClient.post('/register', userInfo)
}


