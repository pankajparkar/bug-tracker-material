import { Component, Input, Output } from '@angular/core'

@Component({
    selector: 'bt-ticket-item',
    templateUrl: 'ticket-item.component.html'
})
export class TicketItemComponent{
    @Input() ticket: any;
}