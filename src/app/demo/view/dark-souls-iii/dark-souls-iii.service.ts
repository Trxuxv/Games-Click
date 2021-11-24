import { Boss } from '../../domain/boss';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DarkSoulsIIIService {

    constructor(private http: HttpClient) { }

    getBossesSmall() {
        return this.http.get<any>('assets/demo/data/dark-souls-iii/bosses-small.json')
        .toPromise()
        .then(res => res.data as Boss[])
        .then(data => data);
    }

    getBoss() {
        return this.http.get<any>('assets/demo/data/dark-souls-iii/bosses.json')
        .toPromise()
        .then(res => res.data as Boss)
        .then(data => data);
    }

    getBosses() {
        return this.http.get<any>('assets/demo/data/dark-souls-iii/bosses.json')
        .toPromise()
        .then(res => res.data as Boss[])
        .then(data => data);
    }

    getBossesMixed() {
        return this.http.get<any>('assets/demo/data/dark-souls-iii/bosses-mixed.json')
        .toPromise()
        .then(res => res.data as Boss[])
        .then(data => data);
    }

    getBossesWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/dark-souls-iii/bosses-orders-small.json')
        .toPromise()
        .then(res => res.data as Boss[])
        .then(data => data);
    }
}
