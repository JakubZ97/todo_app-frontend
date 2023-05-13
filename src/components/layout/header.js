import React from 'react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="header font-v2">
      <div className="header__container">
        <h1 className="header__logo">To Do</h1>
        <Navbar />
      </div>
    </header>
  );
}
