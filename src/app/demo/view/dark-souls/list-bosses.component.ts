import { BossService } from './dark-souls.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { Boss } from '../../domain/boss';

@Component({
    templateUrl: './list-bosses.html',
    styleUrls: ['./list-bosses.scss']
})
export class ListBossesComponent implements OnInit {

    bosses: Boss[];

    boss: Boss;

    productDialog: boolean;

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    sourceCities: any[];

    targetCities: any[];

    orderCities: any[];

    constructor(private bossService: BossService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'dark souls' },
            { label: 'bosses', routerLink: ['/uikit/list'] }
        ]);
    }

    ngOnInit() {
        this.bossService.getBosses().then(data => this.bosses = data);

        this.sortOptions = [
            { label: 'Dificuldade maior para menor', value: '!inventoryStatus' },
            { label: 'Dificuldade menor para maior', value: 'inventoryStatus' }
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
