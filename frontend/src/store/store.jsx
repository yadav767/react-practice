import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import cartSlice from './cartSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        cartReducer: cartSlice,
        productReducer: productSlice
    },
})