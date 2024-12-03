import delButton from "../images/button-dell.svg";
import DeleteAlert from "./DeleteAlert";
import { useRef, useState } from "react";
import TaskButtons from "./TaskButtons";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../scripts/ItemTypes";

export default function TaskExemp({ title, about, setAlert, index, moveCard }) {
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const ref = useRef();

  function showDeleteAlert() {
    setAlert(<DeleteAlert setAlert={setAlert} index={index} />);
  }

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.TASK,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      hover(item, monitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    }),
    [index, moveCard]
  );

  drag(drop(ref));

  return (
    <div ref={ref}>
      <div className="task" onClick={() => setButtonsVisible(!buttonsVisible)}>
        <div className="text-task">
          <h2> {title}</h2>
          <p> {about}</p>
        </div>
        <div className="delete-button">
          <button onClick={showDeleteAlert} className="button-del">
            <img src={delButton} alt="" />
          </button>
        </div>
      </div>
      {buttonsVisible && <TaskButtons setAlert={setAlert} index={index} />}
    </div>
  );
}

