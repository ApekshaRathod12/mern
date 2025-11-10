import { createReducer } from "@reduxjs/toolkit"
import { fetchCities } from "./city.action"

const initialState = {
    cities : [],
    status : 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
}

export const cityReducer = createReducer(initialState , (builder) => {
    builder
    .addCase(fetchCities.pending , (state) => {
        // You can set a loading state here if needed
        state.status = 'loading';
    })
    .addCase(fetchCities.fulfilled , (state , action) => {
        state.status = 'succeeded';
        state.cities = action.payload.data; // Assuming the API response has a 'data' field with cities
    })
    .addCase(fetchCities.rejected , (state) => {
        state.status = 'failed';
        // You can handle errors here if needed
    })
})