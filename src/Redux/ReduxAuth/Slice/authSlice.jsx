import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "./authAPI";

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await loginAPI(credentials);
    localStorage.setItem('token', res.data.token);
    console.log(res)
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        user: null,
        status: '',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload,
            state.token = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.error = action.payload;
        })
    },
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;