import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form({ fetchTasks, method, id, formTitle }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showTitleError, setShowTitleError] = useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);

  const taskCreate = () => {
    const task = {};

    if (title) {
      task.title = title;
    }
    if (description) {
      task.desc = description;
    }

    return task;
  };

  const checkErrors = () => {
    if (!title.split(' ').join('') && method === 'POST') {
      setShowTitleError(true);
      return true;
    }

    if (
      !title.split(' ').join('') &&
      !description.split(' ').join('') &&
      method === 'PATCH'
    ) {
      setShowDescriptionError(true);
      return true;
    }

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checkErrors()) {
      return;
    }

    const taskToSend = taskCreate();

    await fetch(`/api/todo/${id ? id : ''}`, {
      method: method,
      body: JSON.stringify(taskToSend),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setShowTitleError(false);
    setShowDescriptionError(false);
    setTitle('');
    setDescription('');
    fetchTasks();
    navigate('/');
  };

  return (
    <form className="form-v2" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="font-v6">{formTitle}</legend>
        {showDescriptionError ? (
          <div className="error-message">Title or description is required</div>
        ) : (
          ''
        )}
        <label htmlFor="title">Title</label>
        {showTitleError ? (
          <div className="error-message">Title is required</div>
        ) : (
          ''
        )}
        <input
          placeholder={method === 'POST' ? 'Task title*' : 'Task title'}
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Task description"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="submit"
          className="create-task-form__submit"
          value={method === 'POST' ? 'Create Task' : 'Update Task'}
        />
      </fieldset>
    </form>
  );
}
