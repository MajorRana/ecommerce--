'use client'
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1. Define the initial state with correct syntax
const initialState = {
    loading: false,
    data: [],
    error: '', 
    priceRange: [0, 0] // Defaulted to an array. Update [min, max] values based on your project needs.
}

// 2. Async thunk to fetch products from the API
export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=100');
    return response.data.products;
});

// 3. Create the product slice
const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {       
            state.loading = true;
            state.error = '';
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Something went wrong';
        })
    }
})

// 4. Export actions and reducer
export const productAction = productSlice.actions;
export default productSlice.reducer;