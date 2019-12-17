"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const moment = require("moment");
const instructors_1 = require("./instructors");
const students_1 = require("./students");
class MainTaskManager {
    constructor(jsonClass, jsonInstructors, jsonStudents) {
        this.jsonClass = jsonClass;
        this.jsonInstructors = jsonInstructors;
        this.jsonStudents = jsonStudents;
    }
    createClass(starDate, finishDate, instructors, type) {
        let classes;
        if (typeof type === "number")
            classes = new classes_1.Mobile(starDate, finishDate, instructors, type);
        else if (typeof type === "string")
            classes = new classes_1.WebFullStack(starDate, finishDate, instructors, type);
        this.jsonClass.saveToFile(classes);
    }
    createInstructor(name, email, bornDate, specialty) {
        let instructor = new instructors_1.Instructor(name, email, bornDate, specialty);
        this.jsonInstructors.saveToFile(instructor);
    }
    createStudent(name, email, bornDate, classes) {
        let student = new students_1.Student(name, email, bornDate, classes);
        this.jsonStudents.saveToFile(student);
    }
    printInstructors() {
        const instructors = this.jsonInstructors.getContent();
        instructors.forEach((instructor) => {
            console.log(`Nome: ${instructor.name}`);
            console.log(`Email: ${instructor.email}`);
            const age = moment().diff(instructor.bornDate, "year");
            console.log(`Idade: ${age}`);
            console.log(`Especialidades: ${instructor.specialty}`);
            console.log("-----");
        });
    }
    printStudents() {
        const students = this.jsonStudents.getContent();
        students.forEach((student) => {
            console.log(`Nome: ${student.name}`);
            console.log(`Email: ${student.email}`);
            const course = typeof student.classes === "string" ? "Web Full Stack" : "Mobile";
            console.log(`Curso: ${course}`);
            console.log(`Turma: ${student.classes}`);
            const age = moment().diff(student.bornDate, "year");
            console.log(`Idade: ${age}`);
            console.log("-----");
        });
    }
}
exports.MainTaskManager = MainTaskManager;
//# sourceMappingURL=MainTaskManager.js.map