import {Residence} from "./residence";
import {Client} from "./client";

class ResidentialClient extends Residence implements Client{
    public clientName: string
    constructor(name: string,cpf: string, cep: string, public clientNumber: number, public consumedEnergy: number) {
        super(name, cpf, cep);
        this.clientName = name;
    }

    calculateBill(): number {
        const value: number = 0.75*this.consumedEnergy
        return value
    }
}