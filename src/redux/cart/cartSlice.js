import { defaultHead } from "next/head";
function isProductAlreadyExistsInCart(p,arrCart){
    var cartItem=arrCart.find(e=>e.product.id==p.id)
    if(cartItem)
        return true
    else
    return false
}
function increaseQuantityInCart(p,arrCart){

var cartItem=arrCart.find(e=>e.product.id==p.id)
cartItem.quantity++;
}
function removeItemFromCart(p,arrCart){
    var index=arrCart.findIndex(e=>e.product.id==p.id)  
    arrCart.splice(index,1); 
}
function decreaseQuantityInCart(p,arrCart){

    var cartItem=arrCart.find(e=>e.product.id==p.id)
    if(cartItem.quantity>1){
        cartItem.quantity--;
    }
    else{
        removeItemFromCart(p,arrCart);
    }
    }
const { createSlice } = require("@reduxjs/toolkit");
const initialState={
    data:[]
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            if(isProductAlreadyExistsInCart(action.payload,state.data)){
                increaseQuantityInCart(action.payload,state.data)
            }
            else
            state.data.push({product:action.payload,quantity:1})
            
        },
        removeFromCart:(state,action)=>{
            removeItemFromCart(action.payload,state.data)
        },
        increaseQuantity:(state,action)=>{
            increaseQuantityInCart(action.payload,state.data)
        },
        decreaseQuantity:(state,action)=>{
            decreaseQuantityInCart(action.payload,state.data)
        }

    }
})
const cartActions=cartSlice.actions
export {cartActions}
export default cartSlice.reducer