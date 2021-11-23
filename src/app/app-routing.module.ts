import { ListBossesComponent } from './demo/view/darkSouls/list-bosses.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {AppMainComponent} from './app.main.component';
import { ListDemoComponent } from './demo/view/leagueOfLegends/listdemo.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: ListDemoComponent},
                    {path: 'dark', component: ListBossesComponent},
                    {path: 'dark-souls-ii', component: ListBossesComponent},
                ]
            },
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}