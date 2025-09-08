import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  deleteCategoryAPI, 
  deleteCustomerAPI, 
  deleteRoomTourAPI, 
  deleteStaffAPI, 
  getCancelAPI, 
  getCategoryAPI, 
  getCustomerAPI, 
  getDashboardAPI, 
  getDetailCancelAPI, 
  getDetailCategoryAPI, 
  getDetailOrderAPI, 
  getDetailRoomTourAPI, 
  getDetailStaffAPI, 
  getOrderAPI, 
  getRoomTourAPI, 
  getStaffAPI, 
  postCreateCategoryAPI, 
  postCreateStaff, 
  postEditCategoryAPI, 
  postEditRoomTourAPI, 
  postEditStaff, 
  postRoomAPI, 
  postTourAPI, 
  postUpdateStatusAPI,
  postUpdateStatusCancelAPI,
  postUpdateStatusOrderAPI
 } from "./bookingAPI";

//Admin Dashboard
export const getAdminDashboard = createAsyncThunk('v2/dashboard/general', async (payload, thunkAPI) => {
  try {
    const res = await getDashboardAPI();
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Dashboard data failed');
  }
});


//Admin Customer
export const getAdminCustomer = createAsyncThunk('v2/customer/index', async (payload, thunkAPI) => {
  try {
    const res = await getCustomerAPI();
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Customer data failed');
  }
});

//Update Customer Edit status
export const postUpdateStatus = createAsyncThunk('v2/customer/updateStatus', async (payload, thunkAPI) => {
  try {
    const res = await postUpdateStatusAPI(payload.id, payload.data);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'post Update Status data failed');
  }
});

//Delete Customer status
export const deleteCustomer = createAsyncThunk('v2/customer/multiple-delete', async (ids, thunkAPI) => {
  try {
    await deleteCustomerAPI(ids);
    return ids
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Delete Customer failed');
  }
});


//Admin Staff
export const getAdminStaff = createAsyncThunk('v2/staff/index', async (payload, thunkAPI) => {
  try {
    const res = await getStaffAPI();
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Staff data failed');
  }
});

//Admin Create Staff
export const postAdminCreateStaff = createAsyncThunk('v2/staff/create', async (payload, thunkAPI) => {
  try {
    const res = await postCreateStaff(payload);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Post Admin Create Staff data failed');
  }
});

//Admin Detail Staff
export const getDetailAdminStaff = createAsyncThunk('v2/staff/show', async (id, thunkAPI) => {
  try {
    const res = await getDetailStaffAPI(id);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Detail Staff data failed');
  }
});

//Admin Edit Staff
export const postAdminEditStaff = createAsyncThunk('v2/staff/update', async (payload, thunkAPI) => {
  try {
    const res = await postEditStaff(payload.id, payload.data);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Post Admin Edit Staff data failed');
  }
});

//Delete Staff 
export const deleteStaff = createAsyncThunk('v2/staff/multiple-delete', async (ids, thunkAPI) => {
  try {
    await deleteStaffAPI(ids);
    return ids
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Delete Staff failed');
  }
});

//Admin Category
export const getAdminCategory = createAsyncThunk('v2/category/index', async (payload, thunkAPI) => {
  try {
    const res = await getCategoryAPI();
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Category data failed');
  }
});

//Admin Detail Category
export const getDetailAdminCategory = createAsyncThunk('v2/category/show', async (id, thunkAPI) => {
  try {
    const res = await getDetailCategoryAPI(id);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Detail Category data failed');
  }
});

//Admin Create Category
export const postAdminCreateCategory = createAsyncThunk('v2/category/create', async (payload, thunkAPI) => {
  try {
    const res = await postCreateCategoryAPI(payload);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Post Admin Create Category data failed');
  }
});

//Admin Edit Category
export const postAdminEditCategory = createAsyncThunk('v2/category/update', async (payload, thunkAPI) => {
  try {
    const res = await postEditCategoryAPI(payload.id, payload.data);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Post Admin Edit Category data failed');
  }
});

//Delete Category 
export const deleteCategory = createAsyncThunk('v2/category/multiple-delete', async (ids, thunkAPI) => {
  try {
    await deleteCategoryAPI(ids);
    return ids
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Delete Category failed');
  }
});

//Admin RoomTour
export const getAdminRoomTour = createAsyncThunk('v2/room/index', async (payload, thunkAPI) => {
  try {
    const res = await getRoomTourAPI();
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin RoomTour data failed');
  }
});

//Create Room
export const postCreateRoom = createAsyncThunk('v2/room/create-room', async (payload, thunkAPI) => {
  try {
    const res = await postRoomAPI(payload);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'post Create Room data failed');
  }
});

//Create Tour
export const postCreateTour = createAsyncThunk('v2/room/create-tour', async (payload, thunkAPI) => {
  try {
    const res = await postTourAPI(payload);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'post Create Tour data failed');
  }
});

//Admin Detail RoomTour
export const getAdminDetailRoomTour = createAsyncThunk('v2/room/show', async (id, thunkAPI) => {
  try {
    const res = await getDetailRoomTourAPI(id);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Detail RoomTour data failed');
  }
});

//Admin Edit Room Tour
export const postAdminEditRoomTour = createAsyncThunk('v2/room/update', async (payload, thunkAPI) => {
  try {
    const res = await postEditRoomTourAPI(payload.id, payload.data);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'post Admin Edit Room Tour data failed');
  }
});

//Delete Room Tour 
export const deleteRoomTour = createAsyncThunk('v2/room/multiple-delete', async (ids, thunkAPI) => {
  try {
    await deleteRoomTourAPI(ids);
    return ids
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Delete Room Tour failed');
  }
});

//Admin Request Cancel
export const getAdminRequestCancel = createAsyncThunk('v2/request-cancel/index', async (payload, thunkAPI) => {
  try {
    const res = await getCancelAPI();
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Request Cancel data failed');
  }
});

//Admin Detail Request Cancel
export const getAdminDetailRequestCancel = createAsyncThunk('v2/request-cancel/show', async (id, thunkAPI) => {
  try {
    const res = await getDetailCancelAPI(id);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Detail Request Cancel data failed');
  }
});

//Admin Update Status Request Cancel
export const postAdminUpdateStatusCancel = createAsyncThunk('v2/request-cancel/update-status', async (payload, thunkAPI) => {
  try {
    const res = await postUpdateStatusCancelAPI(payload.id, payload.data);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'post Admin Update Status Request Cancel data failed');
  }
});

//Admin Order
export const getAdminOrder = createAsyncThunk('v2/order/index', async (payload, thunkAPI) => {
  try {
    const res = await getOrderAPI();
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Order data failed');
  }
});

//Admin Detail Order
export const getAdminDetailOrder = createAsyncThunk('v2/order/show', async (id, thunkAPI) => {
  try {
    const res = await getDetailOrderAPI(id);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Get Admin Detail Order data failed');
  }
});

//Admin Update Status Order
export const postAdminUpdateStatusOrder = createAsyncThunk('v2/order/update-status', async (payload, thunkAPI) => {
  try {
    const res = await postUpdateStatusOrderAPI(payload.id, payload.data);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'post Admin Update Status Request Cancel data failed');
  }
});

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        status: '',
        error: null,
        dashboardAdmin: [],
        customerAdmin: [],
        statusUpdate: [],
        staffAdmin: [],
        staffCreate: [],
        staffDetail: [],
        staffEdit: [],
        categoryAdmin: [],
        detailCategoryAdmin: [],
        createCategoryAdmin: [],
        editCategoryAdmin: [],
        roomTourAdmin: [],
        roomCreate: [],
        tourCreate: [],
        roomTourDetail: [],
        roomTourEdit: [],
        requestCancelAdmin: [],
        requestCancelDetail: [],
        cancelUpdateStatus: [],
        orderAdmin: [],
        orderDetail: [],
        orderUpdateStatus: [],
    },

    extraReducers: (builder) => {
        builder
        .addCase(getAdminDashboard.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminDashboard.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.dashboardAdmin = action.payload;
            state.error = null;
        })
        .addCase(getAdminDashboard.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(getAdminCustomer.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminCustomer.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.customerAdmin = action.payload.data;
            state.error = null;
        })
        .addCase(getAdminCustomer.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(postUpdateStatus.pending, (state) => {
            state.statusCheck = 'loading'
        })
        .addCase(postUpdateStatus.fulfilled, (state, action) => {
            state.statusCheck = 'succeeded';
            state.statusUpdate = action.payload;
            state.statusError = null;
        })
        .addCase(postUpdateStatus.rejected, (state, action) => {
            state.statusCheck = 'falled'
            state.statusError = action.payload;
        })


        .addCase(deleteCustomer.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(deleteCustomer.fulfilled, (state, action) => {
          state.statusCheck = 'succeeded';
          state.customerAdmin = state.customerAdmin.filter(
            (item) => item.id !== action.payload.id
          );
          state.statusError = null;
        })
        .addCase(deleteCustomer.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(getAdminStaff.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminStaff.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.staffAdmin = action.payload.data;
            state.error = null;
        })
        .addCase(getAdminStaff.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(postAdminCreateStaff.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postAdminCreateStaff.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.staffCreate = action.payload;
            state.error = null;
        })
        .addCase(postAdminCreateStaff.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(getDetailAdminStaff.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getDetailAdminStaff.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.staffDetail = action.payload;
            state.error = null;
        })
        .addCase(getDetailAdminStaff.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(postAdminEditStaff.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postAdminEditStaff.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.staffEdit = action.payload;
            state.error = null;
        })
        .addCase(postAdminEditStaff.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(deleteStaff.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(deleteStaff.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.staffAdmin = state.staffAdmin.filter(item => 
              !action.payload.includes(item.id)
            ) 
            state.error = null;
        })
        .addCase(deleteStaff.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(getAdminCategory.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminCategory.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.categoryAdmin = action.payload.data;
            state.error = null;
        })
        .addCase(getAdminCategory.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(getDetailAdminCategory.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getDetailAdminCategory.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.detailCategoryAdmin = action.payload;
            state.error = null;
        })
        .addCase(getDetailAdminCategory.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(postAdminCreateCategory.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postAdminCreateCategory.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.createCategoryAdmin = action.payload;
            state.error = null;
        })
        .addCase(postAdminCreateCategory.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(postAdminEditCategory.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postAdminEditCategory.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.editCategoryAdmin = action.payload;
            state.error = null;
        })
        .addCase(postAdminEditCategory.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(deleteCategory.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(deleteCategory.fulfilled, (state, action) => {
          state.statusCheck = 'succeeded';
          state.categoryAdmin = state.categoryAdmin.filter(
            item => !action.payload.includes(item.id)  // xoá nhiều id
          );
          state.statusError = null;
        })
        .addCase(deleteCategory.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(getAdminRoomTour.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminRoomTour.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.roomTourAdmin = action.payload.data;
            state.error = null;
        })
        .addCase(getAdminRoomTour.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(postCreateRoom.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postCreateRoom.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.roomCreate = action.payload;
            state.error = null;
        })
        .addCase(postCreateRoom.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(postCreateTour.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postCreateTour.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tourCreate = action.payload;
            state.error = null;
        })
        .addCase(postCreateTour.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(getAdminDetailRoomTour.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminDetailRoomTour.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.roomTourDetail = action.payload;
            state.error = null;
        })
        .addCase(getAdminDetailRoomTour.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(postAdminEditRoomTour.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postAdminEditRoomTour.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.roomTourEdit = action.payload;
            state.error = null;
        })
        .addCase(postAdminEditRoomTour.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(deleteRoomTour.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(deleteRoomTour.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.roomTourAdmin = state.roomTourAdmin.filter(
              (item) => !action.payload.includes(item.id));
            state.error = null;
        })
        .addCase(deleteRoomTour.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(getAdminRequestCancel.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminRequestCancel.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.requestCancelAdmin = action.payload.data;
            state.error = null;
        })
        .addCase(getAdminRequestCancel.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(getAdminDetailRequestCancel.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminDetailRequestCancel.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.requestCancelDetail = action.payload.data;
            state.error = null;
        })
        .addCase(getAdminDetailRequestCancel.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(postAdminUpdateStatusCancel.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postAdminUpdateStatusCancel.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.cancelUpdateStatus = action.payload;
            state.error = null;
        })
        .addCase(postAdminUpdateStatusCancel.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(getAdminOrder.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminOrder.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.orderAdmin = action.payload.data;
            state.error = null;
        })
        .addCase(getAdminOrder.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(getAdminDetailOrder.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getAdminDetailOrder.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.requestCancelDetail = action.payload.data;
            state.error = null;
        })
        .addCase(getAdminDetailOrder.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(postAdminUpdateStatusOrder.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postAdminUpdateStatusOrder.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.orderUpdateStatus = action.payload;
            state.error = null;
        })
        .addCase(postAdminUpdateStatusOrder.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })
    },
})

export default adminSlice.reducer;



