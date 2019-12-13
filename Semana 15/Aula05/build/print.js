"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const aux = process.argv[4];
function print() {
    if (aux === "teachers")
        index_1.mainTask.printInstructors();
    else if (aux === "students")
        index_1.mainTask.printStudents();
}
print();
//# sourceMappingURL=print.js.map