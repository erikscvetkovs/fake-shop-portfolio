import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    quantity: 0,
    totalSum: 0
}


function getQuantity (items) {
    let quantity = 0
    items.forEach((item) => {
        quantity += item.quantity
    })
    return quantity
}

function getTotalSum (items) {
    let sum = 0
    items.forEach((item) => {
        sum += item.price
    })
    return sum
}

function isInArray(item, orders) {
    let indexInArray = null

    const isFound = orders.some((element, index) => {
        if (element.id === item.id) {
            indexInArray = index;
            return true;
        }
        return false;
    });

    return [isFound, indexInArray]
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            if (!isInArray(action.payload, state.items)[0]) {
                const item = JSON.parse(JSON.stringify(action.payload))
                item.quantity = 1
                state.items.push(item)
            } else {
                state.items[isInArray(action.payload, state.items)[1]].quantity++
            }
            state.quantity = getQuantity(state.items)
            state.totalSum = getTotalSum(state.items)
        }
    }
})

export const { addOrder } = orderSlice.actions

export default orderSlice.reducer