import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask, markComplete }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-4 border-l-4 rounded-lg ${
            task.completed ? 'border-green-500 bg-green-100' : 'border-blue-500 bg-white'
          } shadow-md flex justify-between items-start`}
        >
          <div>
            <h3 className="text-xl font-bold mb-1">{task.title}</h3>
            <p className="text-gray-600 mb-1">{task.description}</p>
            <p className="text-gray-500">Due: {task.dueDate}</p>
            <p
              className={`text-sm font-semibold mt-2 ${
                task.priority === 'High' ? 'text-red-600' : task.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'
              }`}
            >
              Priority: {task.priority}
            </p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => editTask(task)}
              className="ml-2 mt-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="mt-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
            {!task.completed && (
              <button
                onClick={() => markComplete(task.id)}
                className="mt-1 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Mark Complete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
