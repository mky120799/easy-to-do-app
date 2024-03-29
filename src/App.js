import {TaskForm} from "./TaskForm"
import Task from "./Task";
import './App.css';
import { useEffect, useState } from "react";
function App() {


  const [tasks,setTasks]=useState([]);


  useEffect(()=>{
    if(tasks.length===0) return;
    localStorage.setItem('tasks',JSON.stringify(tasks)); 
  },[tasks]);
  
  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks)
  },[]);

  function addTask(name){
      setTasks(prev=>{
      return [...prev,{name:name,done:false}];
    });
  }

  function updateTaskDone(taskIndex,newDone){
       setTasks(prev =>{
           const newTask = [...prev];
            newTask[taskIndex].done = newDone;
            return newTask;
       });
  }

  return (<main>
     
         
        <TaskForm onAdd={addTask}/>
        {tasks.map((task,index)=>(
          <Task{...task} onToggle={done=>updateTaskDone(index,done)}/>))}
          
       
  </main>);
}

export default App;
