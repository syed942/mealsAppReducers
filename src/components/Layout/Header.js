import React from 'react'
import styles from '../Layout/Header.module.css'
import menu from '../../assets/foodMenu.jpg'
import { HeaderCartButton } from './HeaderCartButton'
export const Header = (props) => {
  return (
    <>
    <header className={styles.header}>
        <h1>Meal Hub</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
    </header>
    <div className={styles['main-image']}>
        <img src={menu} alt="kk"  />
    </div>
    </>
  )
}
