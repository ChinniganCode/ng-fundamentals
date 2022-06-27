import { Component } from '@angular/core'
import { AuthService } from "../user/auth.service";
import {IEvent, ISession} from "../events/shared/event.model";
import {EventService} from "../events/index";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
  .nav.navbar-nav {font-size: 15px;}
  #searchForm {margin-right: 100px;}
  @media (max-width: 1200px) {#searchForm {display:none}}
  li > a.active { color: #F97924}
  `]
})

export class NavBarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];
  foundEvents: IEvent[];

  constructor(public auth: AuthService, private eventService:EventService) {
  }
  ngOnInit() {

  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {this.foundSessions = sessions});
    console.log(this.foundSessions);
  }
  getEvents() {
    this.eventService.getEvents().subscribe(events => {this.foundEvents = events});
    console.log(this.foundEvents);
  }
}
