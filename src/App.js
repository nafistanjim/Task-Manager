import './App.css';
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const markComplete = (taskId) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task))
    );
  };

  const editExistingTask = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-500">
          Task Management System
        </h1>
        <TaskForm addTask={addTask} editTask={editTask} editingTask={editingTask} />
        <TaskList
          tasks={tasks}
          editTask={editExistingTask}
          deleteTask={deleteTask}
          markComplete={markComplete}
        />
      </div>
    </div>
  );
};

export default App;
