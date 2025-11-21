import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCompanyApi, getCompaniesApi } from "./company.http";

export const getCompanies = createAsyncThunk('/company/getCompanies', async () => {
    return await getCompaniesApi();
})
export const addCompany = createAsyncThunk('company/addCompany', async (payload,thunkAPI) => {
        const res = await addCompanyApi(payload);
        console.log(res);
        
        if(res.code === 200){
            thunkAPI.dispatch(getCompanies());
        }    
})