import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name : 'cartSlice',
    initialState,
    reducers : {
        addToCart : (state, action) => {
            let itemFound = state.cartItems.find(item => item.id === action.payload.id)
            if(itemFound){
                let indexToDelete = state.cartItems.indexOf(itemFound)
                let itemToAddInsted = {...itemFound , quantity : itemFound.quantity + 1}
                state.cartItems.splice(indexToDelete,1,itemToAddInsted)
            }else{
                state.cartItems.push({
                    quantity : ,
                    id: ,
                })
            }
            
        }
    },
    extraReducers: {},
})


export default cartSlice.reducer