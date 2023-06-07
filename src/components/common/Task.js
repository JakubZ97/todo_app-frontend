import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import editSVG from '../../assets/edit.svg';
import deleteSVG from '../../assets/delete.svg';
import { TaskContext } from '../../contexts/TaskContext';

export default function Task({ task, handleDelete, formatedDate, index }) {
  const { setEditTask } = useContext(TaskContext);

  const handleSetEditTask = () => {
    setEditTask(task);
  };

  return (
    <div className="task">
      <div className="task__content-container">
        <h2 className="task__header font-v3">
          <Link
            to={task._id}
            className="task__edit-button"
            onClick={handleSetEditTask}
          >
            {task.title}
          </Link>
        </h2>
        {task.desc ? (
          <p className="task__description font-v4">{task.desc}</p>
        ) : (
          ''
        )}
        <time className="task__timestamp font-v5">
          {formatedDate(task.createdAt)}
        </time>
      </div>
      {handleDelete ? (
        <div className="task__button-container">
          <Link
            to={task._id}
            className="task__edit-button"
            onClick={handleSetEditTask}
          >
            <img src={editSVG} alt="Edit"></img>
          </Link>
          <button
            className="task__delete-button"
            onClick={(e) => {
              handleDelete(e, task._id, index);
            }}
          >
            <img src={deleteSVG} alt="Delete"></img>
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
