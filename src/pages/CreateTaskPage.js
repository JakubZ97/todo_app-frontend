import Form from '../components/common/Form';

export default function CreateTaskPage({ fetchTasks }) {
  return (
    <main>
      <Form fetchTasks={fetchTasks} method="POST" formTitle="Create new task" />
    </main>
  );
}
