"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userAccount_1 = require("./userAccount");
const jsonFileManager_1 = require("./jsonFileManager");
class Bank {
    static createAccount(name, cpf, age) {
        const account = new userAccount_1.UserAccount(cpf, name, age);
        this.accounts.push(account);
        this.saveAccount();
    }
    static getAllAccounts() {
        const file = Bank.fileManager.getObjectFromJson();
        file.accounts.forEach((account) => {
            this.createAccount(account.name, account.cpf, account.age);
        });
        return this.accounts;
    }
    static getAccountByCpf(cpf) {
        let selectAccount;
        this.accounts.forEach((account) => {
            if (account.cpf === cpf)
                selectAccount = account;
        });
        return selectAccount;
    }
    static saveAccount() {
        Bank.fileManager.writeObjectToFile(this.accounts);
    }
}
exports.Bank = Bank;
Bank.accounts = [];
Bank.fileManager = new jsonFileManager_1.JSONFileManager("bank.JSON");
//# sourceMappingURL=bank.js.map