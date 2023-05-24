import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import HomePage from './pages/HomePage';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import SearchPage from './pages/SearchPage';

import { ErrorContext } from './contexts/ErrorContext';

import RootLayout from './layouts/RootLayout';

function App() {
  const isFirstRender = useRef(true);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    setLoadingScreen(true);

    const response = await fetch('/api/todo');

    setTasks([]);

    if (response.ok) {
      const jsonData = await response.json();
      setTasks(jsonData);
      setLoadingScreen(false);
    } else {
      const { status, statusText } = response;
      setError({ status, statusText });
    }
  };

  const formatedDate = (date) => {
    const newDate = new Date(date);

    return newDate.toLocaleString();
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout setFilteredTasks={setFilteredTasks} />}
      >
        <Route
          index
          element={
            <HomePage
              tasks={tasks}
              formatedDate={formatedDate}
              fetchTasks={fetchTasks}
              setTasks={setTasks}
              loadingScreen={loadingScreen}
            />
          }
        />
        <Route
          path="/create-task"
          element={<CreateTaskPage fetchTasks={fetchTasks} />}
        />
        <Route
          path="/:id"
          element={
            <EditTaskPage formatedDate={formatedDate} fetchTasks={fetchTasks} />
          }
        ></Route>
        <Route
          path="/search"
          element={
            <SearchPage
              filteredTasks={filteredTasks}
              formatedDate={formatedDate}
              fetchTasks={fetchTasks}
            />
          }
        />
      </Route>
    )
  );

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <RouterProvider router={router} />
    </ErrorContext.Provider>
  );
}

export default App;
