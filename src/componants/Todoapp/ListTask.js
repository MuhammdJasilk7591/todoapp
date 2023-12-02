import React from 'react'

const ListTask = ({task,index,removeTask}) => {
  return (
    <div>
      <div className='list-task'>
      {task.title}
        
         <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>
      </div>
    </div>
  )
}

export default ListTask
