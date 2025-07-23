import React from 'react'
import axiosClient from '../api/AxiosCilent'

export const loginAPI = (credentials) => {
  return axiosClient.post('/auth/login', credentials)
}

