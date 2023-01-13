import React from 'react'
import  ReactDOM  from 'react-dom'
import styles from '../UI/Modal.module.css'
const Backdrop=(props)=>{
return <div className={styles.backdrop} onClick={props.onClose}></div>
}
const ModalOverLay=(props)=>{
return <div className={styles.modal}>
    <div>{props.children}</div>
</div>
}
const portalElement=document.getElementById("overlay")
export const Modal = (props) => {
  return (
    <div>{
        ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)
        }
        {
     ReactDOM.createPortal( <ModalOverLay >
        {props.children}
    </ModalOverLay>,portalElement)
    
        }
       
    </div>
  )
}
