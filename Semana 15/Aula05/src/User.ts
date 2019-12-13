import * as moment from "moment";

export interface User {
    name:string
    email: string
    bornDate: moment.Moment
}