import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'League of Legends', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                items: [
                    // {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['']},
                    {label: 'Champions', icon: 'pi pi-fw pi-list', routerLink: ['']},
                ]
            },
            {
                label: 'Dark Souls', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                items: [
                     {label: 'Dark Souls', icon: 'pi pi-fw pi-list', routerLink: ['/dark']},
                     {label: 'Dark Souls II', icon: 'pi pi-fw pi-list', routerLink: ['/dark-souls-ii']},
                     {label: 'Dark Souls III', icon: 'pi pi-fw pi-list', routerLink: ['/dark-souls-iii'], items:[
                        {label: 'Bosses', icon: 'pi pi-fw pi-list', routerLink: ['']},
                     ]},
                ]
            },
        ];
    }
}
