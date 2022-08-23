import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:  {
        addOrder: (state,action) =>{
            state.items.push(action.payload)
        }
    }
})

export const { addOrder } = orderSlice.actions

export default orderSlice.reducer