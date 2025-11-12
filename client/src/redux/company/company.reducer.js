import { createReducer } from "@reduxjs/toolkit";
import { addCompany, getCompanies } from "./company.action";

const initialState = {
  status: "idle",
  companies: [],
};

export const companyReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCompanies.pending, (state) => {
        state.status = 'loading'
    })
    .addCase(getCompanies.fulfilled , (state, action) => {
        state.status = 'succeeded';
        state.companies = action.payload.data;
    })
    .addCase(getCompanies.rejected , (state) => {
        state.status = 'failed'
    })
    .addCase(addCompany.pending, (state) => {
      state.status = "loading";
    })
    .addCase(addCompany.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.companies.push(action.payload.data);
    })
    .addCase(addCompany.rejected, (state) => {
      state.status = "failed";
    });
});

