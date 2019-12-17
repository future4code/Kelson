import {Client} from "./client";
import {Industry} from "./industry";

class IndustrialClient extends Industry implements Client{
    public clientName: string
    constructor(name: string,industryNumber: string, cep: string, public clientNumber: number, public consumedEnergy: number) {
        super(name, industryNumber, cep);
        this.clientName = name;
    }

    calculateBill(): number {
        const value: number = (0.6*0.75*this.consumedEnergy) + 10000
        return value
    }
}