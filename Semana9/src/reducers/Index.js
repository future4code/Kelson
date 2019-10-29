import { combineReducers } from "redux";
import Tasks from "./Reducer_Tasks";

const rootReducer = combineReducers({
    task: Tasks
});

export default rootReducer;