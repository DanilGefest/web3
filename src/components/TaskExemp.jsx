export default function TaskExemp({title,about}) {
    return(
        <div >
        <div className="task">
            <div className="text-task"> 
                <h2> ${title}</h2> 
                <p> ${about}</p>
            </div>
            <div className="delete-button">
                <button className="button-del"> <img src="src/assets/images/button-dell.svg" alt=""/></button>
            </div>
        </div>
        <div className="interact-task-buttons"></div>
    </div>
    )
}