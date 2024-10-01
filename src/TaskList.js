import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask, markComplete }) => {
  // Sort tasks by priority (High -> Medium -> Low)
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="space-y-4">
      {sortedTasks.map((task) => (
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
            {/* Conditionally show the Drive link if it exists */}
            {task.driveLink && (
              <a
                href={task.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 inline-block"
              >
                View Attachment
              </a>
            )}
          </div>
          <div className="space-x-2">
            <button
              onClick={() => editTask(task)}
              className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
            {!task.completed && (
              <button
                onClick={() => markComplete(task.id)}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
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
