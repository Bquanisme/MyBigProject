import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookingAPI, bookingRoomAPI, getAllOrder, getListBookingAPI, postBookingAPIDelete } from "./bookingAPI";

//danh sach dat don
export const getListOrder = createAsyncThunk('order/list-order', async (payload, thunkAPI) => {
  try {
    const res = await getListBookingAPI();
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'GET LIST data failed');
  }
});

//post dat tour
export const getBookingOrder = createAsyncThunk('order/booking-tour', async (payload, thunkAPI) => {
  try {
    const res = await bookingAPI(payload);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'GET booking data failed');
  }
});

//post dat room
export const postBookingRoomOrder = createAsyncThunk('order/booking-room', async (payload, thunkAPI) => {
  try {
    const res = await bookingRoomAPI(payload);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'GET booking room data failed');
  }
});

//Huy order
export const BookingDelete = createAsyncThunk('order/cancel', async ({ id }, thunkAPI) => {
  try {
    await postBookingAPIDelete(id);
    return { id }
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'GET booking delete failed');
  }
});

//Chi tiet order
export const getDetailOrder = createAsyncThunk('order/show', async (id, thunkAPI) => {
  try {
    const res = await getAllOrder(id);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'GET order detail failed');
  }
});

const roomTourSlice = createSlice({
    name: 'roomTour',
    initialState: {
        status: '',
        error: null,
        listOrders: [],
        bookingOrder: [],
        orderDetail: [],
        bookingRoomOrder: [],
    },

    reducers: {
        resetBooking: (state, action) => {
          const idToDelete = action.payload;
          state.bookingDelete = state.bookingDelete.filter(item => item.id !== idToDelete);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getListOrder.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getListOrder.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.listOrders = action.payload.data;
            state.error = null;
        })
        .addCase(getListOrder.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(getBookingOrder.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getBookingOrder.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.bookingOrder = action.payload.data;
            state.error = null;
        })
        .addCase(getBookingOrder.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(BookingDelete.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(BookingDelete.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.listOrders = state.listOrders.filter(item => item.id !== action.payload.id);
            state.error = null;
        })
        .addCase(BookingDelete.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })

        .addCase(getDetailOrder.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getDetailOrder.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.orderDetail = action.payload;
          state.error = null;
        })
        .addCase(getDetailOrder.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })


        .addCase(postBookingRoomOrder.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postBookingRoomOrder.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.bookingRoomOrder = action.payload;
            state.error = null;
        })
        .addCase(postBookingRoomOrder.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })
    },
})

export const { resetBooking } = roomTourSlice.actions;
export default roomTourSlice.reducer;