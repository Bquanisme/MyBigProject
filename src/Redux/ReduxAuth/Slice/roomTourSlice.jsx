import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookingAPI, getAllOrder, getListBookingAPI, postBookingAPIDelete } from "./bookingAPI";

export const getListOrder = createAsyncThunk('order/list-order', async (payload, thunkAPI) => {
  try {
    const res = await getListBookingAPI();
    // console.log(res)
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'GET LIST data failed');
  }
});

export const getBookingOrder = createAsyncThunk('order/booking-tour', async (payload, thunkAPI) => {
  try {
    const res = await bookingAPI(payload);
    // console.log(res)
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'GET booking data failed');
  }
});

export const BookingDelete = createAsyncThunk('order/cancel', async ({ id }, thunkAPI) => {
  try {
    await postBookingAPIDelete(id);
    // console.log({ id })
    return { id }
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'GET booking delete failed');
  }
});

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
    },
})

export const { resetBooking } = roomTourSlice.actions;
export default roomTourSlice.reducer;