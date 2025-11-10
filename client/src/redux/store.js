import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./city/city.reducer";

export const store = configureStore({
    reducer: {
        cities: cityReducer
    }
})