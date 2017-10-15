import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService{
    
    constructor(private http: HttpClient){

    }

    getTicketTypes(){
        return this.http.get('/assets/api/ticket-types.json');
    }

    getNames(){
        return this.http.get('/assets/api/names.json');
    }

    getTicketStatuses(){
        return this.http.get('/assets/api/ticket-status.json');
    }

    unWrapData(data: any){
        return data.json();
    }
}