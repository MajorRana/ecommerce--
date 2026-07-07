'use client'
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:false,
    data:[],
    error:'',
    selectedCategory:'LAPTOPS'
}
const  fetchCategory=createAsyncThunk('category/fetchCategory',()=>{
    
   return axios.get('https://dummyjson.com/products/category-list').then(response=>response.data)

})
const categorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
        selectCategory:(state,action)=>{
            state.selectedCategory=action.payload
        }
    }
    ,
   extraReducers:(builder)=>{
    builder.addCase(fetchCategory.pending,(state,action)=>{       
        state.loading=true
    })
    builder.addCase(fetchCategory.fulfilled,(state,action)=>{
       
        state.loading=false;
        state.data=action.payload
    })
    builder.addCase(fetchCategory.rejected,(state,action)=>{
        
        state.loading=false,
        state.error=action.payload
    })
   }
})
const categoryAction=categorySlice.actions

export {fetchCategory,categoryAction}
export default categorySlice.reducer