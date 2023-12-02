import React, { useState } from 'react'

const AddTask = ({addtask}) => {
  const[value,setvalue]=useState("")
  const additem=()=>{
    addtask(value);
    setvalue("");
  }
  return (
    <>
      <div className='input-container'>
        <input type='text' placeholder='add a new task' className='input'
        value={value}
        
       onChange={(e)=>setvalue(e.target.value)}/>
        <button  onClick={additem}className='add-btn'>ADD</button>
      </div>
    </>
  )
}

export default AddTask
