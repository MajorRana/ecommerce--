'use client'
import ShopingCart from '@/pages/ShopingCart'
import store from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

function CartPage() {
  return (
    <Provider store={store}>
    <ShopingCart/>
    </Provider>
  )
}

export default CartPage