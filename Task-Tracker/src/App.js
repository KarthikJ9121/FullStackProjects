import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';
import Footer from './components/Footer.js';

function App() {
  const [showAddTask, setShowAddTasks] = useState(false);

  const [tasks, setTasks] = useState([])

  //Get Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [])

  //getData from Server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    // console.log(data);

    return data;
  }

  //POST Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();

    setTasks([...tasks, data]);



    /* for Temporary checking */
    // const id = Math.floor(Math.random() * 10000) + 1;
    // // console.log(task); 
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  }

  // PUT Task
  // Fetch Single Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    // console.log(data);

    return data;
  }

  // Toggle Remainder   
  const onToggle = async (id) => {
    // console.log(id);
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, remainder: !taskToToggle.remainder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTasks(
      tasks.map(
        (task) => task.id === id ? { ...task, remainder: data.remainder } : task
      )
    )
  }

  // DELETE Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTasks(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle} />
        ) : 'No Tasks Found'
        }
        <Footer />
      </div>
    </Router>
  )
}

export default App;
