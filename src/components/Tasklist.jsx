import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskExemp from "./TaskExemp";
import NoTaskMessage from "./NoTaskMessage";
import { moveTask } from "../store/tasksActions";

export default function Tasklist({ setAlert }) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();



  const moveCard = (dragIndex, hoverIndex) => {
    dispatch(moveTask(dragIndex, hoverIndex));
  };

  if (tasks.length == 0) {
    return (
      <div>
        <NoTaskMessage />
      </div>
    );
  }
  const taskList = tasks.map((task, index) => (
    <TaskExemp
      key={`${task.title}-${index}-${task.about}`}
      title={task.title}
      about={task.about}
      setAlert={setAlert}
      index={index}
      moveCard={moveCard}
    />
  ));
  return <div className="to-do-list-container">{taskList}</div>;
}
