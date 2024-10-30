import React from 'react';
import './Task.css'; 

const Task = ({ task, index, toggleComplete, deleteTask }) => (
  <div className="task-container">
    <div className={`task-content ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
    <div className="task-actions">
      <button className="complete-btn" onClick={() => toggleComplete(index)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button className="delete-btn" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </div>
  </div>
);

export default Task;
