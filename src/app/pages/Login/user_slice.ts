import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface UserState { user: IUser; }

export interface IUserAccountLoaded { user: IUser }

const initialState: UserState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
    }
};

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersLoadedReducer: (state, action) => {
            state.user = action.payload.user
        },
    }
})

export const {
    usersLoadedReducer,
} = usersSlice.actions;

export const usersLoaded = ({ user }: IUserAccountLoaded) => async (dispatch: any) => { dispatch(usersLoadedReducer({ user })) }

export default usersSlice.reducer;