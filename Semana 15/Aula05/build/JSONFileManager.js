"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = `${fileName}.txt`;
    }
    saveToFile(objectToSave) {
        let data = [...this.getContent()];
        data.push(objectToSave);
        fs.writeFileSync(this.fileName, JSON.stringify(data).toString());
    }
    getContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map