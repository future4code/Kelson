"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Cashier extends employee_1.Employee {
    constructor(name, sold) {
        super(name, sold);
    }
    sayJob() {
        console.log("Cashier");
    }
    calculateBill(bill) {
        let valueBill = 0;
        bill.forEach((dish) => valueBill += dish.price);
        return valueBill;
    }
}
exports.Cashier = Cashier;
//# sourceMappingURL=cashier.js.map