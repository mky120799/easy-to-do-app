import {TaskForm} from "./TaskForm"
import Task from "./Task";
import './App.css';
import { useState } from "react";
function App() {
  const [tasks,setTasks]=useState([]);

  function addTask(name){
    setTasks(prev=>{
      return [...prev,{name:name,done:false}];
    });
  }
  return (<main>
     
         
        <TaskForm onAdd={addTask}/>
        {tasks.map(task=>(<Task/>))}
        
       
  </main>);
}

export default App;
