import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }
