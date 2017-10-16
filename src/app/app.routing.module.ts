import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketKanbanComponent } from './ticket/ticket-kanban/ticket-kanban.component';
import { TicketItemComponent } from './ticket/ticket-item/ticket-item.component';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, 
        children : [
            { path: 'ticket-list', component: TicketListComponent },
            { path: 'ticket-kanban', component: TicketKanbanComponent },
            // { path: 'ticket-details/:ticketId', component: TicketDetailsComponent },
            { path: '', redirectTo: 'ticket-list', pathMatch: "full" }
        ]
    },
    { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }