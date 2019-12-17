"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const MainTaskManager_1 = require("./MainTaskManager");
const jsonClass = new JSONFileManager_1.JSONFileManager("classes");
const jsonStudents = new JSONFileManager_1.JSONFileManager("students");
const jsonInstructors = new JSONFileManager_1.JSONFileManager("instructors");
exports.mainTask = new MainTaskManager_1.MainTaskManager(jsonClass, jsonInstructors, jsonStudents);
//# sourceMappingURL=index.js.map