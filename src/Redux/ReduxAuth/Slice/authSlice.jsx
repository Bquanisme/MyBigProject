import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "./authAPI";

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

export const register = createAsyncThunk('register', async (userInfo, thunkAPI) => {
  try {
    const res = await registerAPI(userInfo);
    localStorage.setItem('token', res.data.token);
    return res.data
  } 
  catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'register failed');
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
        resetStatus: (state) => {
          state.status = null;
          state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(register.fulfilled, (state) => {
            state.status = 'succeeded';
            state.user = null,
            state.token = null
        })
        .addCase(register.rejected, (state, action) => {
            state.status = 'falled'
            state.error = action.payload;
        })


        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload,
            state.token = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.error = action.payload;
        })
    },
})

export const { logout, resetStatus } = authSlice.actions;
export default authSlice.reducer;