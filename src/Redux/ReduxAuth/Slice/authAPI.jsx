import React from 'react'
import axiosClient from '../api/AxiosCilent'

export const loginAPI = (credentials) => {
  return axiosClient.post('/auth/login', credentials)
}

export const loginAdminAPI = (admin) => {
  return axiosClient.post('/v2/auth/login', admin)
}

export const registerAPI = (userInfo) => {
  return axiosClient.post('/register', userInfo)
}

export const updatePsAPI = (id, password) => {
  return axiosClient.post(`/user/updatePs/${id}`, password)
}

export const verifyEmailAPI = ({email, code}) => {
  return axiosClient.post('/register/verify-code', {email, code})
}



