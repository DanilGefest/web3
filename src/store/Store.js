import { createStore } from "redux";

import { getTaskList } from "../scripts/TaskStorageController";
import rootReducer from "./index";
const persistedState = getTaskList() || [];

const store = createStore(rootReducer, { tasks: persistedState });

export default store;
