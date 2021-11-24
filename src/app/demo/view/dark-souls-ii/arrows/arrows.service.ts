import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/demo/domain/customer';

@Injectable()
export class ArrowService {

    constructor(private http: HttpClient) { }

    getArrowSmall() {
        return this.http.get<any>('assets/demo/data/dark-souls-ii/arrow/arrow-small.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getArrowMedium() {
        return this.http.get<any>('assets/demo/data/dark-souls-ii/arrow/arrow-medium.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getArrowLarge() {
        return this.http.get<any>('assets/demo/data/dark-souls-ii/arrow/arrow-large.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }
}
