import { Component, OnInit } from '@angular/core';
import { BrandService }  from '../services/brand.service';

@Component({
    selector: 'app-body',
    templateUrl: './app-content.component.html'
})
export class AppContentComponent implements OnInit{
    
    mobiles : any;

    constructor(
        private api: BrandService
    ) { }

    ngOnInit() {
        this.makeRequest();
    }

    makeRequest() {
        this.api.getBrands().subscribe(data => {
            this.mobiles = data
        });
    }
}