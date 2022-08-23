import {Component} from "@angular/core";
import {TestApi} from "../../services/testApi";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
    selector: "component-categories",
    templateUrl: "./categories.html",
    styleUrls: ['./categories.css']
})

export class Categories {
    //@ts-ignore
    productList: Array<{
        pid: string;
        name: string;
        gender: string;
        price: number;
        brand: string;
    }>;
    constructor(
        private service: TestApi,
        private _route: ActivatedRoute,
        private _router: Router
    ){
    }

    selected:string = ''

    ngOnInit(){
        this.getData();
        this.selected=this._route.snapshot.queryParams["category"]
    }

    getData(params?:HttpParams){
        const promise =new Promise((resolve: any, reject) => {
            this.service.fetchData("http://localhost:8002/product/get", params)
                .subscribe(res => {
                    this.productList = res
                    resolve();
                })
        })
        return promise;
    }

    filter = {
        brand:'',
        gender:'',
        price:''
    };

    onFilterChange = (event:Event) => {
        const key:string = (event.target as HTMLInputElement).name;
        (key==='brand')? this.filter.brand=(event.target as HTMLInputElement).value: '';
        (key==='gender')? this.filter.gender=(event.target as HTMLInputElement).value: '';
        (key==='price')? this.filter.price=(event.target as HTMLInputElement).value: '';
        console.log((event.target as HTMLSelectElement).selectedIndex)
        this.getData(this.filter as unknown as HttpParams)
            .then(() =>
                console.log(this.productList)
            )
        // const data = this.response
        // this.productsList.splice(0, this.productsList.length,...data)
        console.log(this.filter)
    }


    changeCategories = (event:Event) => {
        this.selected = (event.target as HTMLElement).innerText;
        (event.target as HTMLElement).parentElement?.querySelector(".selected")?.classList.remove('selected');
        (event.target as HTMLElement).classList.add('selected');
        this._router.navigate([],{
            relativeTo: this._route,
            queryParams: {
                category: this.selected
            },
            queryParamsHandling: 'merge',
            skipLocationChange: true
        })
    }
}