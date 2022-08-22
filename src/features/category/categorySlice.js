import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 'all'
}

export const categorySlice = createSlice({
    name: 'currentCategory',
    initialState,
    reducers:  {
        getCurrentCategory: (state,action) => {
            state.value = action.payload
        }
    }
})

export const { getCurrentCategory } = categorySlice.actions

export default categorySlice.reducer