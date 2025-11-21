import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCompaniesListApi } from "./subcompany.http";

export const getCompaniesList = createAsyncThunk('subcompany/companiesList' , async () => {
    const res = await getCompaniesListApi();
    console.log(res);
    return res;
})