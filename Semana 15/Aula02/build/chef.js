"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
const index_1 = require("./index");
class Chef extends employee_1.Employee {
    constructor(name, sold) {
        super(name, sold);
    }
    sayJob() {
        console.log("Chef");
    }
    removeDishFromMenu(dishName) {
        let newmenu = index_1.menu.filter((dish) => dish.name !== dishName);
        return newmenu;
    }
    addDishToMenu(name, price, cost, ingredients, timeToCook, slicesNumber) {
        if (slicesNumber) {
            let newDessert = new dessert_1.Dessert(name, price, cost, ingredients, timeToCook, slicesNumber);
            index_1.menu.push(newDessert);
        }
        else {
            let newSaltyDish = new saltydish_1.SaltyDish(name, price, cost, ingredients, timeToCook);
            index_1.menu.push(newSaltyDish);
        }
        return index_1.menu;
    }
}
exports.Chef = Chef;
//# sourceMappingURL=chef.js.map