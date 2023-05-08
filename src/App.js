import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';

import RootLayout from './layouts/RootLayout';
import AddTask from './pages/CreateTask';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('/api/todo');
    const jsonData = await response.json();

    if (response.ok) {
      setTasks(jsonData);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home tasks={tasks} />} />
        <Route
          path="/create-task"
          element={<AddTask fetchTasks={fetchTasks} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
