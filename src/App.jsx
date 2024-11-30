import { useState } from "react";
import Tasklist from "./components/Tasklist.jSX";
import { Provider } from "react-redux";
import store from "./scripts/Store";
import AddTask from "./components/AddTask";
function App() {
  return (
    <>
      <Provider store={store}>
        <AddTask />
        <Tasklist />
      </Provider>
    </>
  );
}

export default App;
/* <div className = "form-container">
      <div className="form-inputs"> 
            <input id="input-title" type="text" placeholder="Title..."> </input>
            <input id="input-about" type="text" placeholder="About..."></input>
            </div>
            <div class="button-add-task-container">
            <button id="add-task-button"> <img src="src/assets/images/plus-button.svg" alt="">  
            </img> </button>
        </div>
      </div> */
