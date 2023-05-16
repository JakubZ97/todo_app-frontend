import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import HomePage from './pages/HomePage';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';

import RootLayout from './layouts/RootLayout';

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('/api/todo');

    if (response.ok) {
      const jsonData = await response.json();
      setTasks(jsonData);
    } else {
      const { status, statusText } = response;
      setError({ status, statusText });
    }
  };

  const formatedDate = (oldDate) => {
    const date = new Date(oldDate);

    return date.toLocaleString();
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<HomePage tasks={tasks} formatedDate={formatedDate} />}
        />
        <Route
          path="/create-task"
          element={<CreateTaskPage fetchTasks={fetchTasks} />}
        />
        <Route
          path="/:id"
          element={<EditTaskPage formatedDate={formatedDate} />}
        ></Route>
        <Route
          path="/search"
          element={<CreateTaskPage fetchTasks={fetchTasks} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
