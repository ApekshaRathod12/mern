import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCitiesApi } from "./city.http";

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    return await fetchCitiesApi();
});