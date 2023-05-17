import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

export default function Header({ setFilteredTasks }) {
  return (
    <header className="header font-v2">
      <div className="header__container">
        <Link to="/">
          <h1 className="header__logo">To Do</h1>
        </Link>
        <Navbar setFilteredTasks={setFilteredTasks} />
      </div>
    </header>
  );
}
