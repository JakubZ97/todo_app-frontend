import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ setFilteredTasks }) {
  const [inputValue, setinputValue] = useState('');
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/todo/search?filter=${inputValue}`);
    const json = await response.json();

    if (response.ok) {
      setFilteredTasks(json);
      setinputValue('');
      navigate(`/search?filter=${inputValue}`);
    }
  };

  return (
    <nav className="navbar">
      <form className="form-v1 " onSubmit={handleSubmit}>
        <input
          className="font-v4"
          type="text"
          placeholder="Search"
          onChange={handleOnChange}
          value={inputValue}
        />
        <input aria-label="search" type="submit" value=""></input>
      </form>
      <div className="navbar__link-container">
        <NavLink to="/" className="link-style-v1 font-v3">
          Home
        </NavLink>
        <NavLink to="create-task" className="link-style-v1 font-v3">
          Create task
        </NavLink>
      </div>
    </nav>
  );
}
