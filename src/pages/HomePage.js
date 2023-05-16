import Tasks from '../components/common/Tasks';

export default function HomePage({ tasks, formatedDate }) {
  return <Tasks tasks={tasks} formatedDate={formatedDate} />;
}
