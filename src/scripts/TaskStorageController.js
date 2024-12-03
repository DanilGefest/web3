export function resetList() {
  const arr = [];
  localStorage.setItem("TaskStorage", JSON.stringify(arr));
}

export function addTask(task) {
  let TaskStorage = JSON.parse(localStorage.getItem("TaskStorage"));
  TaskStorage.push(task);
  localStorage.setItem("TaskStorage", JSON.stringify(TaskStorage));
}

export function editTask(index, newTitle, newAbout) {
  let TaskStorage = JSON.parse(localStorage.getItem("TaskStorage"));
  TaskStorage[index].title = newTitle;
  TaskStorage[index].about = newAbout;
  localStorage.setItem("TaskStorage", JSON.stringify(TaskStorage));
}

export function delTask(index) {
  let TaskStorage = JSON.parse(localStorage.getItem("TaskStorage"));
  TaskStorage.splice(index, 1);
  localStorage.setItem("TaskStorage", JSON.stringify(TaskStorage));
}

export function getTaskList() {
  let TaskStorage = JSON.parse(localStorage.getItem("TaskStorage"));
  return TaskStorage;
}

export function moveTask(dragIndex, hoverIndex) {
  const TaskStorage = getTaskList();
  const draggedTask = TaskStorage[dragIndex];
  TaskStorage.splice(dragIndex, 1);
  TaskStorage.splice(hoverIndex, 0, draggedTask);
  localStorage.setItem("TaskStorage", JSON.stringify(TaskStorage));
}
