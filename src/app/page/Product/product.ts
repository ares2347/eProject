import { Component } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpParams} from "@angular/common/http";
import {TestApi} from "../../services/testApi";

@Component({
    selector: 'product-page',
    templateUrl: './product.html',
    styleUrls: ['./product.css']
})

export class Product {
    constructor(
        private service: TestApi,
        private _route: ActivatedRoute
    ){}

    //@ts-ignore
    pid: string;

    //@ts-ignore
    post:{
        postid: string;
        content: string;
        description: string;
        pid: string
    }
    //@ts-ignore
    product: {
        pid: string;
        name: string;
        gender: string;
        price: number;
        brand: string;
        category: string;
    }

    ngOnInit(){
        this.pid = this._route.snapshot.paramMap.get('pid') as string
        this.getData({pid: this.pid} as unknown as HttpParams)
            .then(() => {
                const description = document.getElementById('post-description')
                const content = document.getElementById('post-content')
                if (description) {description.innerHTML = this.post.description}
                if (content) {content.innerHTML = this.post.content}
            })
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        const tabs = $$('.product-content-right-bottom-header-item');
        const panes = $$('.product-content-right-bottom-content');

        const tabActive = $('.product-content-right-bottom-header-item.active') as HTMLDivElement;
        const line = $('.product-content-right-bottom-header .line') as HTMLDivElement;
        const bigImg =$('.product-content-left-big-img img') as HTMLImageElement;
        console.log(bigImg)
        const smallImg = $$('.product-content-left-small-img img');

        smallImg.forEach(function(imgItem,X){
            imgItem.addEventListener('click',function(){
                if (bigImg) bigImg.src = (imgItem as HTMLImageElement).src;
            })
        })

        line.style.left = tabActive.offsetLeft + 'px';
        line.style.width = tabActive.offsetWidth + 'px';

        tabs.forEach((tab: any,index) => {
            const pane = panes[index];
            tab.onclick = function(){
                $('.product-content-right-bottom-header-item.active')?.classList.remove('active');
                $('.product-content-right-bottom-content.active')?.classList.remove('active');

                line.style.left = this.offsetLeft + 'px';
                line.style.width = this.offsetWidth + 'px';

                this.classList.add('active');
                pane.classList.add('active');
            }
        });
    }

    getData(params?:HttpParams){
        const promise =new Promise((resolve: any, reject) => {
            this.service.fetchData("http://localhost:8002/products/get", params)
                .subscribe(res => {
                    console.log(res)
                    this.post=res[0][0]
                    this.product=res[1][0]
                    resolve();
                })
        })
        return promise;
    }
}