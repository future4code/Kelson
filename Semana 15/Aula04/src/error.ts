import * as moment from "moment";
import {JSONFileManager} from "./JSONFileManager";

class Error {
    constructor(public message: string, public date : moment.Moment) {
    }
}


interface ErrorTracker {
    onError(message: string, date: moment.Moment): void
}

export class ErrorPrinter implements ErrorTracker{
    constructor(private logger: ErrorLogger){

    }
    onError(message: string, date: moment.Moment): void{
        const error: Error = new Error(message, date)
        console.log(`${error.message} - ${error.date}` )
        this.logger.onError(message, date)

    }
}

export class ErrorLogger implements ErrorTracker{
    constructor(private json: JSONFileManager){

    }
    onError(message: string, date: moment.Moment): void{
        const error: Error = new Error(message, date)
        this.json.saveToFile(error)
    }
}