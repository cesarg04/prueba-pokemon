import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EstadoInicial {
    authenticated: 'yes' | 'no'
}

const initialState = {
    authenticated: 'no'
} as EstadoInicial


const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        AuthenticateSlice: (state, action: PayloadAction<'yes' | 'no'>) => {
            state.authenticated = action.payload
        },
    }
})

export const { AuthenticateSlice } = mainSlice.actions;
export default mainSlice.reducer;