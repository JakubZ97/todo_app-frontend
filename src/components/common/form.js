import React from 'react';
import { useState } from 'react';

export default function Form({ fetchTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mssg = {
      title: title,
      desc: description
    };

    await fetch('/api/todo/', {
      method: 'POST',
      body: JSON.stringify(mssg),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    fetchTasks();
    setTitle('');
    setDescription('');
  };

  return (
    <form className="create-task-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        placeholder="Task title*"
        id="title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        placeholder="Task description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="submit" className="create-task-form__submit" />
    </form>
  );
}
