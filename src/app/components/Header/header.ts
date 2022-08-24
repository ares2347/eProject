import { Component } from "@angular/core";
import {cart} from "../../services/sharedData";

@Component({
    selector: 'component-header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})

export class HeaderComponent {
    quantity = cart.reduce((pre:number, cur:any) => {
        if (cur.quantity > 0) return (pre + 1)
        else return (pre)
    },0)
}