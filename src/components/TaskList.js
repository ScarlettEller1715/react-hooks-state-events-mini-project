import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {

  const printTasks = tasks.map((task) => {
    return (
    <Task text={task.text} category={task.category} key={task.text} handleDelete={handleDelete}/>
    )
  })

  return (
    <div className="tasks">
      {printTasks}
    </div>
  );
}

export default TaskList;
