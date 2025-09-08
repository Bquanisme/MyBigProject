import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reviewAPI, showReviewAPI } from "./bookingAPI";

//Create Review
export const postCreateReview = createAsyncThunk('review/create', async (payload, thunkAPI) => {
  try {
    console.log(payload)
    const res = await reviewAPI(payload);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'POST CREATE REVIEW data failed');
  }
});

//Show Review
export const getShowReview = createAsyncThunk('review', async (id, thunkAPI) => {
  try {
    const res = await showReviewAPI(id);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'POST CREATE REVIEW data failed');
  }
});

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        status: '',
        error: null,
        reviewCreate: null,
        showReview: [],
    },

    reducers: {
        resetBooking: () => {

        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(postCreateReview.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postCreateReview.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.reviewCreate = action.payload;
            state.error = null;
        })
        .addCase(postCreateReview.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(getShowReview.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getShowReview.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.showReview = action.payload.data;
            state.pagination = {
              current_page: action.payload.current_page,
              per_page: action.payload.per_page,
              total: action.payload.total,
            }
        })
        .addCase(getShowReview.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })
    },
})

export const { resetBooking } = reviewSlice.actions
export default reviewSlice.reducer;



