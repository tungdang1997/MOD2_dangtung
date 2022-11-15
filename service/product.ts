import {Product} from "../model";
import {Worker} from "../model";
import {Engineer} from "../model";
import {Staff} from "../model";
import {IManagement} from "./IManagement";

export class ProductMana implements IManagement<Product>{
    public productList: Product[] = [];

    add(t: Product): void {
        this.productList.push(t)
    }

    findAll(): Product[] {
        return this.productList
    }

    // @ts-ignore
    findByName(name: string): Product|string{
        for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].name === name){
                return this.productList[i];
            }
        }
        return 'Not';

    }

    displayCadres(): void {
    }
}