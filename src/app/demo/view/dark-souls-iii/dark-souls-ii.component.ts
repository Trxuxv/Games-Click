import { DarkSoulsIIService } from './dark-souls-ii.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { Boss } from '../../domain/boss';

@Component({
    templateUrl: './dark-souls-ii.component.html',
    styleUrls: ['.//dark-souls-ii.scss']
})
export class DarkSoulsIIComponent implements OnInit {

    bosses: Boss[];

    boss: Boss;

    productDialog: boolean;

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    sourceCities: any[];

    targetCities: any[];

    orderCities: any[];

    constructor(private darkSoulsIIService: DarkSoulsIIService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'dark souls ii' },
            { label: 'Bosses', routerLink: ['/uikit/list'] }
        ]);
    }

    ngOnInit() {
        this.darkSoulsIIService.getBosses().then(data => this.bosses = data);

        this.sortOptions = [
            { label: 'Dificulty High to Low', value: '!inventoryStatus' },
            { label: 'Dificulty Low to High', value: 'inventoryStatus' }
        ];
    }

    editProduct(boss: Boss) {
        this.boss = {...boss};
        this.productDialog = true;
    }

    hideDialog() {
        this.productDialog = false;
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}
