import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {TestApi} from "./services/testApi";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    //@ts-ignore
    data: string;
    constructor(private service: TestApi) {
    }

    // ngOnInit(){
    //     this.getData();}

    // getData(){
    //     this.service.fetchData('')
    //         .subscribe( value => {
    //             this.data=JSON.stringify(value)
    //         })
    // }
}