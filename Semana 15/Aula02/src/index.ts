import {Dessert} from "./dessert";
import {SaltyDish} from "./saltydish";
import {Cashier} from "./cashier";
import {Manager} from "./manager";
import {Chef} from "./chef";

 export let menu: Array<Dessert | SaltyDish> =[];

const feijoada = new SaltyDish("feijoada" ,100, 20, ["leite condensado"], 100);
console.log(feijoada.name);

const brigadeiro = new Dessert("brigadeiro",100, 20, ["leite condensado"], 100, 10);
console.log(brigadeiro.name);

menu.push(brigadeiro, feijoada);
console.log(menu);

const cashier = new Cashier("João Golias", 10000);

cashier.sayJob();
console.log(cashier.calculateBill([feijoada,brigadeiro,brigadeiro]));

const manager = new Manager("Luciano", 30000);

manager.sayJob();
console.log(manager.calculateBill([feijoada,brigadeiro,brigadeiro,feijoada]));

const chef = new Chef("Arthur", 30000);

chef.sayJob();

menu = chef.removeDishFromMenu("feijoada");
console.log(menu);

chef.addDishToMenu("brigadeiro",100, 20, ["leite condensado"], 100, 10);
console.log(menu);