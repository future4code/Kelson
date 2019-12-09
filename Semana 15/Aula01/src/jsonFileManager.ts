import * as fs from "fs";

export class JSONFileManager {
    fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }


    getObjectFromJson(): object{
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }

    writeObjectToFile(object: any ): void {
        fs.writeFileSync(this.fileName, JSON.stringify(object, null, 2));
    }
}