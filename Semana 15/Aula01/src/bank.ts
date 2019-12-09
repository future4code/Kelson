import {UserAccount} from "./userAccount";
import {JSONFileManager} from "./jsonFileManager";

export class Bank {
    private static accounts: UserAccount[];
    private static fileManager: JSONFileManager = new JSONFileManager("bank.JSON")

    static createAccount(name: string, cpf: string, age: number) : void{
        const account: UserAccount = new UserAccount(cpf, name, age);
        this.accounts.push(account);
        this.saveAccount();
    }

    static getAllAccounts(): UserAccount[] {
        const file = Bank.fileManager.getObjectFromJson();
        file.accounts.forEach((account: any) => {
            this.createAccount(account.name, account.cpf, account.age)
        });
        return this.accounts;
    }

    static getAccountByCpf (cpf: string): UserAccount {
        let selectAccount;
        this.accounts.forEach((account: UserAccount) => {
            if (account.cpf === cpf)
                selectAccount = account;
        });
        return selectAccount;
    }

    private static saveAccount (): void{
        Bank.fileManager.writeObjectToFile(this.accounts);
    }
}