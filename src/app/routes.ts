import {EventsListComponent} from "./events/events-list.component";
import {EventsDetailsComponent} from "./events/events-details/events-details.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/events-details/event-route-activator.service";

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['CanDeactivateCreateEvent']},
  { path: 'events', component: EventsListComponent},
  { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
]
