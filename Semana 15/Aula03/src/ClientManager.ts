import {Client} from "./client";

class ClientManager {
    private clients: Client[] = []

    addClient(client:Client):void{
        this.clients.push(client)
    }

    getClientsQuantity():number{
        const numberClients: number = this.clients.length
        return numberClients
    }

    printClientBill(): void {
        this.clients.forEach((client:Client) =>
            console.log(`${client.clientNumber} - ${client.clientName}  - ${client.calculateBill()} `))
    }

    calculateAllIncome(): number{
        let income: number = 0
        this.clients.forEach((client:Client) => income += client.calculateBill())
        return income
    }
}
