import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCityApi, fetchCitiesApi } from "./city.http";

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    return await fetchCitiesApi();
});

export const addCity = createAsyncThunk('cities/addCity',async(payload) => {
    return await addCityApi(payload);
})