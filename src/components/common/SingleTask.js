import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleTask({ formatedDate }) {
  const [task, setTask] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    const response = await fetch(`/api/todo/${id}`);
    const jsonData = await response.json();

    if (response.ok) {
      setTask(jsonData);
    }
  };

  return (
    <div>
      <h2>{task.title}</h2>
      {task.desc ? <p>{task.desc}</p> : ''}
      <time>{formatedDate(task.createdAt)}</time>
    </div>
  );
}
