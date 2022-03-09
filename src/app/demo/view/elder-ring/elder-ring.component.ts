import { ElderRingService } from './elder-ring.service';
import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { SelectItem } from 'primeng/api';
import { Boss } from '../../domain/boss';

@Component({
  selector: 'app-elder-ring',
  templateUrl: './elder-ring.component.html',
  styleUrls: ['./elder-ring.component.scss']
})
export class ElderRingComponent implements OnInit {

  bosses: Boss[];

  boss: Boss;

  productDialog: boolean;

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sourceCities: any[];

  targetCities: any[];

  orderCities: any[];

  constructor(private service: ElderRingService, private breadcrumbService: AppBreadcrumbService) {
      this.breadcrumbService.setItems([
          { label: 'dark souls' },
          { label: 'bosses', routerLink: ['/uikit/list'] }
      ]);
  }

  ngOnInit() {
      this.service.getBosses().then(data => this.bosses = data);

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
