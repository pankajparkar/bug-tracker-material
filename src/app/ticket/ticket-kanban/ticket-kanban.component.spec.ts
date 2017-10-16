import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketKanbanComponent } from './ticket-kanban.component';

describe('TicketKanbanComponent', () => {
  let component: TicketKanbanComponent;
  let fixture: ComponentFixture<TicketKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
