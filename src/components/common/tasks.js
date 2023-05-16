import React from 'react';
import { Link } from 'react-router-dom';

import './Tasks.scss';

import editSVG from '../../assets/edit.svg';
import deleteSVG from '../../assets/delete.svg';

export default function Tasks({ tasks, formatedDate }) {
  return (
    <ul className="tasks-list">
      {tasks.map((task) => {
        return (
          <li key={task._id} className="task">
            <div className="task__content-container">
              <h2 className="task__header">
                <Link to={task._id}>{task.title}</Link>
              </h2>
              {task.desc ? (
                <p className="task__description">{task.desc}</p>
              ) : (
                ''
              )}
              <time className="task__timestamp">
                {formatedDate(task.createdAt)}
              </time>
            </div>
            <div className="task__button-container">
              <Link to={task._id} className="task__edit-button">
                <img src={editSVG}></img>
              </Link>
              <button className="task__delete-button">
                <img src={deleteSVG}></img>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
