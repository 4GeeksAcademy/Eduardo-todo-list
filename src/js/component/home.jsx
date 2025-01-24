import React, { useState } from "react";
import Task from "./Task";

const ToDoList = () => {  
  const [newTask, setNewTask] = useState("");    
  const [taskList, setTasklist] = useState([]);
  return (
    <div className="container text-center border col-6 bg-light">
      <h1 className="display-1 text-muted">todos</h1> 
      <input className="col-12 rounded border-secondary-subtle" type="text" value={newTask} placeholder="What do you want to do next?" 
	  onChange={(event) => setNewTask(event.target.value)} 
	  onKeyUp={(event) => {
		if (event.key == "Enter"){   
			setTasklist([newTask, ...taskList])
			setNewTask("")
		} }}/>
		
    {(taskList.length == 0) && <div className="fw-lighter">no tasks, add a task</div> }
    {taskList.map( (tarea, indice)=> <Task task={tarea} key={indice} onRemove={()=>{
      setTasklist(taskList.filter((_tarea, borrar)=> indice != borrar))
    }}/>)}
    <p>{taskList.length} items left</p>
	</div>
  );
};

export default ToDoList;