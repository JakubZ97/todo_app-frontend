import Tasks from '../components/common/Tasks';
import SkeletonTasks from '../components/common/SkeletonTasks';

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
        <SkeletonTasks />
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
