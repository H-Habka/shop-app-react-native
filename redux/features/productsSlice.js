import {createSlice} from '@reduxjs/toolkit'
import PRODUCTS from "../../data/DUMMY_DATA" 

const initialState = {
    products : PRODUCTS,
    useProducts : PRODUCTS.filter(item => item.ownerId === "u1"),
    isDarkMode : false
}


const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        toggleDarkMode : state => {
            state.isDarkMode = !state.isDarkMode
        }
    },
    extraReducers : {}
})


export const {toggleDarkMode} = productsSlice.actions

export default productsSlice.reducer