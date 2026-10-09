// this file containe redux state and reducer

import { createSlice } from "@reduxjs/toolkit"

const initialState = { products: [], }

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addproduct: (state, action) => {
            state.products.push(action.payload)
        },
        deleteproduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload)
        }
    }
})

export const {addproduct, deleteproduct} = productSlice.actions;
export default productSlice.reducer;