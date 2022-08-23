import { Component } from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
    selector: 'component-searchbox',
    templateUrl: './searchbox.html',
    styleUrls: ['./searchbox.css']
})

export class SearchboxComponent {
    search_input: string=""

    setValue(event: Event){


    }
}