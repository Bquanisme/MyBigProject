import React from 'react'
import axiosClient from '../api/AxiosCilent'

export const bookingAPI = (order) => {
  return axiosClient.post('/order/booking-tour', order)
}

export const postBookingAPIDelete = (id) => {
  return axiosClient.post(`/order/cancel/${id}`);
}

export const getListBookingAPI = () => {
  return axiosClient.get('/order/list-order?page=1&perpage=10')
}

export const getAllOrder = (id) => {
  return axiosClient.get(`/order/show/${id}`)
}



