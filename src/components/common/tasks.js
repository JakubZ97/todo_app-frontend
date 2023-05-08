import React from 'react'

export default function Tasks({ tasks }) {
  const formatedDate = (oldDate) => {
    const date = new Date(oldDate)

    return date.toLocaleString()
  }

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key = {task._id}>
            <h2>
              {task.title}
            </h2>
            {task.desc 
              ? <p>{task.desc}</p> 
              : '' }
            <time>
              {formatedDate(task.createdAt)}
            </time>
          </li>
        )
      })}
    </ul>
  )
}
