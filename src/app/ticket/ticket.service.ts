import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TicketService {
    constructor(private http: HttpClient) { }
    getTicketList(){
        return this.http.get('/assets/api/tickets.json');
    }
}