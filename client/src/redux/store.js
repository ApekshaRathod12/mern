import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./city/city.reducer";
import { loginReducer } from "./login/login.reducer";

export const store = configureStore({
    reducer: {
        cities: cityReducer,
        auth: loginReducer
    }
})