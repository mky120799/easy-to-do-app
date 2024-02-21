import React, { useState } from 'react'

export const TaskForm = ({onAdd}) => {
  const [taskName,setTaskName]= useState('');
  
  function handleSubmit(ev){
      ev.preventDefault();
      onAdd(taskName);
      setTaskName('');
  }
  return (
    <div>
        <form onSubmit={(ev)=>{handleSubmit(ev)}}>
          <button>   ➕  </button>
          <input type='text' 
          onChange={ev=>setTaskName(ev.target.value)}
          placeholder='Your next Task...'>
            
          </input>
        </form>
    </div>
  )
}
