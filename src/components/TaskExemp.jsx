import delButton from "../images/button-dell.svg";
import DeleteAlert from "./DeleteAlert";

export default function TaskExemp({title,about,setAlert,index}) {
  function showDeleteAlert(){
    setAlert(<DeleteAlert setAlert={setAlert} index={index}/>)
  }
    return(
        <div >
        <div className="task">
            <div className="text-task"> 
                <h2> {title}</h2> 
                <p> {about}</p>
            </div>
            <div className="delete-button">
                <button onClick={showDeleteAlert} className="button-del"> <img src={delButton} alt=""/></button>
            </div>
        </div>
       {/* <div className="interact-task-buttons"></div>  */}
    </div>
    )
}