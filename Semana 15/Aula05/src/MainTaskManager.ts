import {JSONFileManager} from "./JSONFileManager";
import {Class, Mobile, WebFullStack} from "./classes";
import * as moment from "moment";
import {Instructor, specialty} from "./instructors";
import {Student} from "./students";


export class MainTaskManager {

    constructor(public jsonClass: JSONFileManager,
                public jsonInstructors: JSONFileManager,
                public jsonStudents: JSONFileManager)
    {

    }

    public createClass(starDate: moment.Moment,
                       finishDate:moment.Moment,
                       instructors: Instructor[],
                       type:(number | string) ):void
    {
        let classes : Class
        if (typeof type === "number")
            classes = new Mobile(starDate,finishDate,instructors, type)
        else if (typeof type === "string")
            classes = new WebFullStack(starDate,finishDate,instructors, type)
        this.jsonClass.saveToFile(classes)
    }


    public createInstructor(name: string,
                             email: string,
                             bornDate: moment.Moment,
                             specialty: specialty[]): void
    {
        let instructor: Instructor = new Instructor(name, email,bornDate,specialty)
        this.jsonInstructors.saveToFile(instructor)
    }

    public createStudent(name: string,
                         email: string,
                         bornDate: moment.Moment,
                         classes: Class):void
    {
        let student: Student = new Student(name, email,bornDate,classes)
        this.jsonStudents.saveToFile(student)
    }

    public printInstructors (): void{
        const instructors = this.jsonInstructors.getContent()
        instructors.forEach((instructor: Instructor) => {
            console.log(`Nome: ${instructor.name}`)
            console.log(`Email: ${instructor.email}`)
            const age:number = moment().diff(instructor.bornDate,"year")
            console.log(`Idade: ${age}`)
            console.log(`Especialidades: ${instructor.specialty}`)
            console.log("-----")
        })
    }

    public printStudents (): void{
        const students = this.jsonStudents.getContent()
        students.forEach((student: Student) => {
            console.log(`Nome: ${student.name}`)
            console.log(`Email: ${student.email}`)
            const course = typeof student.classes === "string"? "Web Full Stack": "Mobile"
            console.log(`Curso: ${course}`)
            console.log(`Turma: ${student.classes}`)
            const age:number = moment().diff(student.bornDate, "year")
            console.log(`Idade: ${age}`)
            console.log("-----")
        })
    }
}
