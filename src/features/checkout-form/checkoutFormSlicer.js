import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    form: null
}

export const checkoutFormSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        updateForm: (state,action) => { 
            state.form = action.payload
        }
    }
})

export const { updateForm } = checkoutFormSlice.actions

export default checkoutFormSlice.reducer