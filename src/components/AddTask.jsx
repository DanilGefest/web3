import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/tasksActions";
export default function AddTask() {
  const dispatch = useDispatch();
  const inputTitleRef = useRef(null);
  const inputAboutRef = useRef(null);
  useEffect(() => {
    inputAboutRef.current.focus();
  }, []);
  function newTaskHandler() {
    const title = inputTitleRef.current.value.trim();
    const about = inputAboutRef.current.value.trim();
    if (title != "" && about != "") {
      dispatch(addTask(title, about));
    }
  }
  return (
    <div className="form-container">
      <div className="form-inputs">
        <input
          ref={inputTitleRef}
          id="input-title"
          type="text"
          placeholder="Title..."
        />
        <input
          ref={inputAboutRef}
          id="input-about"
          type="text"
          placeholder="About..."
        />
      </div>
      <div className="button-add-task-container">
        <button onClick={newTaskHandler} id="add-task-button">
          <img src="src/assets/images/plus-button.svg" alt=""></img>{" "}
        </button>
      </div>
    </div>
  );
}

/* <img src="src/assets/images/plus-button.svg" alt="">  
</img> */
