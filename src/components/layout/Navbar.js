import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [inputValue, setinputValue] = useState('');

  const handleOnChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/todo/search?filter=${inputValue}`);
    const json = await res.json();
    console.log(json);

    setinputValue('');
    window.location.href = `/search?filter=${inputValue}`;
  };

  return (
    <nav className="navbar">
      <form className="form-v1 " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={handleOnChange}
          value={inputValue}
        />
        <input aria-label="search" type="submit" value=""></input>
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
