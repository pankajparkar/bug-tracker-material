import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//module imports
import { BugTrackerMaterialModule } from './my-matrial/bug-tracker-matrial.module';
import { AppRoutingModule } from './app.routing.module';

//component imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

//service imports
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterByComponent } from './filter-by/filter-by.component';
import { FilterByService } from './filter-by/filter-by.service';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    WelcomeComponent,
    LoginComponent,
    SidebarComponent,
    FilterByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BugTrackerMaterialModule,
    HttpClientModule
  ],
  providers: [AuthService, LocalStorageService, FilterByService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
