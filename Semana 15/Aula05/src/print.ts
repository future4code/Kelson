import {mainTask} from "./index";

const aux = process.argv[4]

function print() {
    if (aux=== "teachers")
        mainTask.printInstructors()
    else if (aux === "students")
        mainTask.printStudents()
}
print()