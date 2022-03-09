import { ElderRingComponent } from './demo/view/elder-ring/elder-ring.component';
import { HomeComponent } from './demo/home/home.component';
import { DarkSoulsLoreComponent } from './demo/view/dark-souls/dark-souls-lore/dark-souls-lore.component';
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
                    {path: '', component: HomeComponent},
                    {path: 'lol', component: ListDemoComponent},
                    {path: 'dark', component: ListBossesComponent},
                    {path: 'dark-lore', component: DarkSoulsLoreComponent},
                    {path: 'dark-souls-ii-bosses', component: DarkSoulsIIComponent},
                    {path: 'dark-souls-ii-bosses-table', component: DarkSoulsIITableComponent},
                    {path: 'dark-souls-iii-bosses', component: DarkSoulsIIIComponent},
                    {path: 'elder-ring-bosses', component: ElderRingComponent},
                ]
            },
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}