import * as moment from "moment";
import {Instructor} from "./instructors";
import {Student} from "./students";

export abstract class Class {
    abstract starDate: moment.Moment
    abstract finishDate:moment.Moment
    abstract instructors: Instructor[]
    abstract students: Student[]

    abstract includeStudent(student:Student):void
}

export class WebFullStack extends Class{
    public students: Student[]

    constructor(public starDate: moment.Moment,
                public finishDate:moment.Moment,
                public instructors: Instructor[],
                public patron: string
                )
    {
        super()
        this.students = []
    }

    public includeStudent(student:Student):void{
        this.students.push((student))
    }
}

export class Mobile extends Class{
    public students: Student[]

    constructor(public starDate: moment.Moment,
                public finishDate:moment.Moment,
                public instructors: Instructor[],
                public number: number)
    {
        super()
        this.students = []
    }

    public includeStudent(student:Student):void{
        this.students.push((student))
    }
}