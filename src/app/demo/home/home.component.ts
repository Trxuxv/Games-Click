import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'home' },
    ]);
  }

  ngOnInit() {
  }

}
