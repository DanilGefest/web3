import { useState } from "react";
import Tasklist from "./components/Tasklist.jSX";
import { Provider } from "react-redux";
import store from "./store/Store";
import AddTask from "./components/AddTask";
import { Helmet } from "react-helmet";
import favcon from "../public/favcon.ico";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [alert, setAlert] = useState();
  return (
    <>
      {/*<Helmet>  <link rel="icon" type="image/x-icon" href = {favcon} /> 
      document.title = 'Todo react'</Helmet>*/}

      <Provider store={store}>
        {alert}
        <AddTask />
        <DndProvider backend={HTML5Backend}>
          <Tasklist setAlert={setAlert} />
        </DndProvider>
      </Provider>
    </>
  );
}

export default App;
