import {User} from "./User";
import * as moment from "moment";
import {Class} from "./classes";

export class Student implements User{

    constructor(public name: string,
                public email: string,
                public bornDate: moment.Moment,
                public classes: Class)
    {

    }
}


