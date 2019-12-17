import * as moment from "moment";
import {ErrorPrinter} from "./error";
import {JSONFileManager} from "./JSONFileManager";

interface PostCreator{
    create(name:string, text:string):void
}

export class Post {
    private datePublish : moment.Moment

    constructor(private name:string, private text: string) {
        this.datePublish = moment()
    }
}

export class NormalPostCreator implements PostCreator{
    constructor(private json: JSONFileManager) {
    }

    public create(name: string, text: string): void {
        const post = new Post(name, text)
        this.json.saveToFile(post)
    }
}

export class UpperCasePostCreator implements PostCreator{
    constructor(private json: JSONFileManager) {
    }

    public create(name: string, text: string): void {
        const post = new Post(name, text.toUpperCase())
        this.json.saveToFile(post)
    }
}

export class LowerCasePostCreator implements PostCreator {
    constructor(private json: JSONFileManager) {
    }

    public create(name: string, text: string): void {
        const post = new Post(name, text.toLowerCase())
        this.json.saveToFile(post)
    }
}


export class PostCreatorHandler {
    constructor( private errorTracker: ErrorPrinter,
                 private normalCreator: NormalPostCreator,
                 private upperCaseCreator: UpperCasePostCreator,
                 private lowerCaseCreator: LowerCasePostCreator) {
    }

    public execute(name: string, text: string): void {
        if (name === "" || text === "")
            this.errorTracker.onError("Error! Please try again.", moment())
        else if (text.indexOf('&') === 0)
            this.upperCaseCreator.create(name,text)
        else if(text.indexOf('%') === 0)
            this.lowerCaseCreator.create(name,text)
        else
            this.normalCreator.create(name,text)
    }
}
