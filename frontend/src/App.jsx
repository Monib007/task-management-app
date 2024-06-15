import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from "./utils/HandleApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    getAllTasks(setTasks);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTaskId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Task Management App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add Task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTask(taskId, text, setTasks, setText, setIsUpdating)
                : () => addTask(text, setText, setTasks)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {tasks.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTask={() => deleteTask(item._id, setTasks)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
