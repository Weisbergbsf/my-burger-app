import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'

const navigationItem = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>
);

export default navigationItem;