import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    steps: [
        {
            name: 'bag-overview',
        },
        {
            name: 'checkout',
        },
        {
            name: 'shipping-details',
        },
        {
            name: 'final',
        },
        
    ]
}

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
})

export default stepsSlice.reducer