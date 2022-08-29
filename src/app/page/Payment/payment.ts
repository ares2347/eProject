import {Component} from "@angular/core";

@Component({
    selector: "payment-page",
    templateUrl: "./payment.html",
    styleUrls: ['./payment.css']
})

export class Payment {
    month =Array.from({length: 12}, Number.call, (i:number) => i+1)
    year =Array.from({length: 50}, Number.call, (i:number) => new Date().getFullYear()+i*1)

    changeMethod = (event:Event) => {
        document.querySelector(".selected")?.classList.remove('selected');
        (event.target as HTMLElement).tagName == 'IMG'? (event.target as HTMLElement).parentElement?.classList.add('selected'): (event.target as HTMLElement).classList.add('selected');
    }
}