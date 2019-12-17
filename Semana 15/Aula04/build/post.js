"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Post {
    constructor(name, text) {
        this.name = name;
        this.text = text;
        this.datePublish = moment();
    }
}
exports.Post = Post;
class NormalPostCreator {
    constructor(json) {
        this.json = json;
    }
    create(name, text) {
        const post = new Post(name, text);
        this.json.saveToFile(post);
    }
}
exports.NormalPostCreator = NormalPostCreator;
class UpperCasePostCreator {
    constructor(json) {
        this.json = json;
    }
    create(name, text) {
        const post = new Post(name, text.toUpperCase());
        this.json.saveToFile(post);
    }
}
exports.UpperCasePostCreator = UpperCasePostCreator;
class LowerCasePostCreator {
    constructor(json) {
        this.json = json;
    }
    create(name, text) {
        const post = new Post(name, text.toLowerCase());
        this.json.saveToFile(post);
    }
}
exports.LowerCasePostCreator = LowerCasePostCreator;
class PostCreatorHandler {
    constructor(errorTracker, normalCreator, upperCaseCreator, lowerCaseCreator) {
        this.errorTracker = errorTracker;
        this.normalCreator = normalCreator;
        this.upperCaseCreator = upperCaseCreator;
        this.lowerCaseCreator = lowerCaseCreator;
    }
    execute(name, text) {
        if (name === "" || text === "")
            this.errorTracker.onError("Error! Please try again.", moment());
        else if (text.indexOf('&') === 0)
            this.upperCaseCreator.create(name, text);
        else if (text.indexOf('%') === 0)
            this.lowerCaseCreator.create(name, text);
        else
            this.normalCreator.create(name, text);
    }
}
exports.PostCreatorHandler = PostCreatorHandler;
//# sourceMappingURL=post.js.map