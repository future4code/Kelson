import {Cashier} from "./cashier";


export class Manager extends Cashier{
    constructor(name: string, sold: number) {
        super(name, sold);
    }

    sayJob(): void {
        console.log("Manager");
    }
}