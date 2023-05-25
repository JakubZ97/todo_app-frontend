import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ErrorPopUp from '../components/common/ErrorPopUp';

import { TaskContext } from '../contexts/TaskContext';

export default function RootLayout({ setFilteredTasks }) {
  const [editTask, setEditTask] = useState({});

  return (
    <>
      <Header setFilteredTasks={setFilteredTasks} />
      <TaskContext.Provider value={{ editTask, setEditTask }}>
        <Outlet />
      </TaskContext.Provider>
      <Footer />
      <ErrorPopUp />
    </>
  );
}
