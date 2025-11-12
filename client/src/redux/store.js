import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./city/city.reducer";
import { loginReducer } from "./login/login.reducer";
import { companyReducer } from "./company/company.reducer";

export const store = configureStore({
    reducer: {
        auth: loginReducer,
        cities: cityReducer,
        companies: companyReducer
    }
})