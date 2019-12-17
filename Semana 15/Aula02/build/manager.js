"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashier_1 = require("./cashier");
class Manager extends cashier_1.Cashier {
    constructor(name, sold) {
        super(name, sold);
    }
    sayJob() {
        console.log("Manager");
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map