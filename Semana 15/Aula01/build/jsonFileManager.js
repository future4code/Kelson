"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    getObjectFromJson() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
    writeObjectToFile(object) {
        fs.writeFileSync(this.fileName, JSON.stringify(object, null, 2));
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=jsonFileManager.js.map