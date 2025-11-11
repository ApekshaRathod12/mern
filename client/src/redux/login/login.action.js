import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../login/login.http";

export const loginAction = createAsyncThunk('auth/loginAction', async (payload) => {
    const res = await loginApi(payload);
    console.log(res);
    
    // Store token in localStorage
    if (res?.token) {
        console.log('asd');
        
        localStorage.setItem('authToken', res.token);
    }

    if (res.data?.role){
        localStorage.setItem('role',res.data.role);
    }
    
    return res.data;
})