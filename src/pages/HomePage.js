import Tasks from '../components/common/Tasks';

export default function HomePage({
  tasks,
  formatedDate,
  fetchTasks,
  setTasks,
  loadingScreen
}) {
  return (
    <main>
      {loadingScreen ? (
        <div>loading</div>
      ) : (
        <Tasks
          tasks={tasks}
          formatedDate={formatedDate}
          fetchTasks={fetchTasks}
          setTasks={setTasks}
        />
      )}
    </main>
  );
}
