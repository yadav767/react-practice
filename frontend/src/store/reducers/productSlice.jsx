import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadUser: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { loadUser } = productSlice.actions

export default productSlice.reducer