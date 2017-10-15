import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
    selector: 'bt-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent{
    user: any = {};
    constructor(
        private authService: AuthService, private router: Router
    ){

    }

    submit(){
        this.authService.login(this.user);
        this.router.navigate(['welcome']);
    };
}