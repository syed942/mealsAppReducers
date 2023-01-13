import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import { CartIcon } from '../Cart/CartIcon'
import styles from '../Layout/HeaderCartButton.module.css'
export const HeaderCartButton = (props) => {
 
 const cartCtx =  useContext(CartContext)
 const totalAmount= cartCtx.totalAmount;
 const quantity= cartCtx.quantity;
 const items=[...cartCtx.items]
 console.log(quantity)
     const NumberOfCartItems =cartCtx.items.reduce((currentNumber,item) => {
    
        return ( currentNumber + item.quantity)
     },0)
     console.log("number of items in shopcat icon",NumberOfCartItems)
  return (
    <button className={styles.button} onClick={props.onShowCart}>
        <span>
            <CartIcon /> 
        </span>
       
        <span style={{fontSize:"10px" ,color:"brown",marginLeft:"-20px",marginTop:"-10px"}}>{NumberOfCartItems}</span>
    </button>
  )
}
