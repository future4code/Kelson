import {Employee} from "./employee";
import {Dessert} from "./dessert";
import {SaltyDish} from "./saltydish";


export class Cashier extends Employee {
    constructor(name:string, sold: number) {
        super(name, sold);
    }

    sayJob(): void {
        console.log("Cashier")
    }

    calculateBill(bill: Array<Dessert | SaltyDish>): number{
        let valueBill: number = 0
        bill.forEach((dish: Dessert | SaltyDish)  => valueBill += dish.price)
        return valueBill
    }

}