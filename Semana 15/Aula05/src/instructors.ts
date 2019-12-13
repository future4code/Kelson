import {User} from "./User";
import * as moment from "moment";

export enum specialty{
    "HTML" = "HTML",
    "CSS" = "CSS",
    "JS" = "JS",
    "React" = "React",
    "Redux" = "Redux",
    "Back" = "Back",
    "POO" = "POO"
}

export class Instructor implements User{
    constructor(public name: string,
                public email: string,
                public bornDate: moment.Moment,
                public specialty: specialty[])
    {

    }
}
