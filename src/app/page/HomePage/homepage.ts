import {Component} from "@angular/core";

@Component({
    selector: "homepage",
    templateUrl: "./homepage.html",
    styleUrls: ['./homepage.css']
})

export class Homepage {
    bestSeller: object[] = [
        {
            img: 'src/assets/carousel.webp',
            name: 'Luggage',
            rating: 3,
            price: 20
        },{
            img: 'src/assets/carousel.webp',
            name: 'Luggage',
            rating: 3,
            price: 20
        },{
            img: 'src/assets/carousel.webp',
            name: 'Luggage',
            rating: 3,
            price: 20
        },{
            img: 'src/assets/carousel.webp',
            name: 'Luggage',
            rating: 3,
            price: 20
        }
    ]
}