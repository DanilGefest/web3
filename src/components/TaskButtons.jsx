import React from "react";
import editIcon from "../images/edit_button_icon.svg";
import shareIcon from "../images/share_button_icon.svg";
import EditTaskMenu from "./EditTaskMenu";
import ShareMenu from "./ShareMenu";

export default function TaskButtons({ setAlert, index }) {
  function ShowEditTaskMenu() {
    setAlert(<EditTaskMenu setAlert={setAlert} index={index} />);
  }

  function ShowPublishMenu() {
    setAlert(<ShareMenu setAlert={setAlert} />);
  }

  return (
    <div className="interact-task-buttons">
      <button className="edit-button" onClick={ShowEditTaskMenu}>
        <img className="interact-button-img-scale" src={editIcon} alt=""></img>
      </button>
      <button>i</button>
      <button className="share-button" onClick={ShowPublishMenu}>
        <img className="interact-button-img-scale" src={shareIcon} alt=""></img>
      </button>
    </div>
  );
}
