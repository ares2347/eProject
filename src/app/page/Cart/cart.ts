import {Component, Output} from "@angular/core";
import {cart, SharedDataService} from "../../services/sharedData";

@Component({
    selector: 'cart-page',
    templateUrl: './cart.html',
    styleUrls: ['./cart.css']
})

export class Cart {
    cart =[...cart]
    coupon = 'IMRICH'
    appliedCoupon = ''
    subtotal= cart.reduce((pre:any, cur:any) => {
        return(pre + cur.quantity*cur.price)
    },0);
    discount = 0;
    total = this.subtotal - this.discount


    recalculate = () => {
        this.subtotal= cart.reduce((pre:any, cur:any) => {
            return(pre + cur.quantity*cur.price)
        },0);
        this.total = this.subtotal - this.discount
    }
    onChange = (event:Event) => {
        const idx = (event.target as HTMLInputElement).id as unknown as number
        cart[idx].quantity = (event.target as HTMLInputElement).value as unknown as number;
        this.recalculate()
    }

    onCouponChange= (event:Event) => {
        this.appliedCoupon=(event.target as HTMLInputElement).value.toUpperCase()
    }

    onCouponApply = () => {
        if (this.appliedCoupon == this.coupon) this.discount=200000
        this.recalculate()
    }


}