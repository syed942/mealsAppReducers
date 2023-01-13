


import { useReducer } from "react";
//import { MealItemForm } from "../components/Meals/MealsItem/MealItemForm";
import CartContext from "./CartContext";
const defaultState={
    items:[],
    totalAmount:0,
   // quantity:0
  //  updatedPrice:0
}
const cartReducer=(state,action)=>{
    if(action.type === "ADD"){
    
          let isOld = state.items.find(item => item.id === action.payload.id)
        //  const ok=isOld.productId;
        console.log("items already existed", isOld)
        console.log(state.items)
       
        if (isOld) {
       
            return {
                ...state,
                
              items: [{ ...isOld, quantity:  isOld.quantity + 1 }]
            }

        }
       else{
         return{ ...state,
           
          items:[{...action.payload,quantity:1},...state.items]
            
         }
       }
      
       
    }
  
      
        
          
      
      
    if(action.type === "REMOVE"){
      console.log(state.items[0])
      if (state.items[0].quantity >= 1) {
        return {
            ...state,
            items: [{ ...state.items[0], quantity: state.items[0].quantity - 1 }]


        }

    } else {
        return {
            ...state,

            items: state.items.filter(item => item !== action.payload)

        }

    
      }
    }

    return  defaultState ;
  

}


const CartProvider=(props)=>{
  const [cartState,dispatchCartAction]= useReducer(cartReducer,defaultState)
  const addItem=item=>{
    dispatchCartAction({
      type:'ADD',
      payload: item
    })
  //  dispatchCartAction({type:"ADD",item:item})
}
// const removeItem=id=>{
//     dispatchCartAction({type:"REMOVE",id:id})

// }
function  removeFromCart(item) {
  dispatchCartAction({
    type: "REMOVE",
   
    payload:item
  });
};
  const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
       quantity:cartState.quantity,
      
        addItem:addItem,
        removeItem:removeFromCart
       // updatedPrice:cartState.updatedPrice
        
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}


export default CartProvider