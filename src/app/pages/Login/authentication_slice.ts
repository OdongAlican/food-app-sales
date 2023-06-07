import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuth: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = null;
        },
        otpSuccess: (state) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = null;
        },
        logout: (state) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = null;
        },
        loginFailure: (state, { payload }) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = payload;
        },
        isAuthenticatedAction: (state) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = null;
        },
        authenticatedFailedAction: (state) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = null;
        },
    }
})

const { reducer, actions } = authSlice

export const { loginPending, loginSuccess, loginFailure, isAuthenticatedAction, authenticatedFailedAction, otpSuccess, logout } = actions

export default reducer;