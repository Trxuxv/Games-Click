import { DarkSoulsIITableComponent } from './demo/view/dark-souls-ii/dark-souls-ii-table/dark-souls-ii-table.component';
import { ListBossesComponent } from './demo/view/dark-souls/list-bosses.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import { DarkSoulsIIComponent } from './demo/view/dark-souls-ii/dark-souls-ii.component';
import { DarkSoulsIIIComponent } from './demo/view/dark-souls-iii/dark-souls-iii.component';
import { ListDemoComponent } from './demo/view/league-of-legends/listdemo.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: ListDemoComponent},
                    {path: 'dark', component: ListBossesComponent},
                    {path: 'dark-souls-ii-bosses', component: DarkSoulsIIComponent},
                    {path: 'dark-souls-ii-bosses-table', component: DarkSoulsIITableComponent},
                    {path: 'dark-souls-iii-bosses', component: DarkSoulsIIIComponent},
                ]
            },
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}