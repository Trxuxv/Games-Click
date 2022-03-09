import { Component, OnInit } from '@angular/core';
import { AppComponent } from './app.component';

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

    constructor(public app: AppComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home', routerLink: [''], 
            },
            {
                label: 'Dark Souls', routerLink: ['/uikit'],
                items: [
                    {
                        label: 'Dark Souls', icon: 'pi pi-fw pi-list', items: [
                            { label: 'Bosses', icon: 'pi pi-angle-right', routerLink: ['/dark'] },
                            { label: 'Lore', icon: 'pi pi-angle-right', routerLink: ['/dark-lore'] },
                        ]
                    },

                    {
                        label: 'Dark Souls II', icon: 'pi pi-fw pi-list', routerLink: ['/dark-souls-ii'], items: [
                            { label: 'Bosses', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-ii-bosses'] },
                            { label: 'Items', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-ii-bosses-table'] },
                            { label: 'Lore', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-ii-lore'] },
                        ]
                    },

                    {
                        label: 'Dark Souls III', icon: 'pi pi-fw pi-list', routerLink: ['/dark-souls-iii'], items: [
                            { label: 'Bosses', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-iii-bosses'] },
                            { label: 'Lore', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-iii-lore'] },
                        ]
                    }
                ]
            },

            {
                label: 'League of Legends',
                items: [
                    // {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['']},
                    { label: 'Champions', icon: 'pi pi-fw pi-list', routerLink: ['lol'] },
                    {
                        label: 'Cities', icon: 'pi pi-fw pi-map-marker', items: [
                            { label: 'Ionia', icon: 'pi pi-angle-right', routerLink: ['/ionia'] },
                            { label: 'Runeterra', icon: 'pi pi-angle-right', routerLink: ['/runeterra'] },
                            { label: 'Shurima', icon: 'pi pi-angle-right', routerLink: ['/shurima'] },
                            { label: 'Freljord', icon: 'pi pi-angle-right', routerLink: ['/freljord'] },
                            { label: 'Targon', icon: 'pi pi-angle-right', routerLink: ['/targon'] },
                            { label: 'Noxus', icon: 'pi pi-angle-right', routerLink: ['/noxus'] },
                        ]
                    },
                ]
            },

            {
                label: 'Bloodborne', routerLink: ['/uikit'],
                items: [
                    { label: 'Bosses', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-iii-bosses'] },
                    { label: 'Lore', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-iii-lore'] },
                ]
            },
            {
                label: 'Cuphead', routerLink: ['/uikit'],
                items: [
                    { label: 'Bosses', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-iii-bosses'] },
                    { label: 'Lore', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-iii-lore'] },
                ]
            },
            {
                label: 'Elder Ring', routerLink: ['/uikit'],
                items: [
                    { label: 'Bosses', icon: 'pi pi-angle-right', routerLink: ['/elder-ring-bosses'] },
                    { label: 'Lore', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-iii-lore'] },
                ]
            },
            {
                label: 'Sekiro', routerLink: ['/uikit'],
                items: [
                    { label: 'Bosses', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-iii-bosses'] },
                    { label: 'Lore', icon: 'pi pi-angle-right', routerLink: ['/dark-souls-iii-lore'] },
                ]
            },
        ];
    }
}
