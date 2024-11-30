import { useDispatch } from "react-redux"
import { deleteTask } from "../actions/tasksActions"

export default function DeleteAlert({ setAlert,index }) {
const dispatch = useDispatch()
function deleteTaskHandle(){
    dispatch(deleteTask(index))
    closeAlert();
}
function closeAlert(){
setAlert()
}
    return(
    <div className="del-blur">
    <div className="del-alert-container">
        Delete this task ?
        <div className="del-button-section">
            <button onClick={deleteTaskHandle} id="yes-del-button">Yes</button>
            <button onClick={closeAlert} id="no-del-button">No</button>
        </div>
    </div>
</div>
)
}