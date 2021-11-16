import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {AppMainComponent} from './app.main.component';
import {ListDemoComponent} from './demo/view/listdemo.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: ListDemoComponent},
                    // {path: 'uikit/list', component: },
                ]
            },
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}