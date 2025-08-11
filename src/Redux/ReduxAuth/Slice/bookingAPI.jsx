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

export const editUserAPI = (id, data) => {
  const newdata = new FormData();
    data.append("display_name", data.display_name);
    data.append("phone_number", data.phone_number);
    data.append("detail_address", data.detail_address);
    data.append("image_delete", true);
    data.append("image_data", data.avatar? data.avatar : "");

  return axiosClient.post(`/user/update/${id}`, newdata)
}

export const detailUser = (id) => {
  return axiosClient.get(`/user/show/${id}`)
}




