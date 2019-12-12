"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Error {
    constructor(message, date) {
        this.message = message;
        this.date = date;
    }
}
class ErrorPrinter {
    constructor(logger) {
        this.logger = logger;
    }
    onError(message, date) {
        const error = new Error(message, date);
        console.log(`${error.message} - ${error.date}`);
        this.logger.onError(message, date);
    }
}
exports.ErrorPrinter = ErrorPrinter;
class ErrorLogger {
    constructor(json) {
        this.json = json;
    }
    onError(message, date) {
        const error = new Error(message, date);
        this.json.saveToFile(error);
    }
}
exports.ErrorLogger = ErrorLogger;
//# sourceMappingURL=error.js.map