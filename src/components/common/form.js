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
          <div className="error-message font-v3">
            Title or description is required
          </div>
        ) : (
          ''
        )}
        <label htmlFor="title" className="font-v6">
          Title
        </label>
        {showTitleError ? (
          <div className="error-message font-v3">Title is required</div>
        ) : (
          ''
        )}
        <input
          placeholder={method === 'POST' ? 'Task title*' : 'Task title'}
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="font-v3"
        />
        <label htmlFor="description" className="font-v6">
          Description
        </label>
        <textarea
          className="font-v3"
          placeholder="Task description"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="submit"
          className="create-task-form__submit font-v3"
          value={method === 'POST' ? 'Create Task' : 'Update Task'}
        />
      </fieldset>
    </form>
  );
}
