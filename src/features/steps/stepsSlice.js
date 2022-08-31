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
        
    ],
    currentStep: null
}

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        updateStep: (state,action) => { 
            state.currentStep = action.payload
        }
    }
})

export const { updateStep } = stepsSlice.actions

export default stepsSlice.reducer