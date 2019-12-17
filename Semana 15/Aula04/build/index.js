"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./post");
const error_1 = require("./error");
const JSONFileManager_1 = require("./JSONFileManager");
const jsonError = new JSONFileManager_1.JSONFileManager("error");
const jsonPost = new JSONFileManager_1.JSONFileManager("post");
const logger = new error_1.ErrorLogger(jsonError);
const creator = new post_1.PostCreatorHandler(new error_1.ErrorPrinter(logger), new post_1.NormalPostCreator(jsonPost), new post_1.UpperCasePostCreator(jsonPost), new post_1.LowerCasePostCreator(jsonPost));
creator.execute("", "");
creator.execute("a", "");
creator.execute("", "a");
creator.execute("", "%b");
creator.execute("", "&b");
creator.execute('', "a");
creator.execute("a", "aB");
creator.execute("b", "&aB");
creator.execute("C", "%Aa");
//# sourceMappingURL=index.js.map