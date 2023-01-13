import React from 'react'

import styles from '../Meals/AvailableMeals.module.css'
import { Card } from '../UI/Card'
import { MealsItem } from './MealsItem/MealsItem'
const DummyMeals = [
    { id: 1, name: "pizza", description: "chicken fajita small size", price: 35.77 },
    { id: 2, name: "zinger", description: "burger with juicy chicken", price: 30.77 },
    { id: 3, name: "chicken wrapper", description: "chicken filled bytes", price: 35.77 },
    { id: 4, name: "sandwitch", description: "chicken filled with mionise", price: 35.77 }
]
export const AvailableMeals = () => {
    const mealsList = DummyMeals.map(meal => 
        <MealsItem name={meal.name}
        key={meal.id} id={meal.id}

        price={meal.price} description={meal.description}  />
    )
    return (
        <>
        <section className={styles.meals}>
            <Card>
            <ul>
                {
                    mealsList
                }
            </ul>
            </Card>
            
        </section>
        </>
        
    )
}
