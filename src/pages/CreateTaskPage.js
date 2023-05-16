import Form from '../components/common/Form';

export default function CreateTaskPage({ fetchTasks }) {
  return <Form fetchTasks={fetchTasks} />;
}
