import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskExemp from "./taskExemp";
import NoTaskMessage from "./NoTaskMessage";

export default function Tasklist({ setAlert }) {
  const task = useSelector((state) => state.tasks);
  if (task.length == 0) {
    return (
      <div>
        <NoTaskMessage />
      </div>
    );
  }
  const taskList = task.map((task, index) => (
    <TaskExemp title={task.title} about={task.about} key={index} setAlert={setAlert} index={index}/>
  ));
  return <div className="to-do-list-container">{taskList}</div>;
}
