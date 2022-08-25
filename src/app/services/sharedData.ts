import {Observable, Observer, Subject} from "rxjs";
import {Injectable} from "@angular/core";

export const cart = [
    {pid: 123,price:200000, name: 'Luggage',quantity: 2},
    {pid: 124,price:300000, name: 'Backpack', quantity: 3},
]

@Injectable()
export class SharedDataService {
    execChange: Subject<any> = new Subject<any>();

    constructor() {}

    cartItemChange(data: any){
        this.execChange.next(data)
    }
}