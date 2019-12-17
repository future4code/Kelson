import {Client} from "./client";
import {Trade} from "./trade";

class CommercialClient extends Trade implements Client{
    public clientName: string
    constructor(name: string,cnpj: string, cep: string, public clientNumber: number, public consumedEnergy: number) {
        super(name, cnpj, cep);
        this.clientName = name;
    }

    calculateBill(): number {
        const value: number = 0.7*0.75*this.consumedEnergy
        return value
    }
}