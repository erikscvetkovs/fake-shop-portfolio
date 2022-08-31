import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    apiError: false
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        findError: (state,action) => { 
            state.apiError = action.payload
        }
    }
})

export const { findError } = errorSlice.actions

export default errorSlice.reducer