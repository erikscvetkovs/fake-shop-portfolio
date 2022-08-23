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
        sum += item.price * item.quantity
    })
    return parseFloat(sum).toFixed(2)
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

function updateState(state){
    state.quantity = getQuantity(state.items)
    state.totalSum = getTotalSum(state.items)
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
            updateState(state)
        },
        updateItem: (state,action) => {
            const order = action.payload[0]
            const act = action.payload[1]
            const item = state.items.find((item) => item.id === order.id)
            switch (act){
                case 'remove':
                    item.quantity --
                    if (item.quantity === 0) {
                        var index = state.items.indexOf(item);
                        state.items.splice(index,1)
                    }
                    break;
                case 'add':
                    item.quantity ++
                    break;
                default:
                    console.log('No such action')
            }
            updateState(state)
        }
    }
})

export const { addOrder, updateItem } = orderSlice.actions

export default orderSlice.reducer