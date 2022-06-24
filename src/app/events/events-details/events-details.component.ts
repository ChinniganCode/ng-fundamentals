import {Component} from "@angular/core";
import {EventService} from "../shared/index";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../shared/index";

@Component({
  templateUrl: './events-details.component.html',
  styles: [`
  .container { padding-left:20px; padding-right: 20px; }
  .event-image { height: 100px; }
  a {cursor:pointer;}
  `]
})
export class EventsDetailsComponent {
  event:IEvent
  addMode:boolean

  constructor(private eventService:EventService, private route:ActivatedRoute) {
  }

  ngOnInit() {
  this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession() {
    this.addMode = true
  }

}
