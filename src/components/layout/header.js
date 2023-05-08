import React from 'react';
import { NavLink } from 'react-router-dom';

import headerStyles from './header.module.scss';

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>To Do</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="create-task">Create task</NavLink>
      </nav>
    </header>
  );
}
