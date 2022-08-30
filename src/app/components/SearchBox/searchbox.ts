import { Component } from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {TestApi} from "../../services/testApi";
import {HttpParams} from "@angular/common/http";

@Component({
    selector: 'component-searchbox',
    templateUrl: './searchbox.html',
    styleUrls: ['./searchbox.css']
})

export class SearchboxComponent {
    search_input: string=""

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
    ) {}

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

    onInput = (event:Event) => {
        const key:string = (event?.target as HTMLInputElement).value;
        this.getData({name: key} as unknown as HttpParams)
            .then(() => console.log(this.productList))
    }

    offFocus = (event: Event) => {
        if(!(event.target as HTMLInputElement).value) this.productList = [];
    }
    clearSearch = () => {
        this.productList=[]
    }
}