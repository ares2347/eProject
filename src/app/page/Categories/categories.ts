import {Component} from "@angular/core";
import {TestApi} from "../../services/testApi";
import {HttpParams} from "@angular/common/http";
import {Router, ActivatedRoute} from "@angular/router";
import {SharedDataService} from "../../services/sharedData";

@Component({
    selector: "categories",
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
    //@ts-ignore
    category: any;

    constructor(
        private service: TestApi,
        private _route: ActivatedRoute,
        private _router: Router
        ){}

    ngOnInit(){
        this.getData();
        this.category = this._route.snapshot.paramMap.get('category') as any;
        switch (this.category){
            case 'luggage':{this.filter.category='LUGGAGE'; break}
            case 'backpack':{this.filter.category='BACK PACK'; break}
            case 'bags':{this.filter.category='BAGS'; break}
            case 'accessories':{this.filter.category='ACCESSORIES'; break}
        }
        const categoriesList = document.querySelectorAll<HTMLDivElement>(".category-select")
        categoriesList.forEach(item => {if (item.innerText === this.filter.category) item.classList.add('selected')} )
        this.onFilterChange()
    }

    getData(params?:HttpParams){
        const promise =new Promise((resolve: any, reject) => {
            this.service.fetchData("http://localhost:8002/categories/get", params)
                .subscribe(res => {
                    this.productList = res
                    resolve();
                })
        })
        return promise;
    }

    filter = {
        category: '',
        brand:'',
        gender:'',
        price:''
    };


    onFilterChange = (event?:Event) => {
        const key:string = (event?.target as HTMLInputElement).name;
        (key==='brand')? this.filter.brand=(event?.target as HTMLInputElement).value: '';
        (key==='gender')? this.filter.gender=(event?.target as HTMLInputElement).value: '';
        (key==='price')? this.filter.price=(event?.target as HTMLInputElement).value: '';
        console.log((event?.target as HTMLSelectElement).selectedIndex)
        this.getData(this.filter as unknown as HttpParams)
    }


    changeCategories = (event:Event) => {
        this.filter.category = (event.target as HTMLElement).innerText;
        (event.target as HTMLElement).parentElement?.querySelector(".selected")?.classList.remove('selected');
        (event.target as HTMLElement).classList.add('selected');
        // this._router.navigate([],{
        //     relativeTo: this._route,
        //     queryParams: {
        //         category: this.filter.category
        //     },
        //     queryParamsHandling: 'merge',
        //     skipLocationChange: true
        // })
    }
}