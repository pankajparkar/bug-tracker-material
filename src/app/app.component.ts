import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'bt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  url: string;
  constructor(private router: Router){ }

  openSidebar(){
    return this.url === '/dashboard';
  }

  ngOnInit(){
    this.router.events
    .subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.url = event.url;
      }
    });
  }
}
