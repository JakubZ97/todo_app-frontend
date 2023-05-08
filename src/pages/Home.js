import Tasks from '../components/common/tasks';

export default function Home({ tasks }) {
  return (
    <div className="App">
      <Tasks tasks={tasks} />
    </div>
  );
}
