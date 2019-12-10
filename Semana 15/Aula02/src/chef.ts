import {Employee} from "./employee";
import {Dessert} from "./dessert";
import {SaltyDish} from "./saltydish";
import {menu} from "./index";


export class Chef extends Employee {
    constructor(name:string, sold: number) {
        super(name, sold);
    }

    sayJob(): void {
        console.log("Chef")
    }

    removeDishFromMenu (dishName: string): Array<Dessert | SaltyDish>{
        let newmenu: Array<Dessert | SaltyDish> =
            menu.filter((dish:Dessert | SaltyDish) =>
            dish.name !== dishName );
        return newmenu
    }

    addDishToMenu (name: string,
                   price: number,
                   cost: number,
                   ingredients: string[],
                   timeToCook: number,
                   slicesNumber?: number):
                   Array<Dessert | SaltyDish>{
        if (slicesNumber){
            let newDessert = new Dessert(name,
                                         price,
                                         cost,
                                         ingredients,
                                         timeToCook,
                                         slicesNumber);
            menu.push(newDessert);
        }else{
            let newSaltyDish = new SaltyDish(name,
                                             price,
                                             cost,
                                             ingredients,
                                             timeToCook);
            menu.push(newSaltyDish)
        }
        return menu
    }
}