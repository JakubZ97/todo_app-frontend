import React from 'react';

import Tasks from '../components/common/Tasks';

export default function SearchPage({
  filteredTasks,
  formatedDate,
  fetchTasks
}) {
  console.log(window.location.search);
  return (
    <main>
      <Tasks
        tasks={filteredTasks}
        formatedDate={formatedDate}
        fetchTasks={fetchTasks}
      />
    </main>
  );
}
