import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

import './Toolbar.css';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;