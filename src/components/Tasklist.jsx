import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskExemp from "./taskExemp";

export default function Tasklist() {
  const task = useSelector((state) => state.tasks);
  if (task.length == 0) {
    return <div>Sosal?</div>;
  } 
  const taskList = task.map((task, index) => (
    <TaskExemp title={task.title} about={task.about} key={index}/>
  ));
  return <div className="to-do-list-container">{taskList}</div>;
}
