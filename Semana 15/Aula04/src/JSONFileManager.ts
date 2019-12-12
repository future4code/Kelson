import * as fs from "fs";


export class JSONFileManager{
    fileName: string
    constructor(fileName: string) {
        this.fileName = `${fileName}.json`
    }

    saveToFile(objectToSave: object) {
        let data = [...this.getContent()]
        data.push(objectToSave)
        fs.writeFileSync(this.fileName, JSON.stringify(data, null, 2))
    }

    getContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString())
    }
}
