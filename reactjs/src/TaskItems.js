import React from "react";
import './App.css'
const TaskItems = (props) =>{
    
    const newTaskArray =  props.check;

    return (
    <div className="added">
       {
         newTaskArray.map((ex)=>{
            return <div className="todoTask">{ex}</div>
         })
      }
      </div>
    )
}

export default TaskItems;