import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// each service has to roles 
// to provide stream of data 
// and stream ofoperations on that stream
@Injectable()
export class BrandService 
{
    limit = 20;
    offset = 1;
    mobileUrl = 'https://bestoffer1.herokuapp.com/api/mobile';

    constructor(private http: Http) {}

    getBrands()
    {
        const headers = new Headers();

        headers.append('Content-Type', 'application/json');
        
        // return this.http.post(this.mobileUrl, JSON.stringify({limit: 20, offset:0}), {headers: headers})
        return this.http.get(this.mobileUrl, {headers: headers})
            //just a form of trnasformation instead of convert resuult to json in subscriper
            .map(response => response.json());
    }
}