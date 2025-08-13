import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { detailUser, editUserAPI } from "./bookingAPI";
import { updatePsAPI } from "./authAPI";

//edit user
export const postEditUser = createAsyncThunk('user/update', async (payload, thunkAPI) => {
  try {
    console.log(payload)
    const res = await editUserAPI(payload.id, payload.data);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'POST EDIT USER data failed');
  }
});

//chi tiết User
export const getDetailUser = createAsyncThunk('user/show', async (id, thunkAPI) => {
  try {
    const res = await detailUser(id);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'GET DETAIL USER data failed');
  }
});

//edit passworduser
export const postEditPasswordUser = createAsyncThunk('user/updatePs', async (payload, thunkAPI) => {
  try {
    const res = await updatePsAPI(payload.id, payload);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'POST EDIT PASS USER data failed');
  }
});

const editUserSlice = createSlice({
    name: 'editUser',
    initialState: {
        status: '',
        error: null,
        userEdit: [],
        userDetail: [],
        userUpdatePassword: [],
    },

    reducers: {
        resetBooking: () => {

        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(postEditUser.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postEditUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userEdit = action.payload;
            state.error = null;
        })
        .addCase(postEditUser.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(getDetailUser.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getDetailUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userDetail = action.payload;
            state.error = null;
        })
        .addCase(getDetailUser.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(postEditPasswordUser.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(postEditPasswordUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userUpdatePassword = action.payload;
            state.error = null;
        })
        .addCase(postEditPasswordUser.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })
    },
})

export const { resetBooking } = editUserSlice.actions
export default editUserSlice.reducer;



