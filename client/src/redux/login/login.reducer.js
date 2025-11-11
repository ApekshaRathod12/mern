import { createReducer } from "@reduxjs/toolkit"
import { loginAction } from "./login.action"

const initialState = {
    user : [],
    status: 'idle'
}

export const loginReducer = createReducer(initialState , (builder) => {
    builder
    .addCase(loginAction.pending , (state) => {
        state.status = 'loading'
    })
    .addCase(loginAction.fulfilled , (state, action) => {
        state.status = 'succeeded';
        state.auth = action.payload.data;
    })
    .addCase(loginAction.rejected , (state) => {
        state.status = 'failed';
    })
})