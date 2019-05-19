import React from 'react';

import Logo from '../../Logo/Logo';

import './Toolbar.css';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;