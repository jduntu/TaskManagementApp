import React from 'react';
import Task from './Task';
import './TaskList.css'; 

const TaskList = ({ tasks, toggleComplete, deleteTask }) => (
  <div className="task-list">
    {tasks.map((task, index) => (
      <Task
        key={index}
        index={index}
        task={task}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    ))}
  </div>
);

export default TaskList;
