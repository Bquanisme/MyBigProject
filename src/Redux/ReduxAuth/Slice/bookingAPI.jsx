import React from 'react'
import axiosClient from '../api/AxiosCilent'

export const bookingAPI = (order) => {
  return axiosClient.post('/order/booking-tour', order)
}

export const bookingRoomAPI = (order) => {
  return axiosClient.post('/order/booking-room', order)
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
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== undefined) {
      if (key === "image_data" && data[key] instanceof File) {
        formData.append(key, data[key]); 
      } else if (key !== "image_data") {
        formData.append(key, data[key]); 
      }
    }
  });
  return axiosClient.post(`/user/update/${id}`, formData )
}

export const detailUser = (id) => {
  return axiosClient.get(`/user/show/${id}`)
}

export const reviewAPI = (payload) => {
  const formData = new FormData();
  Object.keys(payload).forEach((key) => {
    if (Array.isArray(payload[key])) {
      payload[key].forEach((item) => formData.append(`${key}[]`, item));
    } else {
      formData.append(key, payload[key]);
    }
  });
  return axiosClient.post(`/review/create`, formData)
}

export const showReviewAPI = (id) => {
  return axiosClient.get(`/review/${id}`)
}


//Admin
////Dashboard
export const getDashboardAPI = () => {
  return axiosClient.get('/v2/dashboard/general')
}

////Customer
export const getCustomerAPI = () => {
  return axiosClient.get('/v2/customer/index?page=1&perpage=10')
}

export const postUpdateStatusAPI = (id, data) => {
  return axiosClient.post(`/v2/customer/updateStatus/${id}`, data);
}

export const deleteCustomerAPI = (ids) => {
  return axiosClient.delete(`/v2/customer/multiple-delete`, {data: {ids}});
}

////Staff
export const getStaffAPI = () => {
  return axiosClient.get('/v2/staff/index')
}
export const postCreateStaff = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== undefined) {
      if (key === "image_data" && data[key] instanceof File) {
        formData.append(key, data[key]); 
      } else if (key !== "image_data") {
        formData.append(key, data[key]); 
      }
    }
  });
  return axiosClient.post(`/v2/staff/create`, formData);
}
export const getDetailStaffAPI = (id) => {
  return axiosClient.get(`/v2/staff/show/${id}`)
}

export const postEditStaff = (id, data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== undefined) {
      if (key === "image_data" && data[key] instanceof File) {
        formData.append(key, data[key]); 
      } else if (key !== "image_data") {
        formData.append(key, data[key]); 
      }
    }
  });
  return axiosClient.post(`/v2/staff/update/${id}`, formData);
}

export const deleteStaffAPI = (ids) => {
  return axiosClient.delete(`/v2/staff/multiple-delete`, {data: {ids}});
}

////Category
export const getCategoryAPI = () => {
  return axiosClient.get('/v2/category/index')
}

export const postCreateCategoryAPI = (payload) => {
  return axiosClient.post(`/v2/category/create`, payload);
}

export const getDetailCategoryAPI = (id) => {
  return axiosClient.get(`/v2/category/show/${id}`)
}

export const postEditCategoryAPI = (id, data) => {
  return axiosClient.post(`/v2/category/update/${id}`, data);
}

export const deleteCategoryAPI = (ids) => {
  return axiosClient.delete(`/v2/category/multiple-delete`, {data: {ids}});
}

////RoomTour
export const getRoomTourAPI = () => {
  return axiosClient.get(`/v2/room/index`)
}

export const postRoomAPI = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== undefined) {
      if (key === "logo" && data[key] instanceof File) {
        // append logo (1 file)
        formData.append("logo", data[key]); 
      } else if (key === "banner" && Array.isArray(data[key])) {
        // append nhiều banner
        data[key].forEach((file) => {
          if (file instanceof File) {
            formData.append("banner", file);
          }
        });
      } else if (key !== "logo" && key !== "banner") {
        formData.append(key, data[key]);
      }
    }
  });
  return axiosClient.post(`/v2/room/create-room`, formData);
}

export const postTourAPI = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== undefined) {
      if (key === "logo" && data[key] instanceof File) {
        // append logo 
        formData.append("logo", data[key]); 
      } else if (key === "banner" && Array.isArray(data[key])) {
        // append banner
        data[key].forEach((file) => {
          if (file instanceof File) {
            formData.append("banner", file);
          }
        });
      } else if (key !== "logo" && key !== "banner") {
        formData.append(key, data[key]);
      }
    }
  });
  return axiosClient.post(`/v2/room/create-tour`, formData);
}

export const getDetailRoomTourAPI = (id) => {
  return axiosClient.get(`/v2/room/show/${id}`)
}

export const postEditRoomTourAPI = (id, data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== undefined) {
      if (key === "logo" && data[key] instanceof File) {
        formData.append("logo", data[key]); 
      } else if (key !== "logo") {
        formData.append(key, data[key]);
      }
    }
  });
  return axiosClient.post(`/v2/room/update/${id}`, formData);
}

export const deleteRoomTourAPI = (ids) => {
  return axiosClient.delete(`/v2/room/multiple-delete`, {data: {ids}});
}


////Cancel Request
export const getCancelAPI = () => {
  return axiosClient.get(`/v2/request-cancel/index`)
}

export const getDetailCancelAPI = (id) => {
  return axiosClient.get(`/v2/request-cancel/show/${id}`)
}

export const postUpdateStatusCancelAPI = (id, data) => {
  return axiosClient.post(`/v2/request-cancel/update-status/${id}`, data);
}

////Manage Orders
export const getOrderAPI = () => {
  return axiosClient.get(`/v2/order/index`)
}

export const getDetailOrderAPI = (id) => {
  return axiosClient.get(`/v2/order/show/${id}`)
}

export const postUpdateStatusOrderAPI = (id, data) => {
  return axiosClient.post(`/v2/order/update-status/${id}`, data);
}