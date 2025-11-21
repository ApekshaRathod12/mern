import { createReducer } from "@reduxjs/toolkit"
import { getCompaniesList } from "./subcompany.action"

const initialState = {
    subCompanies : [],
    companiesList: [],
    status : 'idle'
}

export const subCompanyReducer = createReducer(initialState , (builder) => {
    builder
    .addCase(getCompaniesList.pending , (state) => {
        state.status = "loading"
    })
    .addCase(getCompaniesList.fulfilled , (state , action) => {
        state.status = "succeeded";
        state.companiesList = action.payload.data;
    })
    .addCase(getCompaniesList.rejected , (state) => {
        state.status = "failed"
    })
}) 