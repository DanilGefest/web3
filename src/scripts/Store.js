import { createStore } from "redux";

import { getTaskList } from "./TaskStorageController";
import rootReducer from "../redusers/index";
const persistedState = getTaskList() || [];

const store = createStore(rootReducer, { tasks: persistedState });

export default store;
