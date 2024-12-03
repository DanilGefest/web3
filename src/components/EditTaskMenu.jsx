import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../store/tasksActions";

export default function EditTaskMenu({ setAlert, index }) {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks[index]);

  const inputTitleRef = useRef(null);
  const inputAboutRef = useRef(null);

  useEffect(() => {
    inputTitleRef.current.focus();
  }, []);

  function closeAlert() {
    setAlert();
  }

  function showEditTask() {
    const newTitle = inputTitleRef.current.value.trim();
    const newAbout = inputAboutRef.current.value.trim();

    if (newTitle !== "" && newAbout !== "") {
      dispatch(editTask(index, newTitle, newAbout));
      closeAlert();
    }
  }

  return (
    <div className="blur">
      <div className="edit-button-container">
        <input
          ref={inputTitleRef}
          className="edit-title-input"
          type="text"
          placeholder="Title..."
          defaultValue={task.title}
        ></input>
        <textarea
          ref={inputAboutRef}
          className="edit-about-input"
          type="text"
          placeholder="About..."
          defaultValue={task.about}
        ></textarea>

        <div>
          <button className="no-edit-button" onClick={closeAlert}>
            Cancel
          </button>
          <button className="yes-edit-button" onClick={showEditTask}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
