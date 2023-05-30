import React, { useContext } from 'react';

import Task from '../components/common/Task';

import { TaskContext } from '../contexts/TaskContext';
import Form from '../components/common/Form';

export default function EditTaskPage({ formatedDate, fetchTasks }) {
  const { editTask } = useContext(TaskContext);

  return (
    <main className="edit-task-page">
      <Task task={editTask} formatedDate={formatedDate} />
      <Form
        fetchTasks={fetchTasks}
        method="PATCH"
        id={editTask._id}
        formTitle="Edit task"
      />
    </main>
  );
}
