import React, { useState } from 'react'

export const TaskForm = ({onAdd}) => {
  const [taskName,setTaskName]= useState('');
  function handleSubmit(ev){
      ev.preventDefault()
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
