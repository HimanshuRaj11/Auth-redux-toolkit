import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios"
import Cookies from "js-cookie"
export const UserSlice = createSlice({
    name: "User",
    initialState:{
        User:{},
        token: '',
        loading:false,
    },
    reducers:{
        // getCookie:(state,action)=>{
        //     state.token = action.payload
        // }
    },
    extraReducers:(builder)=>{
        builder
        // login
        .addCase(login.pending, (state)=>{
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.User = action.payload;
            state.loading = false;
        })
        .addCase(login.rejected, (state)=>{
            state.loading = false;
        })
        // register
        .addCase(register.pending, (state)=>{
            state.loading = true;
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.User = action.payload;
            state.loading = false;
        })
        .addCase(register.rejected, (state)=>{
            state.loading = false;
        })
        // gettoken 
        .addCase(getCookie.pending, (state)=>{
            state.token= ''
        })
        .addCase(getCookie.fulfilled, (state, action)=>{
            state.token= action.payload
        })
        .addCase(getCookie.rejected, (state)=>{
            state.token= ''
        })
        // get User 
        .addCase(getUser.pending, (state)=>{
            state.loading= true
        })
        .addCase(getUser.fulfilled, (state, action)=>{
            state.User = action.payload
            state.loading= false
        })
        .addCase(getUser.rejected, (state)=>{
            state.loading= false
        })
        // Logout User 
        .addCase(logout.pending, (state)=>{
            state.loading= true
        })
        .addCase(logout.fulfilled, (state)=>{
            state.User = {}
            state.loading= false
        })
        .addCase(logout.rejected, (state)=>{
            state.loading= false
        })
    }

})
export default UserSlice.reducer;

// export const {getCookie} = UserSlice.actions

export const getUser = createAsyncThunk('auth/getUser', async()=>{
    const res =await axios.get('http://localhost:8000/auth/getUser', {withCredentials:true})
    const data = res.data;
    return data;
})
export const register = createAsyncThunk("auth/register", async({Input,navigate})=>{
    const res =await axios.post('http://localhost:8000/auth/register',Input, {withCredentials:true})
    const data = res.data;
    navigate("/")
    return data;
})
export const login = createAsyncThunk('auth/login', async({Input,navigate})=>{
    const res =await axios.post('http://localhost:8000/auth/login',Input, {withCredentials:true})
    const data = res.data;
    navigate("/")
    return data;
})
export const logout = createAsyncThunk('auth/logout', async()=>{
    Cookies.remove("jwt");
})

export const getCookie = createAsyncThunk("auth/gettoken", async(token)=>{
    return token;
})
