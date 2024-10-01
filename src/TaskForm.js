import React, { useState } from 'react';

const TaskForm = ({ addTask, editTask, editingTask }) => {
  const [task, setTask] = useState(
    editingTask || { title: '', description: '', dueDate: '', priority: 'Low' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      editTask(task);
    } else {
      addTask(task);
    }
    setTask({ title: '', description: '', dueDate: '', priority: 'Low' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
