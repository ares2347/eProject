import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TestApi {
    constructor(private httpClient: HttpClient) {
    }

    fetchData(url:string, params?: HttpParams) {
        return this.httpClient.get<any>(url,{
            params: params
        })
    }
}