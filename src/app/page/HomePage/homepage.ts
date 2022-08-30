import {Component} from "@angular/core";
import {HttpParams} from "@angular/common/http";
import {TestApi} from "../../services/testApi";

@Component({
    selector: "homepage",
    templateUrl: "./homepage.html",
    styleUrls: ['./homepage.css']
})

export class Homepage {
    constructor(
        private service: TestApi,
    ){}
    //@ts-ignore
    productList: Array<{
        pid: string;
        name: string;
        gender: string;
        price: number;
        brand: string;
        category: string;
    }> = [];


    ngOnInit(){
        this.getFeatured({category: "LUGGAGE"} as unknown as HttpParams)
        this.getFeatured({category: "BACK PACK"} as unknown as HttpParams)
        this.getFeatured({category: "ACCESSORIES"} as unknown as HttpParams)
        this.getFeatured({category: "BAGS"} as unknown as HttpParams)
            .then(() => console.log(this.productList))
    }

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
    getFeatured(params?:HttpParams){
        const promise =new Promise((resolve: any, reject) => {
            this.service.fetchData("http://localhost:8002/products/featured", params)
                .subscribe(res => {
                    this.productList = [...this.productList, ...res]
                    console.log(res)
                    resolve();
                })
        })
        return promise;
    }
}