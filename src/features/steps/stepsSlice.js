import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    steps: [
        {
            name: 'bag-overview',
            title: 'bag'
        },
        {
            name: 'checkout',
            title: 'checkout'
        },
        {
            name: 'payment',
            title: 'payment'
        },
        {
            name: 'final',
            title: null
        },
        
    ]
}

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
})

export default stepsSlice.reducer