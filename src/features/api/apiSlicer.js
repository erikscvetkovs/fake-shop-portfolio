import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    url: 'https://fakestoreapi.com'
}

export const apiSlice = createSlice({
    name: 'api',
    initialState,
})

export default apiSlice.reducer