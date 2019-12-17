import {JSONFileManager} from "./JSONFileManager";
import {MainTaskManager} from "./MainTaskManager";
import moment = require("moment");
import {specialty} from "./instructors";

const jsonClass : JSONFileManager = new JSONFileManager("classes")
const jsonStudents : JSONFileManager = new JSONFileManager("students")
const jsonInstructors : JSONFileManager = new JSONFileManager("instructors")

export const mainTask: MainTaskManager = new MainTaskManager(jsonClass, jsonInstructors, jsonStudents)

