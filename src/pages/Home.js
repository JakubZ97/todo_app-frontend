import Tasks from '../components/common/Tasks';

export default function Home({ tasks, formatedDate }) {
  return <Tasks tasks={tasks} formatedDate={formatedDate} />;
}
