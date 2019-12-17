"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Class {
}
exports.Class = Class;
class WebFullStack extends Class {
    constructor(starDate, finishDate, instructors, patron) {
        super();
        this.starDate = starDate;
        this.finishDate = finishDate;
        this.instructors = instructors;
        this.patron = patron;
        this.students = [];
    }
    includeStudent(student) {
        this.students.push((student));
    }
}
exports.WebFullStack = WebFullStack;
class Mobile extends Class {
    constructor(starDate, finishDate, instructors, number) {
        super();
        this.starDate = starDate;
        this.finishDate = finishDate;
        this.instructors = instructors;
        this.number = number;
        this.students = [];
    }
    includeStudent(student) {
        this.students.push((student));
    }
}
exports.Mobile = Mobile;
//# sourceMappingURL=classes.js.map