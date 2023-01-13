import React from 'react'
import { AvailableMeals } from './AvailableMeals'
import { MealsSummery } from './MealsSummery'

export const Meals = () => {
    return (
        <div>
            <MealsSummery />
            <AvailableMeals />
        </div>
    )
}
