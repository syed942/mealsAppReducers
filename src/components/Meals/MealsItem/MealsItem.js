import React, { useContext } from 'react'
import CartContext from '../../../store/CartContext'
import { MealItemForm } from './MealItemForm'

export const MealsItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`
  const addToCartHandler = amount => 
cartCtx.addItem({
  id: props.id,
  name: props.name,
  amount: amount,
  price: props.price


})
    
  

  //}
  return (
    <li>
      <h1>{props.name}</h1>
      <div>{props.description}</div>
      <div>{price}</div>
      <div>
        <MealItemForm addToCartHandler={addToCartHandler} />
      </div>
      <hr />
    </li>
  )
}
