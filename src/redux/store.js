'use client'
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './category/categorySlice'
import productReducer from './products/productSlice'
import cartReducer from './cart/cartSlice'
const store=configureStore({
    reducer:{
        category:categoryReducer,
        product:productReducer,
        cart:cartReducer
    }
})
export default store