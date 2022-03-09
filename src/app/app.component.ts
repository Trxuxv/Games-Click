import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    theme = 'amber';

    topbarTheme = 'dark';

    menuTheme = 'dark';

    layoutMode = 'dark';

    menuMode = 'horizontal';

    isRTL = false;

    inputStyle = 'outlined';

    ripple: true;

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
