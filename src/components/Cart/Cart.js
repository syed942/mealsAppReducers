import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import styles from '../Cart/Cart.module.css'
import { Modal } from '../UI/Modal'
import { CartItem } from './CartItem'
export const Cart = (props) => {
   const cartCtx =    useContext(CartContext)
  // console.log(cartCtx.totalAmount)
const totalAmount = `$${cartCtx.totalAmount}`;
//const totalAmount = cartCtx.totalAmount;
console.log("total amount in cart.js is",totalAmount)
  const NumberOfCartItems = cartCtx.items.reduce((currentNumber,item) => {
    
        return  currentNumber +  item.quantity
     },1)
     const totalAmount1= cartCtx.items.reduce((ack,item)=>ack + item.price * item.quantity,0)
     console.log("number of items in shopcat icon",NumberOfCartItems)
  // const totalAmount= `$${cartCtx.totalAmount}`;
   //const totalAmount=344;
   const CartItemRemove=item=>{
    cartCtx.removeItem(item)
   }
   const CartItemAdd=item=>{
    cartCtx.addItem(item)

   }
    const cartItems=
    <ul className={styles['cart-items']}>
    {
        cartCtx.items.map(item=>
            // <li key={item.id}>
           
            // </li>
          
              <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} quantity={item.quantity}
              onAdd={CartItemAdd.bind(null,item)} onRemove={CartItemRemove.bind(null,item)}
              />
            
            // <CartItem name={item.name} price={item.price}
            // key={item.id} amount={item.amount} onRemove={CartItemRemove.bind(null,item.id)} onAdd={CartItemAdd.bind(null,item)}
            // />
            )
    }
    </ul>
   
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={styles.total}>
            <span>Total amount</span>
            <span>
              {totalAmount1.toFixed(2)}
            </span>

        </div>
        <div className={styles.actions}>
            <button onClick={props.onClose}>Close</button>
            <button>Order</button>

        </div>
    </Modal>
  )
}
