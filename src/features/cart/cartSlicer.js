import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:  {
        changeCartState: (state,action) => {
            state.isOpen = action.payload
        }
    }
})

export const { changeCartState } = cartSlice.actions

export default cartSlice.reducer