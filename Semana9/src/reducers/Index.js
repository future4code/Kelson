import { combineReducers } from "redux";
import Tasks from "./Reducer_Tasks";

const rootReducer = combineReducers({
    tasks: Tasks
});

export default rootReducer;