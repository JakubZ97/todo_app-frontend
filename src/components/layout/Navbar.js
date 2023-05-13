import React from 'react';
import { NavLink } from 'react-router-dom';

export default function navbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('itborks');
  };

  return (
    <nav className="navbar">
      <form className="form-v1 " onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" />
        <input aria-label="search" type="submit" value="" />
      </form>
      <div className="navbar__link-container">
        <NavLink to="/" className="link-style-v1">
          Home
        </NavLink>
        <NavLink to="create-task" className="link-style-v1">
          Create task
        </NavLink>
      </div>
    </nav>
  );
}
