import {Observable, Observer} from "rxjs";

export const cart = [
    {pid: 123,price:200000, name: 'Luggage',quantity: 2},
    {pid: 456,price:300000, name: 'Backpack', quantity: 3},
]

// export class SharedData {
//     cartUpdate:Observable<any>;
//     cartObserver:Observer<any>;
//     constructor() {
//         this.cartUpdate = Observable.create((observer:Observer<any>) =>{
//             this.cartObserver = observer
//         })
//     }
//     updateCart(newCart: any) {
//         cart.splice(0, cart.length,...newCart)
//         this.cartObserver.next(cart)
//     }
//
// }