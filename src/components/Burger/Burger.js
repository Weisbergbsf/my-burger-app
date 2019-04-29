import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import './Burger.css'

const burger = (props) => {
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;