import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../domain/product';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/league-of-legends/products-small.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

    getProduct() {
        return this.http.get<any>('assets/demo/data/league-of-legends/products.json')
        .toPromise()
        .then(res => res.data as Product)
        .then(data => data);
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/league-of-legends/products.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/league-of-legends/products-mixed.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/league-of-legends/products-orders-small.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }
}
