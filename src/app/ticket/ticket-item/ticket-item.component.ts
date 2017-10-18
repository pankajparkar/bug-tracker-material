import { Component, Input, Output } from '@angular/core'

@Component({
    selector: 'bt-ticket-item',
    templateUrl: 'ticket-item.component.html',
    styleUrls: ['ticket-item.component.css']
})
export class TicketItemComponent{
    @Input() ticket: any;
}