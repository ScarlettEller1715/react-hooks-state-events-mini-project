import React, { useState } from "react";

function NewTaskForm({ categories, addNewItem }) {
  
  const [taskName, setTaskName] = useState("")
  const [taskCategory, setTaskCategory] = useState("Code")
   
  function OptionsBar({categories}) {
      return (categories.map((category) => {
        return (
        <option value={category} key={category}>{category}</option>
        )
      }
      ))}

  console.log(taskName)
  console.log(taskCategory)
  
      function handleSubmission(e) {
    e.preventDefault()
    addNewItem({
      text: taskName,
      category: taskCategory
    })
    }

    
  
  return (
    <form className="new-task-form" onSubmit={(e) => {handleSubmission(e)}}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => {setTaskName(e.target.value)}}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => {setTaskCategory(e.target.value)}}>
          <OptionsBar categories={categories}/>
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
