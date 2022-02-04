import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategories, setSelectedCategories] = useState("All")
  

  function addNewItem(newItem) {
    console.log(newItem)
    setTasks([
      ...tasks,
      newItem
    ])
    return tasks
  }

  function handleDelete({ text }) {
    let newArray = []
    tasks.filter((task) => {
      if (task.text !== text) {
        newArray.push(task)
      }
    })
    return setTasks(newArray)
  }

  function handleFilter(e) {
   setSelectedCategories(e.target.value)
  }

  const tasksToRender = tasks.filter((task) => {
    if (selectedCategories === "All") {
      return true
    } else if (task.category === selectedCategories) {
      return task
    }
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} handleFilter={handleFilter}/>
      <NewTaskForm categories={categories} addNewItem={addNewItem} />
      <TaskList tasks={tasksToRender} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
