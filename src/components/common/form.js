import React, { useState } from 'react';

export default function Form({ fetchTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mssg = {
      title: title,
      desc: description.split(/\r?\n|\r|\n/g).join('\n')
    };

    console.log(description.split(/\r?\n|\r|\n/g));

    if (!title.split(' ').join('')) {
      setShowError(true);
      return;
    }

    await fetch('/api/todo/', {
      method: 'POST',
      body: JSON.stringify(mssg),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setShowError(false);
    fetchTasks();
    setTitle('');
    setDescription('');
  };

  return (
    <form className="form-v2" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      {showError ? <div className="error-message">Title is required</div> : ''}
      <input
        placeholder="Task title*"
        id="title"
        value={title}
        // required
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        placeholder="Task description"
        id="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          console.log(description);
        }}
      />
      <input
        type="submit"
        className="create-task-form__submit"
        value="Create Task"
      />
    </form>
  );
}
