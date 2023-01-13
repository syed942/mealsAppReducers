import React, { useState } from 'react'
import { Cart } from './components/Cart/Cart'
import { Header } from './components/Layout/Header'
import { Meals } from './components/Meals/Meals'
import CartProvider from './store/CartProvider'

export const App = () => {
  const [showCart,setShowCart]=  useState(false)
  const HandleShowCart=()=>{
    setShowCart(true)
  }
  const HandleHideCart=()=>{
    setShowCart(false)
  }
  return (
    
      <CartProvider>
      {showCart && <Cart onClose={HandleHideCart}/>}
      
      <Header onShowCart={HandleShowCart}/>
      <main>
      <Meals />
      </main>
     
      </CartProvider>
     
    
  )
}
