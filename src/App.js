import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import AddTask from './pages/CreateTask';
import EditTask from './pages/EditTask';

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
          element={<Home tasks={tasks} formatedDate={formatedDate} />}
        />
        <Route
          path="/create-task"
          element={<AddTask fetchTasks={fetchTasks} />}
        />
        <Route
          path="/:id"
          element={<EditTask formatedDate={formatedDate} />}
        ></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
