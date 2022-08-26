import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    steps: [
        {
            name: 'cart-overview',
        },
        {
            name: 'final',
        }
    ]
}

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
})

export default stepsSlice.reducer