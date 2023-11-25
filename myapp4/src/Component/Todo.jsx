import './Todo.css'
import React, { useState, useEffect } from 'react';


const Todo=()=>{
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
  
  
    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(storedTasks);
    }, []);
  
    
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = () => {
      if (task.trim() !== '') {
        setTasks([...tasks, task]);
        setTask('');
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };

    return (
        <div >
          <h1>Todo List</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Add task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
}
export default Todo