import React, { useRef, useState } from 'react'
import { Input } from '../../UI/Input'
import styles from '../MealsItem/MealItemForm.module.css'
export const MealItemForm = (props) => {
  console.log(props.amount)
  const [amountIsValid,setAmountValid]= useState(true);
const amountRef=useRef()

  const SubmitHandler=(event)=>{
    console.log()
    event.preventDefault();
   const enteredAmount= amountRef.current.value;
   console.log("enetrAmount is",enteredAmount);
   const enteredAmountNumber= +enteredAmount;
  //  if( enteredAmountNumber < 1 || enteredAmountNumber > 5){
  // setAmountValid(false)
  //   return;
  //  }
   props.addToCartHandler(enteredAmountNumber);

  }
  
  return (
    <div>
        <form className={styles.form} onSubmit={SubmitHandler}>
        <Input label="Amount" ref={amountRef}
        input={{
            id:"amount",
           // value:{amountRef},
            type:"number",
            // min:"1",
            // max:"5",
            step:"1",
            defaultValue:"1"
        }}
        />
        <input type="submit" value="Add"/>
       
        {/* <button type='submit'>Add</button> */}
        {
          !amountIsValid && <p>please enete a valid amount(1-5)!</p>
        }
       

        </form>
        
    </div>
  )
}
