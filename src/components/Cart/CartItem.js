



import React from 'react'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
import styles from '../Cart/CartItem.module.css'
export const CartItem = (props) => {
   const cartCtx=   useContext(CartContext)
   
    const price=`$${props.price}`
  return (
    <div className={styles.cartitem}>
    <li>
        <div>
            <h2>{props.name}</h2>
            <div>
                <span>
                    {price}
                </span>
                {/* <span>
                    x {props.amount}
                </span> */}
                 <span>
                    x {props.quantity }
                </span>
            </div>
            <div>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>

        </div>
    </li>
    </div>
    
  )
}
