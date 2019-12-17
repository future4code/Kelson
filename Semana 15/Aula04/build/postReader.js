"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostReaderImp {
    constructor(json) {
        this.json = json;
    }
    readPosts() {
        return this.json.getContent();
    }
}
exports.PostReaderImp = PostReaderImp;
//# sourceMappingURL=postReader.js.map