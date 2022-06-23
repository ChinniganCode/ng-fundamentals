import {Component, OnInit} from '@angular/core'
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";
declare let toastr


@Component({
  selector: 'events-list',
  template:
    `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbNailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
  </div>
  `,
  styles: [`


  `]
})
export class EventsListComponent implements OnInit {
  events:any[]
  constructor(private eventService: EventService, private toastr: ToastrService) {

}
ngOnInit() {
  this.events = this.eventService.getEvents()
}
  handleThumbNailClick(eventName) {
    this.toastr.success(eventName)
  }
}


