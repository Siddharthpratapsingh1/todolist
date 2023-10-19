import "./App.css";
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [task, setTask] = useState([]);

  //add todo in list
  const submithandeler = (e) => {
    e.preventDefault();
    setTask([...task, { title, discription }]);
    setTitle("");
    setDiscription("");
  };
  const todoEdit = (i) => {
    const updatedTask = [...task];
    const editedItem = updatedTask[i];
  
    // Ask the user for the new title and description (you can use a prompt or any other UI for this)
    const newTitle = prompt("Edit Title:");
    const newDescription = prompt("Edit Description:");
  
    if (newTitle !== null && newDescription !== null) {
      // Update the task item with the new values
      editedItem.title = newTitle;
      editedItem.discription = newDescription;
  
      // Update the state with the edited task
      setTask(updatedTask);
    }
  };

  //delete selected todo in list
  const deleteHander = (i) => {
    let copyTask = [...task];
    copyTask.splice(i, 1);
    setTask(copyTask);
  };

  return (
    <>
      <div className="container">
      <h1>My Todo list</h1>
      <form onSubmit={submithandeler}>
        <div className="inputs">
        <label htmlFor="101">Title : </label>
        <input
          className="titles"
          id="101"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="102">Discription : </label>
        <input
          className="titles"
          type="text"
          id="102"
          placeholder="discription"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <br />
        <button>Submit</button>
        </div>
        
        {task.length >= 1 && (
          <button className="Removebtn" onClick={() => setTask([])}>Remove All</button>
        )}

      </form>
      <hr />
      <ul>
        {!task ? (
          <li>No Task Available</li>
        ) : (
          task.map((t, i) => (
            <li key={i}>
              <div className="Lists">
                <h2>{t.title} </h2> 
                <h4>{t.discription}  <button className="Editbtn"  onClick={()=>todoEdit(i)}>Edit</button></h4>
              
                <button className="deletebtn" onClick={() => deleteHander(i)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
      </div>
    </>
  );
}

export default App;
