import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAdminAPI, loginAPI, registerAPI, verifyEmailAPI } from "./authAPI";

// const safeParse = (key) => {
//   try {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : null;
//   } catch (e) {
//     console.error(`Error parsing localStorage key "${key}":`, e);
//     return null;
//   }
// };

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await loginAPI(credentials);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user-data', JSON.stringify(res.data.user));
    localStorage.setItem('role', 'user'); 
    return { ...res.data, role: 'user' };
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

export const admin = createAsyncThunk('v2/auth/login', async (admin, thunkAPI) => {
  try {
    const res = await loginAdminAPI(admin);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('admin-data', JSON.stringify(res.data));
    localStorage.setItem('role', 'admin'); 
    return { ...res.data, role: 'admin' };
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login Admin failed');
  }
});

export const register = createAsyncThunk('register', async (userInfo, thunkAPI) => {
  try {
    const res = await registerAPI(userInfo);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user-data', JSON.stringify(res.data.user));
    localStorage.setItem('role', 'user'); 
    return { ...res.data, role: 'user' };
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'register failed');
  }
});

export const verifyCode = createAsyncThunk('register/verify-code', async ({ email, code }, thunkAPI) => {
  try {
    const res = await verifyEmailAPI({ email, code });
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'register failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    role: localStorage.getItem('role') || null,  // lấy role từ localStorage
    token: localStorage.getItem('token') || null,
    // user: safeParse("user-data"),
    // admin: safeParse("admin-data"), 
    user: JSON.parse(localStorage.getItem('user-data')) || null, 
    admin: JSON.parse(localStorage.getItem('admin-data')) || null,
    verifyEmail: [],
    status: '',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.admin = null;
      state.user = null;
      state.role = null;
      localStorage.removeItem('admin-data');
      localStorage.removeItem('user-data');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    },
    resetStatus: (state) => {
      state.status = null;
      state.error = null;
    },
    resetVerifyState: (state) => {
      state.verifyStatus = '';
      state.verifyError = null;
      state.verifyEmail = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // User login
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Admin login
      .addCase(admin.fulfilled, (state, action) => {
        state.admin = action.payload;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(admin.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Verify email
      .addCase(verifyCode.pending, (state) => {
        state.verifyStatus = 'loading';
        state.verifyError = null;
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.verifyStatus = 'succeeded';
        state.verifyError = null;
        state.verifyEmail = action.payload;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.verifyStatus = 'failed';
        state.verifyError = action.error.message;
      });
  },
});

export const { logout, resetStatus, resetVerifyState } = authSlice.actions;
export default authSlice.reducer;
