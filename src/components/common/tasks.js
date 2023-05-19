import React, { useContext } from 'react';
import { animated, useTransition } from 'react-spring';

import Task from './Task';

import { ErrorContext } from '../../contexts/ErrorContext';

export default function Tasks({ tasks, formatedDate, fetchTasks, setTasks }) {
  const { setError } = useContext(ErrorContext);

  const transitionsTasks = useTransition(tasks, {
    from: { x: -100, opacity: 0, marginBottom: 12 },
    enter: (task) => async (next) => {
      await next({
        x: 0,
        opacity: 1,
        height: document.getElementById(`list-${task._id}`).clientHeight
      });
    },
    leave: [
      { x: 200, opacity: 0 },
      { height: 0, marginBottom: 0 }
    ],
    trail: 100
  });

  const handleDelete = async (e, id, index) => {
    const oldTasks = [...tasks];
    const newTasks = [...tasks];

    newTasks.splice(index, 1);
    setTasks(newTasks);

    const response = await fetch(`/api/todo/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      const { status, statusText } = response;

      setTasks(oldTasks);
      setError({ status, statusText });
    }
  };

  return (
    <ul className="tasks-list">
      {transitionsTasks((style, item, state, index) => {
        return (
          <animated.li style={style} id={'list-' + item._id}>
            <Task
              task={item}
              handleDelete={handleDelete}
              formatedDate={formatedDate}
              index={index}
            />
          </animated.li>
        );
      })}
    </ul>
  );
}
