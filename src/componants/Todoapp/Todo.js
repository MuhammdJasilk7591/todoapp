import React, { useState } from 'react'
import "./Todo.css"
import AddTask from './AddTask'
import ListTask from './ListTask'

const Todo = () => {
  const [tasks, setTasks]= useState([
   { title:'learn html'},
   { title:'learn Css'},
   { title:'learn Javascript'},
   { title:'learn Javascript'}
  ]);

  const addtask=(title)=>{
    const newtask=[...tasks, {title}];
    setTasks(newtask);

  }
  const removeTask=(index)=>{
    const newtask=[...tasks]
    newtask.splice(index,1)
    setTasks(newtask)
  }
  return (
    <>
        <div className='todo-container'>
            <div className='header'>Todo app</div>
            <div className='add-task'> 
            <AddTask  addtask={addtask}/>
            </div>
            <div className='task'> 
            {tasks.map((task,index)=>(
             <ListTask  task={task}
             removeTask={removeTask} index={index}
             />
            ))}
           </div>
        </div>
      
    </>
  )
}

export default Todo
